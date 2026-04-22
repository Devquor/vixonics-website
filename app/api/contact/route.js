import { Resend } from 'resend';

const FROM_EMAIL = process.env.RESEND_FROM || 'Vixonics Website <onboarding@resend.dev>';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.RESEND_TEST_EMAIL || 'hawkgaming078@gmail.com';

function extractAllowedTestRecipient(message = '') {
  const match = message.match(/\(([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})\)/i);
  return match ? match[1] : null;
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY in environment.');
      return Response.json({ error: 'Email service is not configured' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, service, budget, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || 'N/A'),
      service: escapeHtml(service || 'General'),
      budget: escapeHtml(budget || 'N/A'),
      message: escapeHtml(message),
    };

    const emailPayload = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Inquiry: ${safe.service} from ${safe.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9fafb; border-radius: 8px;">
          <h2 style="color: #1e293b; border-bottom: 2px solid #2563eb; padding-bottom: 12px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px 0; color: #1e293b;">${safe.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email</td><td style="padding: 8px 0; color: #2563eb;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone</td><td style="padding: 8px 0; color: #1e293b;">${safe.phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Service</td><td style="padding: 8px 0; color: #1e293b;">${safe.service}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Budget</td><td style="padding: 8px 0; color: #1e293b;">${safe.budget}</td></tr>
          </table>
          <div style="margin-top: 24px; background: white; border-radius: 6px; padding: 20px; border-left: 4px solid #2563eb;">
            <p style="color: #64748b; font-weight: bold; margin: 0 0 8px;">Message:</p>
            <p style="color: #1e293b; line-height: 1.7; margin: 0;">${safe.message}</p>
          </div>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">Sent from vixonics.com · Cantt, Lahore, Pakistan</p>
        </div>
      `,
    };

    let { error } = await resend.emails.send(emailPayload);

    // Resend test mode allows only the account owner's inbox; retry there automatically.
    if (error?.statusCode === 403 && error?.name === 'validation_error') {
      const allowedRecipient = extractAllowedTestRecipient(error.message || '');
      if (allowedRecipient && allowedRecipient !== TO_EMAIL) {
        const retry = await resend.emails.send({ ...emailPayload, to: allowedRecipient });
        error = retry.error;
      }
    }

    if (error) {
      console.error('Resend API error:', error);
      return Response.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error('Email send error:', e);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
