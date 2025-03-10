'use client';

import { Search } from 'lucide-react';
import { ButtonShadcn } from '@/app/components/buttonShadcn';
import {
  SelectShadcn,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/selectShadcn';

interface CryptoNewsFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function CryptoNewsFilters({
  // searchQuery,
  // setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: CryptoNewsFiltersProps) {
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'bitcoin', label: 'Bitcoin' },
    { value: 'ethereum', label: 'Ethereum' },
    { value: 'defi', label: 'DeFi' },
    { value: 'nft', label: 'NFTs' },
    { value: 'regulation', label: 'Regulation' },
    { value: 'banking', label: 'Banking' },
  ];

  return (
    <div className="mb-6 space-y-4">
      <h2 className="text-2xl font-bold">Latest Crypto News</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <span>inut</span>
        </div>
        <SelectShadcn
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectShadcn>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.slice(1).map((category) => (
          <ButtonShadcn
            key={category.value}
            variant={
              selectedCategory === category.value ? 'default' : 'outline'
            }
            size="sm"
            onClick={() => setSelectedCategory(category.value)}
            className="text-xs"
          >
            {category.label}
          </ButtonShadcn>
        ))}
      </div>
    </div>
  );
}
