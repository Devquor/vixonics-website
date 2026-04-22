# Vixonics Website

Marketing website for Vixonics, built with Next.js App Router.

## Environment Variables

Create `.env.local` in the project root:

```bash
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM="Vixonics Website <onboarding@resend.dev>"
CONTACT_TO_EMAIL=hello@vixonics.com
NEXT_PUBLIC_WHATSAPP_NUMBER=923000000000
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact Form Email

The contact form posts to `app/api/contact/route.js` and sends email through Resend.

- `RESEND_API_KEY` is required.
- Use a verified sender in `RESEND_FROM` for production.
- `CONTACT_TO_EMAIL` controls where new inquiries are delivered.

## Deployment

Deploy on Vercel or any Node-compatible platform supporting Next.js 16.
