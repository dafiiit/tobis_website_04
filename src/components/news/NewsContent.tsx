import React from 'react';
import parse from 'html-react-parser';

interface NewsContentProps {
  description: string;
  content: string;
}

export default function NewsContent({
  description,
  content,
}: NewsContentProps) {
  return (
    <div className="prose text-primary max-w-none">
      <p className="mb-4 font-semibold">{description}</p>
      <div>{parse(content)}</div>
    </div>
  );
}
