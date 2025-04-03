'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ShadcnUi/card';
import { CryptoCurrency } from '../lib/utils/types';
import { formatCurrency, formatPercentage } from '../lib/formatter';
import { useEffect } from 'react';

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
        <Card className="h-full overflow-hidden border-none hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-0">
            <div className="flex items-center p-4 border-b bg-white">
              <div className="relative mr-3">
                <img
                  src={currency.image || '/placeholder.svg'}
                  alt={`${currency.name} logo`}
                  className="w-10 h-10 rounded-full"
                />
                {currency?.market_cap_rank <= 10 && (
                  <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full w-5 h-5 flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium text-DarkBlue capitalize">
                  {currency.name}
                </h3>
                <p className="text-sm text-gray-500 opacity-70">
                  {currency?.id?.toUpperCase()}
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

            <div className="grid grid-cols-2 divide-x bg-LightBlue/80">
              <div className="p-3 text-center">
                <p className="text-xs text-white">Risk</p>
                <p className="font-medium text-white">{currency.risk} %</p>
              </div>
              <div className="p-3 text-center">
                <p className="text-xs text-white">Reward</p>
                <p className="font-medium text-white">{currency.reward} %</p>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Rank 2025 #{currency.rank2025}
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
