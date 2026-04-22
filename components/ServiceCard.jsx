'use client';

import GlowCard from './GlowCard';

export default function ServiceCard({ icon, title, description, slug }) {
  return (
    <GlowCard
      icon={icon}
      title={title}
      description={description}
      link={`/services#${slug}`}
    />
  );
}
