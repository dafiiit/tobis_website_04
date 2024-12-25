import React from 'react';

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
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-600 whitespace-pre-line">{content}</p>
    </div>
  );
}
