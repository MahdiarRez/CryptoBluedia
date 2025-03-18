'use client';

import { useState, useEffect } from 'react';
import { Search, SortAsc } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { CryptoCurrency } from '../lib/utils/types';
import { CurrencyCard } from './currency-card';

interface CurrencyFilterServerProps {
  currencies: CryptoCurrency[];
}

export function CurrencyFilterServer({
  currencies,
}: CurrencyFilterServerProps) {
  const [filteredCurrencies, setFilteredCurrencies] = useState(currencies);
  const [sortOption, setSortOption] = useState<'rank' | 'price' | 'change'>(
    'rank'
  );
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => {
    let result = [...currencies];

    // Apply text filter
    if (filterQuery) {
      const query = filterQuery.toLowerCase();
      result = result.filter(
        (currency) =>
          currency.name.toLowerCase().includes(query) ||
          currency.symbol.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortOption) {
        case 'price':
          return b.current_price - a.current_price;
        case 'change':
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case 'rank':
        default:
          return a.market_cap_rank - b.market_cap_rank;
      }
    });

    setFilteredCurrencies(result);
  }, [currencies, filterQuery, sortOption]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search currencies..."
            className="pl-10"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <SortAsc className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-500 mr-2">Sort by:</span>

          {/* <RadioGroup
            defaultValue="rank"
            value={sortOption}
            onValueChange={(value) =>
              setSortOption(value as 'rank' | 'price' | 'change')
            }
            className="flex"
          >
            <div className="flex items-center space-x-1 mr-4">
              <RadioGroupItem value="rank" id="sort-rank" />
              <Label htmlFor="sort-rank" className="text-sm cursor-pointer">
                Rank
              </Label>
            </div>
            <div className="flex items-center space-x-1 mr-4">
              <RadioGroupItem value="price" id="sort-price" />
              <Label htmlFor="sort-price" className="text-sm cursor-pointer">
                Price
              </Label>
            </div>
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="change" id="sort-change" />
              <Label htmlFor="sort-change" className="text-sm cursor-pointer">
                24h Change
              </Label>
            </div>
          </RadioGroup> */}
        </div>
      </div>

      {filteredCurrencies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No cryptocurrencies found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCurrencies.map((currency) => (
            <CurrencyCard key={currency.id} currency={currency} />
          ))}
        </div>
      )}
    </>
  );
}
