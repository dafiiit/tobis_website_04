import React from 'react';
import { NewsItem } from '../../types/news';

interface NewsDetailProps {
  news: NewsItem;
  onBack: () => void;
}

export default function NewsDetail({ news, onBack }: NewsDetailProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-primary">{news.title}</h3>
        <button onClick={onBack} className="btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <p className="text-gray-600 mb-4">{news.date}</p>

      {news.image && (
        <img
          src={news.image}
          alt={news.title}
          className="w-full rounded-xl mb-6"
        />
      )}

      <p className="text-gray-600 mb-4">{news.description}</p>

      <div className="text-gray-600 whitespace-pre-wrap">
        {news.content}
      </div>

      {news.source && (
        <a
          href={news.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline mt-4 block"
        >
          Quelle
        </a>
      )}
    </div>
  );
}
