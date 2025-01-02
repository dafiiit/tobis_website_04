import React, { useRef, useState, useEffect } from 'react';
import { NewsItem } from '../../types/news';
import NewsCard from './NewsCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsListProps {
  news: NewsItem[];
  onSelectNews: (news: NewsItem) => void;
}

export default function NewsList({ news, onSelectNews }: NewsListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();

      return () => scrollContainer.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 350; // Width of a single card
      const gap = 24; // space-x-6 equals 1.5rem = 24px
      const scrollAmount = cardWidth + gap;

      const targetScroll = container.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group">
      {/* Left scroll button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 
                     bg-white rounded-full p-2 shadow-lg 
                     transition-all duration-300 hover:bg-gray-50
                     focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
      )}

      {/* Carousel container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide"
      >
        <div className="flex space-x-6 py-12 px-8 lg:px-16">
          {news.map((item) => (
            <div
              className="w-[350px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              key={item.id}
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
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 
                     bg-white rounded-full p-2 shadow-lg 
                     transition-all duration-300 hover:bg-gray-50
                     focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      )}
    </div>
  );
}