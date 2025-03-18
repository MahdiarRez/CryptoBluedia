'use client';

import type React from 'react';

import { useEffect, useState } from 'react';
import { fetchCryptoData } from '@/app/lib/api';
import type { CryptoCurrency, CryptoData } from '@/app/lib/utils/types';
import { Tabs, TabsContent, TabsList } from '@/app/components/ShadcnUi/tabs';
import { CardContent } from '@/app/components/ShadcnUi/card';
import { Skeleton } from '@/app/components/ShadcnUi/skeleton';
import {
  ArrowUpRight,
  Zap,
  BarChart3,
  Info,
  Newspaper,
  Activity,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import { generatePalette, withOpacity } from '@/app/lib/color-utils';

// Import components
import TokenomicsVisualization from '@/app/currencies/[currency]/tokenomics-visualization';
import AboutSection from '@/app/currencies/[currency]/about-section';
import IndicatorsSection from '@/app/currencies/[currency]/indicators-section';
import { GlassCard } from '@/app/components/ShadcnUi/glass-card';
import { AnimatedTabsTrigger } from '@/app/components/ShadcnUi/animated-tabs-trigger';
import CurrencyHeader from '@/app/currencies/[currency]/currencyHeader';
import { newsItems } from '@/app/news/cryptoNewsPage';
import { CryptoNewsCard } from '@/app/news/cryptoNewsCard';
import Link from 'next/link';
import Button from '@/app/components/button';

interface CryptoDetailsProps {
  cryptoId: string;
  initialData?: CryptoCurrency; // Optional initial data from server
}

export default function CryptoDetails({
  cryptoId,
  initialData,
}: CryptoDetailsProps) {
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(!initialData);
  const [error, setError] = useState<string | null>(null);

  // Default colors until data is loaded
  const [colorPalette, setColorPalette] = useState({
    primary: '#28c9e1',
    secondary: '#F5F4F6',
    background: '#0d1217',
    primaryWithOpacity: (opacity: number) => `rgba(40, 201, 225, ${opacity})`,
    secondaryWithOpacity: (opacity: number) =>
      `rgba(245, 244, 246, ${opacity})`,
  });

  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchCryptoData(cryptoId);
      setCryptoData(data);

      // Generate color palette from the currency's color
      if (data.color) {
        const palette = generatePalette(data.color);
        setColorPalette({
          primary: data.color,
          secondary: data.secondaryColor || '#333333',
          background: '#ffffff',
          primaryWithOpacity: (opacity: number) =>
            withOpacity(data.color, opacity),
          secondaryWithOpacity: (opacity: number) =>
            withOpacity(data.secondaryColor || '#333333', opacity),
        });
      }
    } catch (err) {
      setError('Failed to load cryptocurrency data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // If we have initial data from the server, use it to set up the component
    if (initialData) {
      // Convert the basic currency data to the full CryptoData format
      // In a real app, you might need to fetch additional data here
      const fullData: CryptoData = {
        ...initialData,
        ath_date: initialData.ath_date || '',
        atl_date: initialData.atl_date || '',
        chart_data: [],
        markets: [],
        news: [],
        // Add missing required properties
        total_supply: initialData.circulating_supply * 1.2 || 0,
        max_supply: initialData.circulating_supply * 1.5 || 0,
        indicators: {
          since_of: 2017,
          narrative: 'Layer0',
          communityX: 1.4,
          communityTel: 24,
          risk: 16,
          reward: 63,
          value: 85,
          ranks: {
            '2022': initialData.market_cap_rank || 0,
            '2023': initialData.market_cap_rank
              ? initialData.market_cap_rank + 2
              : 0,
            '2024': initialData.market_cap_rank
              ? initialData.market_cap_rank - 1
              : 0,
            '2025': initialData.market_cap_rank
              ? initialData.market_cap_rank + 4
              : 0,
          },
          prices: {
            '2022': initialData.current_price * 1.3,
            '2023': initialData.current_price * 0.9,
            '2024': initialData.current_price,
            '2025': initialData.current_price * 1.2,
          },
          rol: {
            '2022': -82,
            '2023': 55,
            '2024': -19,
            '2025': -10,
          },
          sentiment: 15,
          psychology: 'accumulation',
          inflation: null,
          score: 955,
          digitalType: 74,
        },
        color: '#E6007A',
        secondaryColor: '#28c9e1',
        backgroundColor: '#ffffff',
      };

      setCryptoData(fullData);
      setLoading(false);

      // Generate color palette
      if (fullData.color) {
        const palette = generatePalette(fullData.color);
        setColorPalette({
          primary: fullData.color,
          secondary: fullData.secondaryColor || '#333333',
          background: '#ffffff',
          primaryWithOpacity: (opacity: number) =>
            withOpacity(fullData.color, opacity),
          secondaryWithOpacity: (opacity: number) =>
            withOpacity(fullData.secondaryColor || '#333333', opacity),
        });
      }
    } else {
      // If no initial data, fetch it
      loadData();
    }
    // Set up polling for real-time updates
    const interval = setInterval(() => loadData(), 60000); // Update every minute
    return () => clearInterval(interval);
  }, [cryptoId, initialData]);

  if (error) {
    return (
      <div className="w-full relative z-10 mx-auto px-4 py-8">
        <GlassCard
          className="border-red-500/20 p-8 text-center"
          colors={colorPalette}
        >
          <p className="text-destructive">{error}</p>
        </GlassCard>
      </div>
    );
  }

  return (
    <div
      className="w-full relative z-10 mx-auto sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-32"
      style={
        {
          '--currency-primary': colorPalette.primary,
          '--currency-secondary': colorPalette.secondary,
          '--currency-background': colorPalette.background,
        } as React.CSSProperties
      }
    >
      <CurrencyHeader
        cryptoData={cryptoData}
        loading={loading}
        colorPalette={colorPalette}
      />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full rounded-2xl text-xs grid-cols-1 xs:grid-cols-5 sm:grid-cols-5 border bg-DarkBlue">
          <AnimatedTabsTrigger value="overview" colors={colorPalette}>
            <Zap className="mr-1 h-4 w-4" /> Overview
          </AnimatedTabsTrigger>
          <AnimatedTabsTrigger value="indicators" colors={colorPalette}>
            <Activity className="mr-1 h-4 w-4" /> Indicators
          </AnimatedTabsTrigger>
          <AnimatedTabsTrigger value="markets" colors={colorPalette}>
            <BarChart3 className="mr-1 h-4 w-4" /> Markets
          </AnimatedTabsTrigger>
          <AnimatedTabsTrigger value="Video" colors={colorPalette}>
            <Info className="mr-1 h-4 w-4" /> Video
          </AnimatedTabsTrigger>
          <AnimatedTabsTrigger value="news" colors={colorPalette}>
            <Newspaper className="mr-1 h-4 w-4" /> News
          </AnimatedTabsTrigger>
        </TabsList>

        <TabsContent value="overview" className=" bg-WHITE">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard
              colors={{
                primary: '#F5F4F6',
                secondary: '#F5F4F6',
                background: '#F5F4F6',
              }}
            >
              <CardContent className="p-0 py-4 bg-WHITE">
                {loading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-64" />
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                      {[...Array(4)].map((_, i) => (
                        <Skeleton key={i} className="h-32 w-full" />
                      ))}
                    </div>
                    <Skeleton className="h-32 w-full" />
                  </div>
                ) : (
                  <TokenomicsVisualization
                    data={cryptoData}
                    colors={colorPalette}
                  />
                )}
              </CardContent>
            </GlassCard>
          </motion.div>
        </TabsContent>

        <TabsContent value="indicators" className={'bg-WHITE'}>
          {loading ? (
            <Skeleton className="h-[500px] w-full" />
          ) : (
            <IndicatorsSection data={cryptoData} colors={colorPalette} />
          )}
        </TabsContent>

        <TabsContent value="markets" className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard colors={colorPalette}>
              <CardContent className="p-3 sm:p-4 md:p-6">
                <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-gray-900">
                  Trading Markets
                </h2>
                {loading ? (
                  <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6">
                    <div className="inline-block min-w-full px-3 sm:px-4 md:px-6">
                      {/* Mobile view (card-based layout) */}
                      <div className="md:hidden space-y-4">
                        {cryptoData?.markets?.map((market, index) => (
                          <motion.div
                            key={index}
                            className="rounded-lg border border-gray-200 p-3 bg-white shadow-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <div
                                  className="mr-2 h-6 w-6 rounded-full p-[2px] text-white"
                                  style={{
                                    background: `linear-gradient(to right, ${colorPalette.primary}, ${colorPalette.secondary})`,
                                  }}
                                >
                                  <div className="h-full w-full rounded-full bg-white p-[2px] text-center text-xs text-gray-900">
                                    {market.exchange.charAt(0)}
                                  </div>
                                </div>
                                <span className="font-medium text-gray-900">
                                  {market.exchange}
                                </span>
                              </div>
                              <span className="rounded-md bg-gray-100 px-2 py-1 text-xs">
                                {market.pair}
                              </span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <div className="text-gray-500 text-xs">
                                  Price
                                </div>
                                <div className="font-medium">
                                  ${market.price.toLocaleString()}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-500 text-xs">
                                  Volume (24h)
                                </div>
                                <div className="font-medium">
                                  ${market.volume.toLocaleString()}
                                </div>
                              </div>
                              <div className="col-span-2">
                                <div className="text-gray-500 text-xs">
                                  Trust Score
                                </div>
                                <div className="flex items-center">
                                  <span
                                    className={`inline-block h-2 w-2 rounded-full ${
                                      market.trust_score === 'high'
                                        ? 'bg-green-500'
                                        : market.trust_score === 'medium'
                                          ? 'bg-yellow-500'
                                          : 'bg-red-500'
                                    }`}
                                  ></span>
                                  <span className="ml-1 text-gray-900">
                                    {market.trust_score}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Desktop view (table layout) */}
                      <table className="hidden md:table w-full">
                        <thead>
                          <tr className="border-b border-gray-200 text-gray-600">
                            <th className="pb-2 text-left">Exchange</th>
                            <th className="pb-2 text-left">Pair</th>
                            <th className="pb-2 text-right">Price</th>
                            <th className="pb-2 text-right">Volume (24h)</th>
                            <th className="pb-2 text-right">Trust Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cryptoData?.markets?.map((market, index) => (
                            <motion.tr
                              key={index}
                              className="border-b border-gray-200 text-gray-800"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.05,
                              }}
                            >
                              <td className="py-3">
                                <div className="flex items-center">
                                  <div
                                    className="mr-2 h-6 w-6 rounded-full p-[2px] text-white"
                                    style={{
                                      background: `linear-gradient(to right, ${colorPalette.primary}, ${colorPalette.secondary})`,
                                    }}
                                  >
                                    <div className="h-full w-full rounded-full bg-white p-[2px] text-center text-xs text-gray-900">
                                      {market.exchange.charAt(0)}
                                    </div>
                                  </div>
                                  {market.exchange}
                                </div>
                              </td>
                              <td className="py-3">
                                <span className="rounded-md bg-gray-100 px-2 py-1 text-sm">
                                  {market.pair}
                                </span>
                              </td>
                              <td className="py-3 text-right">
                                ${market.price.toLocaleString()}
                              </td>
                              <td className="py-3 text-right">
                                ${market.volume.toLocaleString()}
                              </td>
                              <td className="py-3 text-right">
                                <span
                                  className={`inline-block h-2 w-2 rounded-full ${
                                    market.trust_score === 'high'
                                      ? 'bg-green-500'
                                      : market.trust_score === 'medium'
                                        ? 'bg-yellow-500'
                                        : 'bg-red-500'
                                  }`}
                                ></span>
                                <span className="ml-1 text-xs text-gray-600">
                                  {market.trust_score}
                                </span>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </CardContent>
            </GlassCard>
          </motion.div>
        </TabsContent>

        <TabsContent value="Video">
          {loading ? (
            <Skeleton className="h-[400px] w-full" />
          ) : (
            <AboutSection data={cryptoData} colors={colorPalette} />
          )}
        </TabsContent>

        <TabsContent value="news">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardContent className="py-4 px-0">
              <div className="flex flex-col justify-between mb-5 gap-2 xs:flex-row md:items-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-DarkBlue text-left">
                  Latest news of{' '}
                  <span style={{ color: colorPalette.primaryWithOpacity(0.8) }}>
                    {cryptoId}
                  </span>
                </h2>
                <Link href={'/news'}>
                  <Button classes="rounded-xl">All News</Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 xl:grid-cols-4 content-center place-content-center sm:grid-cols-2">
                {newsItems.map(
                  (item, index) =>
                    index < 4 && (
                      <CryptoNewsCard
                        classes="max-w-[313px] mx-auto md:max-w-sm"
                        key={item.id}
                        newsItem={item}
                      />
                    )
                )}
              </div>
            </CardContent>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
function loadData(): void {
  throw new Error('Function not implemented.');
}
