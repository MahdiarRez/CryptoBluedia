'use client';
import React from 'react';
import { SelectItem, Select } from '@/app/components/ui/select';
import Image from 'next/image';
import ppl from '@/public/newsPpl.jpg';
import { TextGenerate } from '@/app/components/ui/textGenerate';

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
    <div className="mb-6 bg-DarkBlue text-WHITE py-6 px-7 rounded-2xl relative overflow-hidden flex flex-col gap-y-4">
      <TextGenerate
        preset={'fade-in-blur'}
        per={'line'}
        classes={'text-3xl z-[9] relative font-bold mb-4 text-left'}
        text={'Latest Crypto News'}
      />
      <div
        className={
          'absolute w-full top-0  h-full right-0 bg-gradient-to-l from-WHITE/10 via-DarkBlue/60 z-[1] to-DarkBlue'
        }
      ></div>
      <Image
        src={ppl}
        alt={'ppl'}
        placeholder={'empty'}
        className={
          'absolute top-0 w-full -bottom-5 h-full right-0 z-[0] object-cover object-left opacity-40 translate-x-1/3'
        }
      />
      <div className="flex flex-col sm:flex-row gap-4 relative z-[9] ">
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          placeholder="Category"
          className="w-full sm:w-[180px]"
        >
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap text-DarkBlue relative z-[9]  gap-2">
        {categories.slice(1).map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className="text-xs  rounded-xl hover:bg-LightBlue  border"
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}
