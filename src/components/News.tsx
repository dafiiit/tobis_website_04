import React, { useState } from 'react';
import { newsData } from '../data/newsData';
import { NewsItem } from '../types/news';
import NewsList from './news/NewsList';
import NewsDetail from './news/NewsDetail';

export default function News() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const handleSelectNews = (news: NewsItem) => {
    // Scroll to the news section before showing the detail
    document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' });
    setSelectedNews(news);
  };

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
            onSelectNews={handleSelectNews}
          />
        )}
      </div>
    </section>
  );
}