'use client';

import { useState } from 'react';
import { CryptoNewsList, newsItems } from '@/app/news/cryptoNewsList';
import { CryptoMarketOverview } from '@/app/news/cryptoMarketOverview';
import { CryptoTrendingCoins } from '@/app/news/cryptoTrendCoins';
import { CryptoNewsFilters } from '@/app/news/cryptoNewsFilter';

// This would typically come from an API

export function CryptoNewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredNews = newsItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen  bg-WHITE">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CryptoNewsFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <CryptoNewsList newsItems={filteredNews} />
          </div>
          <div className="gap-4 flex flex-col items-center w-full mx-auto">
            <CryptoMarketOverview />
            <CryptoTrendingCoins />
          </div>
        </div>
      </div>
    </div>
  );
}
