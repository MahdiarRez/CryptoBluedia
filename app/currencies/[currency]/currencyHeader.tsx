import React from 'react';
import { Skeleton } from '@/app/components/ShadcnUi/skeleton';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

type currnecyHeaderT = {
  loading?: boolean;
  colorPalette: { primary: string; secondary: string };
  cryptoData?: {
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
  } | null;
};

function CurrencyHeader({
  loading,
  colorPalette,
  cryptoData,
}: currnecyHeaderT) {
  return (
    <motion.header
      className="mb-7 rounded-2xl border p-6 bg-DarkBlue"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <div className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-full opacity-75 blur-sm"
                style={{
                  background: `radial-gradient(circle, ${colorPalette?.primary}, ${colorPalette?.secondary})`,
                }}
              ></div>
              <img
                src={cryptoData?.image || '/placeholder.svg?height=64&width=64'}
                alt={`${cryptoData?.name || 'Cryptocurrency'} Logo`}
                className="relative h-16 w-16 rounded-full border-2 border-white/20"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                {cryptoData?.name || 'Cryptocurrency'}
                <span className="ml-2" style={{ color: colorPalette.primary }}>
                  {cryptoData?.symbol?.toUpperCase() || 'CRYPTO'}
                </span>
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold text-white">
                  ${cryptoData?.current_price.toLocaleString() || '0.00'}
                </span>
                {cryptoData && (
                  <span
                    className={`flex items-center text-sm ${cryptoData?.price_change_percentage_24h >= 0 ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {cryptoData?.price_change_percentage_24h >= 0 ? (
                      <ArrowUpRight className="mr-1 h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="mr-1 h-4 w-4" />
                    )}
                    {Math.abs(cryptoData?.price_change_percentage_24h).toFixed(
                      2
                    )}
                    %
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default CurrencyHeader;
