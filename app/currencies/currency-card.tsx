'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';
import { Card, CardContent } from '../components/ShadcnUi/card';
import { Currency } from '../lib/utils/types';

interface CurrencyCardProps {
  currency: Currency;
}

export function CurrencyCard({ currency }: CurrencyCardProps) {
  // const priceChangeIsPositive = currency.price_change_percentage_24h >= 0;
  const color = currency.color;
  console.log(currency);

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
                <Image
                  src={currency.logo || '/logo.jpeg'}
                  alt={`${currency.name} logo`}
                  width={40}
                  height={40}
                  placeholder="blur"
                  blurDataURL="/logo.jpeg"
                  className="w-10 h-10 rounded-2xl"
                />
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
                <p className="font-semibold text-gray-900">price</p>
                <div
                  className={`flex items-center justify-end text-sm $
                  `}
                >
                  change
                </div>
              </div>
            </div>

            <div
              className={`grid grid-cols-2 divide-x`}
              style={{ backgroundColor: color }}
            >
              <div className="p-3 text-center">
                <p className="text-sm font-bold text-white">Risk</p>
                <p className="font-semibold text-white">{currency.risk} %</p>
              </div>
              <div className="p-3 text-center">
                <p className="text-sm font-bold text-white">Reward</p>
                <p className="font-semibold text-white">{currency.reward} %</p>
              </div>
            </div>

            <div className="px-4 py-3 bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="text-xs text-DarkBlue font-medium">
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
