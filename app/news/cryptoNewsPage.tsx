'use client';

import { Suspense, useState } from 'react';
import { CryptoNewsList } from '@/app/news/cryptoNewsList';
import { CryptoMarketOverview } from '@/app/news/cryptoMarketOverview';
import { CryptoTrendingCoins } from '@/app/news/cryptoTrendCoins';
import type { NewsItem } from '@/app/lib/utils/types';
import { CryptoNewsFilters } from '@/app/news/cryptoNewsFilter';

// This would typically come from an API
export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Bitcoin Surges Past $60,000 as Institutional Adoption Grows',
    summary:
      'Bitcoin has reached new heights as major financial institutions continue to invest in the cryptocurrency.',
    source: 'CryptoDaily',
    date: '2025-03-10T10:30:00Z',
    imageUrl: '/placeholder.svg?height=200&width=300',
    category: 'bitcoin',
    url: '#',
  },
  {
    id: '2',
    title: 'Ethereum 2.0 Upgrade: What You Need to Know',
    summary:
      'The long-awaited Ethereum upgrade promises improved scalability and reduced energy consumption.',
    source: 'BlockchainInsider',
    date: '2025-03-09T14:15:00Z',
    imageUrl: '/placeholder.svg?height=200&width=300',
    category: 'ethereum',
    url: '#',
  },
  {
    id: '3',
    title: 'Regulatory Clarity: New Crypto Framework Announced',
    summary:
      'Government officials have unveiled a comprehensive regulatory framework for cryptocurrencies.',
    source: 'CryptoRegulation',
    date: '2025-03-08T09:45:00Z',
    imageUrl: '/placeholder.svg?height=200&width=300',
    category: 'regulation',
    url: '#',
  },
  {
    id: '4',
    title: 'DeFi Protocol Reaches $10 Billion in Total Value Locked',
    summary:
      'A leading decentralized finance protocol has achieved a significant milestone in total value locked.',
    source: 'DeFiPulse',
    date: '2025-03-07T16:20:00Z',
    imageUrl: '/placeholder.svg?height=200&width=300',
    category: 'defi',
    url: '#',
  },
  {
    id: '5',
    title: 'NFT Market Shows Signs of Recovery After Slump',
    summary:
      'The non-fungible token market is showing positive signals after months of declining sales volumes.',
    source: 'NFTWorld',
    date: '2025-03-06T11:10:00Z',
    imageUrl: '/placeholder.svg?height=200&width=300',
    category: 'nft',
    url: '#',
  },
  {
    id: '6',
    title: 'Major Bank Launches Cryptocurrency Custody Service',
    summary:
      "One of the world's largest banks has announced a new cryptocurrency custody solution for institutional clients.",
    source: 'BankingTech',
    date: '2025-03-05T13:40:00Z',
    imageUrl: '/placeholder.svg?height=200&width=300',
    category: 'banking',
    url: '#',
  },
];

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
            <Suspense fallback="loading . . .">
              <CryptoMarketOverview />
            </Suspense>
            <CryptoTrendingCoins />
          </div>
        </div>
      </div>
    </div>
  );
}
