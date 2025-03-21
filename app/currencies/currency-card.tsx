'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ShadcnUi/card';
import { CryptoCurrency } from '../lib/utils/types';
import { formatCurrency, formatPercentage } from '../lib/formatter';

interface CurrencyCardProps {
  currency: CryptoCurrency;
}

export function CurrencyCard({ currency }: CurrencyCardProps) {
  const priceChangeIsPositive = currency.price_change_percentage_24h >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Link href={`/currencies/${currency.id}`} className="block h-full">
        <Card className="h-full overflow-hidden border hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="flex items-center p-4 border-b">
              <div className="relative mr-3">
                <img
                  src={currency.image || '/placeholder.svg'}
                  alt={`${currency.name} logo`}
                  className="w-10 h-10 rounded-full"
                />
                {currency.market_cap_rank <= 10 && (
                  <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{currency.name}</h3>
                <p className="text-sm text-gray-500">
                  {currency?.symbol?.toUpperCase()}
                </p>
              </div>
              <div className="ml-auto text-right">
                <p className="font-semibold text-gray-900">
                  {formatCurrency(currency.current_price)}
                </p>
                <div
                  className={`flex items-center justify-end text-sm ${
                    priceChangeIsPositive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {priceChangeIsPositive ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {formatPercentage(currency.price_change_percentage_24h)}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x">
              <div className="p-3 text-center">
                <p className="text-xs text-gray-500">Market Cap</p>
                <p className="font-medium text-gray-900">
                  {formatCurrency(currency.market_cap, 0, true)}
                </p>
              </div>
              <div className="p-3 text-center">
                <p className="text-xs text-gray-500">Volume (24h)</p>
                <p className="font-medium text-gray-900">
                  {formatCurrency(currency.total_volume, 0, true)}
                </p>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Rank #{currency.market_cap_rank}
                </div>
                <div className="text-xs text-blue-600 font-medium">
                  View Details →
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
