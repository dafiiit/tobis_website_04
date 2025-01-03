import React, { useState, useEffect } from 'react';
import { newsData } from '../data/newsData';
import { NewsItem } from '../types/news';
import NewsList from './news/NewsList';
import NewsDetail from './news/NewsDetail';

export default function News() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  useEffect(() => {
    if (selectedNews) {
      // Scroll to the news section smoothly when a card is selected
      document.getElementById('news')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [selectedNews]);

  return (
    <section id="news" className="py-24 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-primary mb-16 px-4">Viel getan</h2>

      {selectedNews ? (
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <NewsDetail
            news={selectedNews}
            onBack={() => setSelectedNews(null)}
          />
        </div>
      ) : (
        <NewsList
          news={newsData}
          onSelectNews={setSelectedNews}
        />
      )}
    </section>
  );
}