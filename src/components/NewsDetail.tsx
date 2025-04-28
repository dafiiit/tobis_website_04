import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface NewsDetailProps {
  news: {
    title: string;
    description: string;
    image: string;
    content: string;
  };
  onBack: () => void;
}

export default function NewsDetail({ news, onBack }: NewsDetailProps) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <button
          onClick={onBack}
          className="flex items-center text-primary hover:text-blue-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Übersicht
        </button>
        <h2 className="text-2xl font-semibold text-primary mt-2 mb-4">
          {news.title}
        </h2>
        <div className="prose text-primary max-w-none">
          <p className="mb-4 font-semibold">{news.description}</p>
          <div dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>
      </div>
    </div>
  );
}
