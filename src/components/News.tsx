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
  const [visibleItems, setVisibleItems] = useState(2); // Changed from 3 to 2

  useEffect(() => {
    if (selectedNewsId !== null) {
      const newsItem = newsData.find(item => item.id === selectedNewsId);
      if (newsItem) {
        setSelectedNews(newsItem);
      }
    }
  }, [selectedNewsId]);

  const visibleNews = newsData.slice(0, visibleItems);
  const hasMoreItems = visibleItems < newsData.length;

  const handleShowMore = () => {
    setVisibleItems(prev => Math.min(prev + 2, newsData.length));
  };

  const handleShowLess = () => {
    setVisibleItems(2);
  };

  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-16">Viel getan</h2>

        <NewsList
          news={visibleNews}
          onSelectNews={setSelectedNews}
        />

        <div className="text-center mt-8">
          {hasMoreItems ? (
            <button
              onClick={handleShowMore}
              className="inline-block px-8 py-3 btn-secondary text-white rounded-full hover:btn-secondary:hover transition-colors"
            >
              Mehr anzeigen
            </button>
          ) : visibleItems > 2 && (
            <button
              onClick={handleShowLess}
              className="inline-block px-8 py-3 btn-secondary text-white rounded-full hover:btn-secondary:hover transition-colors"
            >
              Weniger anzeigen
            </button>
          )}
        </div>

        {/* Modal for News Detail */}
        {selectedNews && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4" style={{ zIndex: 1000 }}>
            <div className="bg-white rounded-xl overflow-hidden max-w-screen-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <NewsDetail
                  news={selectedNews}
                  onBack={() => setSelectedNews(null)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}