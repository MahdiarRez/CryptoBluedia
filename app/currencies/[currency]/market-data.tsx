'use client';

import type { CryptoData } from '@/app/lib/utils/types';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  Globe,
} from 'lucide-react';
import { motion } from 'motion/react';
import { GlassCard } from '@/app/components/ShadcnUi/glass-card';
import { CardContent } from '@/app/components/ShadcnUi/card';

interface MarketDataProps {
  data: CryptoData | null;
  colors?: {
    secondary: string;
    primaryWithOpacity: (opacity: number) => string;
    background: string;
    secondaryWithOpacity: (opacity: number) => string;
    primary: string;
  };
}

export default function MarketData({ data, colors }: MarketDataProps) {
  // If no data is provided, use sample data
  const marketData = data || {
    market_cap: 5800000000,
    market_cap_rank: 12,
    total_volume: 320000000,
    high_24h: 5.45,
    low_24h: 5.12,
    circulating_supply: 1200000000,
    total_supply: 1500000000,
    max_supply: 1500000000,
    ath: 49.69,
    ath_date: '2021-11-04T14:10:09.301Z',
    ath_change_percentage: -89.2,
    atl: 2.69,
    atl_date: '2020-08-20T05:48:11.359Z',
    atl_change_percentage: 94.8,
  };

  const stats = [
    {
      title: 'Market Cap',
      value: `$${formatNumber(marketData.market_cap)}`,
      icon: <DollarSign className="h-4 w-4" />,
      subtitle: `Rank #${marketData.market_cap_rank}`,
      color: 'from-[#28c9e1] to-[#1a95a7]',
    },
    {
      title: '24h Trading Vol',
      value: `$${formatNumber(marketData.total_volume)}`,
      icon: <BarChart3 className="h-4 w-4" />,
      subtitle: '',
      color: 'from-[#1a95a7] to-[#0d1217]',
    },
    {
      title: '24h High / Low',
      value: `$${marketData.high_24h?.toFixed(2)} / $${marketData.low_24h?.toFixed(2)}`,
      icon:
        marketData.high_24h > marketData.low_24h ? (
          <TrendingUp className="h-4 w-4 text-[#28c9e1]" />
        ) : (
          <TrendingDown className="h-4 w-4 text-red-400" />
        ),
      subtitle: '',
      color: 'from-[#28c9e1] to-[#0d1217]',
    },
    {
      title: 'Circulating Supply',
      value: `${formatNumber(marketData.circulating_supply)} DOT`,
      icon: <Globe className="h-4 w-4" />,
      subtitle: `${((marketData.circulating_supply / marketData.total_supply) * 100).toFixed(1)}% of total supply`,
      color: 'from-[#0d1217] to-[#28c9e1]',
    },
    {
      title: 'All-Time High',
      value: `$${marketData.ath?.toFixed(2)}`,
      icon: <TrendingUp className="h-4 w-4" />,
      subtitle: `${marketData.ath_change_percentage?.toFixed(1)}% (${formatDate(marketData.ath_date)})`,
      color: 'from-[#1a95a7] to-[#28c9e1]',
    },
    {
      title: 'All-Time Low',
      value: `$${marketData.atl?.toFixed(2)}`,
      icon: <TrendingDown className="h-4 w-4" />,
      subtitle: `${marketData.atl_change_percentage?.toFixed(1)}% (${formatDate(marketData.atl_date)})`,
      color: 'from-[#28c9e1] to-[#1a95a7]',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <GlassCard className="overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className={`h-full w-full bg-gradient-to-br ${stat.color}`}
              ></div>
            </div>
            <CardContent className="relative flex flex-col p-6">
              <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
                <div
                  className={`rounded-full bg-gradient-to-r ${stat.color} p-1`}
                >
                  {stat.icon}
                </div>
                <span>{stat.title}</span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              {stat.subtitle && (
                <div className="mt-1 text-xs text-white/50">
                  {stat.subtitle}
                </div>
              )}
            </CardContent>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}

function formatNumber(num?: number): string {
  if (!num) return '0';

  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(2)}B`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(2)}K`;
  }
  return num.toString();
}

function formatDate(dateString?: string): string {
  if (!dateString) return '';

  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();

  return `${month} ${year}`;
}
