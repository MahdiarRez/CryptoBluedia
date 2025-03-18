'use client';

import type React from 'react';

import { useEffect, useState } from 'react';
import { fetchCryptoData } from '@/app/lib/api';
import type { CryptoData } from '@/app/lib/utils/types';
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
import { useParams } from 'next/navigation';
import { newsItems } from '@/app/news/cryptoNewsPage';
import { CryptoNewsCard } from '@/app/news/cryptoNewsCard';
import Link from 'next/link';
import Button from '@/app/components/button';

export default function CryptoDetails() {
  const { currency } = useParams();

  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchCryptoData(currency as string);
        setCryptoData(data);

        // Generate color palette from the currency's color
        if (data.color) {
          const palette = generatePalette(data.color);
          setColorPalette({
            primary: data.color,
            secondary: data.secondaryColor || palette.complementary,
            background: data.backgroundColor || '#0d1217',
            primaryWithOpacity: (opacity: number) =>
              withOpacity(data.color, opacity),
            secondaryWithOpacity: (opacity: number) =>
              withOpacity(
                data.secondaryColor || palette.complementary,
                opacity
              ),
          });

          // Update CSS variables for global theming
          document.documentElement.style.setProperty(
            '--currency-primary',
            data.color
          );
          document.documentElement.style.setProperty(
            '--currency-secondary',
            data.secondaryColor || palette.complementary
          );
          document.documentElement.style.setProperty(
            '--currency-background',
            data.backgroundColor || '#0d1217'
          );
        }
      } catch (err) {
        setError('Failed to load cryptocurrency data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    // Set up polling for real-time updates
    const interval = setInterval(loadData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [currency]);

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
        <TabsList className="grid w-full rounded-2xl text-xs grid-cols-2 sm:grid-cols-5 border bg-DarkBlue">
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
            <GlassCard
              className="bg-white"
              colors={{
                primary: '#F5F4F6',
                secondary: '#F5F4F6',
                background: '#F5F4F6',
              }}
            >
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-semibold text-DarkBlue">
                  Trading Markets
                </h2>
                {loading ? (
                  <div className="space-y-2">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-12 w-full" />
                    ))}
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10 text-DarkBlue/70">
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
                            className="border-b border-DarkBlue/10 text-DarkBlue"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <td className="py-3">
                              <div className="flex items-center">
                                <div
                                  className="mr-2 h-6 w-6 rounded-full p-[2px] text-white"
                                  style={{
                                    background: `linear-gradient(to right, ${colorPalette.primary}, ${colorPalette.secondary})`,
                                  }}
                                >
                                  <div className="h-full w-full rounded-full bg-black/80 p-[2px] text-center text-xs">
                                    {market.exchange.charAt(0)}
                                  </div>
                                </div>
                                {market.exchange}
                              </div>
                            </td>
                            <td className="py-3">
                              <span className="rounded-md bg-DarkBlue/5 px-2 py-1 text-sm">
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
                              <span className="ml-1 text-xs text-DarkBlue/70">
                                {market.trust_score}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
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
                    {currency}
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
