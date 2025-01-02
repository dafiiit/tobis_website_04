import React, { useState, useEffect } from 'react';
import { newsData } from '../data/newsData';
import { NewsItem } from '../types/news';
import NewsList from './news/NewsList';
import NewsDetail from './news/NewsDetail';

interface NewsProps {
  selectedNewsId: number | null;
}

export default function News({ selectedNewsId }: NewsProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    if (selectedNewsId) {
      const newsItem = newsData.find(item => item.id === selectedNewsId);
      setSelectedNews(newsItem || null);
    } else {
      setSelectedNews(null);
    }
  }, [selectedNewsId]);

  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-16">Viel getan</h2>

        {selectedNews ? (
          <NewsDetail
            news={selectedNews}
            onBack={() => setSelectedNews(null)}
          />
        ) : (
          <NewsList
            news={newsData}
            onSelectNews={setSelectedNews}
          />
        )}
      </div>
    </section>
  );
}