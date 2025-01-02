import React from 'react';
import { NewsItem } from '../../types/news';

interface NewsCardProps {
  news: NewsItem;
  onReadMore: (news: NewsItem) => void;
}

export default function NewsCard({ news, onReadMore }: NewsCardProps) {
  return (
    <div
      onClick={() => onReadMore(news)}
      className="glass rounded-xl overflow-hidden hover:transform hover:-translate-y-1 
                 transition-all cursor-pointer h-[500px] flex flex-col"
    >
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-56 object-cover flex-shrink-0"
      />
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm text-primary font-semibold flex-shrink-0">{news.date}</span>
        <h3 className="text-xl font-semibold text-primary mt-2 mb-3 flex-shrink-0">
          {news.title}
        </h3>
        <p className="text-gray-600 overflow-auto">{news.description}</p>
      </div>
    </div>
  );
}
