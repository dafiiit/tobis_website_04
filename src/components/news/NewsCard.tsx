import React from 'react';
import { NewsItem } from '../../types/news';

interface NewsCardProps {
  news: NewsItem;
  onReadMore: (news: NewsItem) => void;
}

export default function NewsCard({ news, onReadMore }: NewsCardProps) {
  return (
    <div className="glass rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm text-primary font-semibold">{news.date}</span>
        <h3 className="text-xl font-semibold text-primary mt-2 mb-3">
          {news.title}
        </h3>
        <p className="text-gray-600">{news.description}</p>
        <button
          onClick={() => onReadMore(news)}
          className="mt-4 text-primary font-semibold hover:text-blue-700"
        >
          Weiterlesen →
        </button>
      </div>
    </div>
  );
}
