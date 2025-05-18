'use client';

import { useState, useEffect } from 'react';
import { Search, SortAsc } from 'lucide-react';
import { Currency } from '../lib/utils/types';
import { CurrencyCard } from './currency-card';
import { Label } from '@radix-ui/react-label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

interface CurrencyFilterServerProps {
  currencies: Currency[];
}

export function CurrencyFilterServer({
  currencies,
}: CurrencyFilterServerProps) {
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies);
  const [sortOption, setSortOption] = useState<
    'rank2025' | 'risk' | 'sentiment'
  >('rank2025');
  const [filterQuery, setFilterQuery] = useState('');
  console.log(currencies.map((item) => item.name));

  useEffect(() => {
    let result = [...currencies];

    // Apply text filter
    if (filterQuery) {
      const query = filterQuery?.toLowerCase();
      result = result.filter(
        (currency) =>
          currency?.name?.toLowerCase().includes(query) ||
          currency?.id?.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortOption) {
        case 'rank2025':
          return a.rank2025 - b.rank2025;
        case 'sentiment':
          return b.sentiment - a.sentiment;
        case 'risk':
        default:
          return a.risk - b.risk;
      }
    });

    setFilteredCurrencies(result);
  }, [currencies, filterQuery, sortOption]);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="relative w-5/6 sm:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search currencies..."
            className="pl-10 bg-white text-DarkBlue py-2 rounded-xl focus:border-none border-none outline-none w-full"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 flex-nowrap">
          {/* <SortAsc className="h-4 w-4 text-DarkBlue text-lg" />
          <span className="text-lg text-DarkBlue mr-2 text-nowrap">
            Sort by :
          </span> */}

          <RadioGroup
            defaultValue="rank"
            value={sortOption}
            onValueChange={(value) =>
              setSortOption(value as 'rank2025' | 'sentiment' | 'risk')
            }
            className="flex"
          >
            <div className="flex items-center space-x-1 mr-4">
              <RadioGroupItem value="rank2025" id="sort-rank2025" />
              <Label
                htmlFor="sort-rank2025"
                className="text-sm cursor-pointer dark:text-white text-DarkBlue"
              >
                Rank
              </Label>
            </div>
            <div className="flex items-center space-x-1 mr-4">
              <RadioGroupItem value="sentiment" id="sort-sentiment" />
              <Label
                htmlFor="sort-sentiment"
                className="text-sm cursor-pointer dark:text-white text-DarkBlue"
              >
                Sentiment
              </Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="risk" id="sort-risk" />
              <Label
                htmlFor="sort-risk"
                className="text-sm cursor-pointer dark:text-white text-DarkBlue"
              >
                Risk
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {filteredCurrencies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No cryptocurrencies found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg2:grid-cols-3 gap-4">
          {filteredCurrencies.map((currency) => (
            <CurrencyCard key={currency.id} currency={currency} />
          ))}
        </div>
      )}
    </>
  );
}
