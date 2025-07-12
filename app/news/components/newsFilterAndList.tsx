'use client';
import { useState } from 'react';
import { CryptoNewsList, newsItems } from '@/app/news/cryptoNewsList';
import { CryptoNewsFilters } from '@/app/news/cryptoNewsFilter';

function NewsFilterAndList() {
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
    <>
      <CryptoNewsFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CryptoNewsList newsItems={filteredNews} />
    </>
  );
}

export default NewsFilterAndList;
