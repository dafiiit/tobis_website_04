import React, { useRef, useState } from 'react';
import { NewsItem } from '../../types/news';
import NewsCard from './NewsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsListProps {
  news: NewsItem[];
  onSelectNews: (news: NewsItem) => void;
}

export default function NewsList({ news, onSelectNews }: NewsListProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create an array that includes copies of the first few items at the end
  const extendedNews = [...news];

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = 350; // Width of a single card
    const gap = 24; // space-x-6 equals 1.5rem = 24px

    let newIndex = direction === 'left'
      ? currentIndex - 1
      : currentIndex + 1;

    // Handle infinite loop
    if (newIndex < 0) {
      newIndex = news.length - 1;
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = (news.length) * (cardWidth + gap);
      setTimeout(() => {
        container.style.scrollBehavior = 'smooth';
        container.scrollLeft = (newIndex) * (cardWidth + gap);
      }, 0);
    } else if (newIndex >= news.length) {
      newIndex = 0;
      container.style.scrollBehavior = 'auto';
      container.scrollLeft = 0;
    }

    container.style.scrollBehavior = 'smooth';
    container.scrollLeft = newIndex * (cardWidth + gap);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative group">
      {/* Left scroll button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 
                   bg-white rounded-full p-2 shadow-lg 
                   transition-all duration-300 hover:bg-gray-50
                   focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>

      {/* Carousel container */}
      <div
        ref={containerRef}
        className="overflow-x-hidden no-scrollbar"
      >
        <div className="flex space-x-6 py-12 px-8 lg:px-16">
          {extendedNews.map((item, index) => (
            <div
              className="w-[350px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              key={`${item.id}-${index}`}
            >
              <NewsCard
                news={item}
                onReadMore={onSelectNews}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right scroll button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 
                   bg-white rounded-full p-2 shadow-lg 
                   transition-all duration-300 hover:bg-gray-50
                   focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>
    </div>
  );
}