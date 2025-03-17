import React from 'react';
import { Skeleton } from '@/app/components/ShadcnUi/skeleton';
import {
  ArrowDownRight,
  ArrowUpRight,
  Globe,
  Award,
  Clock,
} from 'lucide-react';
import { motion } from 'motion/react';

type currnecyHeaderT = {
  loading?: boolean;
  colorPalette: {
    primary: string;
    secondary: string;
    primaryWithOpacity?: (opacity: number) => string;
  };
  cryptoData?: {
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap?: number;
    market_cap_rank?: number;
    total_volume?: number;
    ath?: number;
    ath_change_percentage?: number;
    id?: string;
  } | null;
};

function CurrencyHeader({
  loading,
  colorPalette,
  cryptoData,
}: currnecyHeaderT) {
  // Helper function to format large numbers
  const formatNumber = (num?: number): string => {
    if (!num) return 'N/A';
    if (num >= 1000000000) return `${(num / 1e9).toFixed(2)}B`;
    if (num >= 1000000) return `${(num / 1e6).toFixed(2)}M`;
    if (num >= 1000) return `${(num / 1e3).toFixed(2)}K`;
    return num.toLocaleString();
  };

  // Create a withOpacity function if not provided
  const withOpacity = (color: string, opacity: number): string => {
    return colorPalette.primaryWithOpacity
      ? colorPalette.primaryWithOpacity(opacity)
      : `${color}${Math.round(opacity * 255)
          .toString(16)
          .padStart(2, '0')}`;
  };

  return (
    <motion.header
      className="mb-2 rounded-2xl border overflow-hidden bg-DarkBlue"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <div className="p-6">
          <div className="flex items-center gap-4">
            <Skeleton className="h-16 w-16 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Top section with logo and name */}
          <div className="p-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="absolute -inset-1 rounded-full opacity-75 blur-sm"
                    style={{
                      background: `radial-gradient(circle, ${colorPalette?.primary}, ${colorPalette?.secondary})`,
                    }}
                  ></div>
                  <img
                    src={
                      cryptoData?.image || '/placeholder.svg?height=64&width=64'
                    }
                    alt={`${cryptoData?.name || 'Cryptocurrency'} Logo`}
                    className="relative h-16 w-16 rounded-full border-2 border-white/20"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold text-white capitalize">
                      {cryptoData?.name || 'Cryptocurrency'}
                    </h1>
                    <span
                      className="text-sm font-medium px-2 py-0.5 rounded-md text-white"
                      style={{
                        background: `linear-gradient(to right, ${colorPalette.primary}, ${colorPalette.secondary})`,
                      }}
                    >
                      {cryptoData?.symbol?.toUpperCase() || 'CRYPTO'}
                    </span>
                  </div>
                  <div className="flex flex-nowrap flex-col xs:flex-row xs:items-center items-start gap-1 my-2 xs:my-1 ">
                    <a
                      href={`https://${cryptoData?.id || 'cryptocurrency'}.network`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs text-nowrap text-gray-400 hover:text-gray-300"
                    >
                      <Globe className="h-3 w-3 mr-1" /> Official Website
                    </a>
                    <span className="text-gray-600 hidden xs:block">•</span>
                    <span className="flex items-center text-xs text-nowrap text-gray-400">
                      <Award className="h-3 w-3 mr-1" /> Rank 2025 #
                      {cryptoData?.market_cap_rank || 'N/A'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-nowrap self-start items-center gap-2">
                <div
                  className="px-1.5 sm:px-3 py-1 text-nowrap flex-nowrap rounded-md text-xs font-medium"
                  style={{
                    backgroundColor: withOpacity(colorPalette.primary, 0.2),
                    color: colorPalette.primary,
                  }}
                >
                  <Clock className="inline-block h-3 w-3 mr-1" />
                  Last updated: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>

          {/* Price and stats section */}
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Price */}
            <div className="p-4 flex flex-col justify-center">
              <div className="text-sm text-gray-400 mb-1">Current Price</div>
              <div className="flex items-center">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  ${cryptoData?.current_price.toLocaleString() || '0.00'}
                </span>
                {cryptoData && (
                  <span
                    className={`ml-2 flex items-center text-xs sm:text-sm ${
                      cryptoData.price_change_percentage_24h >= 0
                        ? 'text-green-400'
                        : 'text-red-400'
                    }`}
                  >
                    {cryptoData.price_change_percentage_24h >= 0 ? (
                      <ArrowUpRight className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                    ) : (
                      <ArrowDownRight className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                    {Math.abs(cryptoData.price_change_percentage_24h).toFixed(
                      2
                    )}
                    %
                  </span>
                )}
              </div>
            </div>

            {/* Market Cap */}
            <div className="p-4 flex flex-col justify-center">
              <div className="text-sm text-gray-400 mb-1">Market Cap</div>
              <div className="flex items-center">
                <span className="text-xl font-semibold text-white">
                  ${formatNumber(cryptoData?.market_cap)}
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-center">
              <div className="text-sm text-gray-400 mb-1">Sicne of</div>
              <div className="flex items-center">
                <span className="text-xl font-semibold text-white">2017</span>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-center">
              <div className="text-sm text-gray-400 mb-1">Narrative</div>
              <div className="flex items-center">
                <span className="text-xl font-semibold text-white">Layer0</span>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.header>
  );
}

export default CurrencyHeader;
