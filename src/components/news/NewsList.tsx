import React from 'react';
import { NewsItem } from '../../types/news';
import NewsCard from './NewsCard';

interface NewsListProps {
  news: NewsItem[];
  onSelectNews: (news: NewsItem) => void;
}

export default function NewsList({ news, onSelectNews }: NewsListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {news.map((item) => (
        <NewsCard 
          key={item.id} 
          news={item} 
          onReadMore={onSelectNews}
        />
      ))}
    </div>
  );
}