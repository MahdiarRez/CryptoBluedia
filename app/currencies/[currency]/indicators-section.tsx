'use client';

import { motion } from 'motion/react';
import { GlassCard } from '@/app/components/ShadcnUi/glass-card';
import { CardContent } from '@/app/components/ShadcnUi/card';
import { Tabs, TabsContent, TabsList } from '@/app/components/ShadcnUi/tabs';
import { AnimatedTabsTrigger } from '@/app/components/ShadcnUi/animated-tabs-trigger';
import {
  BarChart3,
  Activity,
  Users,
  Zap,
  LineChart,
  Percent,
  Award,
  Layers,
  Calendar,
} from 'lucide-react';
import { ProgressBar } from '@/app/components/ShadcnUi/progress-bar';
// import { RankChart } from '../../../../../../Downloads/crypto-dashboard/components/charts/rank-chart';
// import { PriceHistoryChart } from '../../../../../../Downloads/crypto-dashboard/components/charts/price-history-chart';
// import { RolChart } from '../../../../../../Downloads/crypto-dashboard/components/charts/rol-chart';
import { CryptoData } from '@/app/lib/utils/types';
import React from 'react';

interface IndicatorsSectionProps {
  data: CryptoData | null;
  colors?: {
    secondary: string;
    primaryWithOpacity: (opacity: number) => string;
    background: string;
    secondaryWithOpacity: (opacity: number) => string;
    primary: string;
  };
}

export default function IndicatorsSection({
  data,
  colors,
}: IndicatorsSectionProps) {
  if (!data || !data.indicators) return null;

  const { indicators } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <GlassCard>
        <CardContent className="px-0 py-4 bg-WHITE">
          <div className="mb-6 flex flex-nowrap flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-DarkBlue text-center md:text-left">
                Advanced Indicators
              </h2>
              <p className="text-base sm:text-lg text-gray-500 font-medium text-center md:text-left">
                Comprehensive metrics and analysis for {data.name}
              </p>
            </div>
            <div className="flex items-center gap-4 md:self-start">
              <div
                className="flex items-center gap-2 rounded-lg bg-white border border-solid px-4 py-2"
                style={{ borderColor: colors?.primaryWithOpacity(0.5) }}
              >
                <Calendar className="h-4 w-4 " color={colors?.primary} />
                <span className="text-sm " style={{ color: colors?.primary }}>
                  Since {indicators.since_of}
                </span>
              </div>
              <div
                className="flex items-center gap-2 rounded-lg bg-white border border-solid px-4 py-2"
                style={{ borderColor: colors?.primaryWithOpacity(0.5) }}
              >
                <Layers className="h-4 w-4 " color={colors?.primary} />
                <span className="text-sm" style={{ color: colors?.primary }}>
                  {indicators.narrative}
                </span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="performance" className="space-y-4 ">
            <TabsList className="border border-[#28c9e1]/20 bg-DarkBlue flex flex-col w-full max-w-[243px] xs:max-w-min xs:flex-row rounded-2xl xs:justify-evenly justify-self-center xs:w-min md:justify-self-start">
              <AnimatedTabsTrigger value="performance">
                <Activity className="mr-1 h-4 w-4" /> Performance
              </AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="metrics">
                <BarChart3 className="mr-1 h-4 w-4" /> Key Metrics
              </AnimatedTabsTrigger>
              <AnimatedTabsTrigger value="community">
                <Users className="mr-1 h-4 w-4" /> Community
              </AnimatedTabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl bg-white">
                  <h3 className="text-lg font-semibold text-white">
                    Rank Evolution
                  </h3>
                  <div className="h-[250px] w-full">hi</div>
                </div>

                <div className="space-y-4 rounded-2xl bg-white">
                  <h3 className="text-lg font-semibold text-white">
                    Price History
                  </h3>
                  <div className="h-[250px] w-full">hi</div>
                </div>
              </div>

              <div className="space-y-4 rounded-2xl bg-white">
                <h3 className="text-lg font-semibold text-white">
                  Return on Investment
                </h3>
                <div className="h-[250px] w-full">hi</div>
              </div>
            </TabsContent>

            <TabsContent value="metrics" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-6 ">
                  <div className="rounded-2xl bg-white p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap
                          className="h-5 w-5"
                          color={colors?.primaryWithOpacity(0.7)}
                        />
                        <h3 className="text-lg font-semibold text-DarkBlue">
                          Risk / Reward Ratio
                        </h3>
                      </div>
                      <span className="text-sm text-white/70">
                        Score: {indicators.score}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 rounded-lg bg-DarkBlue/10 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-DarkBlue">Risk</span>
                          <span className="text-sm font-semibold text-DarkBlue">
                            {indicators.risk}%
                          </span>
                        </div>
                        <ProgressBar
                          value={indicators.risk}
                          maxValue={100}
                          absoluteColor={colors?.primaryWithOpacity(0.7)}
                          gradient={false}
                        />
                      </div>

                      <div className="space-y-2 rounded-lg bg-DarkBlue/10 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-DarkBlue">Reward</span>
                          <span className="text-sm font-semibold text-DarkBlue">
                            {indicators.reward}%
                          </span>
                        </div>
                        <ProgressBar
                          value={indicators.reward}
                          maxValue={100}
                          absoluteColor={colors?.primaryWithOpacity(0.6)}
                          gradient={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <Award
                        className="h-5 w-5 "
                        color={colors?.primaryWithOpacity(0.7)}
                      />
                      <h3 className="text-lg font-semibold text-DarkBlue">
                        Value Assessment
                      </h3>
                    </div>

                    <div className="space-y-2 rounded-lg bg-DarkBlue/10 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-DarkBlue/70">Value</span>
                        <span className="text-sm font-semibold text-DarkBlue">
                          {indicators.value}%
                        </span>
                      </div>
                      <ProgressBar
                        value={indicators.value}
                        maxValue={100}
                        absoluteColor={colors?.primaryWithOpacity(0.7)}
                        gradient={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-2xl bg-white p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <LineChart
                        className="h-5 w-5 "
                        color={colors?.primaryWithOpacity(0.7)}
                      />
                      <h3 className="text-lg font-semibold text-DarkBlue">
                        Market Sentiment
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2 rounded-lg bg-DarkBlue/10 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-DarkBlue">
                            Sentiment
                          </span>
                          <span className="text-sm font-semibold text-DarkBlue">
                            {indicators.sentiment}%
                          </span>
                        </div>
                        <ProgressBar
                          value={indicators.sentiment}
                          maxValue={100}
                          absoluteColor={colors?.primaryWithOpacity(0.7)}
                          gradient={false}
                        />
                      </div>

                      <div className="space-y-2 rounded-lg bg-DarkBlue/10 p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-DarkBlue">
                            Digital Type
                          </span>
                          <span className="text-sm font-semibold text-DarkBlue">
                            {indicators.digitalType}%
                          </span>
                        </div>
                        <ProgressBar
                          value={indicators.digitalType}
                          maxValue={100}
                          absoluteColor={colors?.primaryWithOpacity(0.7)}
                          gradient={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 min-h-[136px]">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Percent
                          className="h-5 w-5"
                          color={colors?.primaryWithOpacity(0.7)}
                        />
                        <h3 className="text-lg font-semibold text-DarkBlue">
                          Market Psychology
                        </h3>
                      </div>
                      <div className="rounded-full bg-DarkBlue/10 px-3 py-1 text-xs font-medium text-DarkBlue">
                        {indicators.psychology.toUpperCase()}
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between ">
                      <div className="h-2 w-full rounded-full bg-DarkBlue/10">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-red-500 via-gray-300 to-green-500"
                          style={{
                            width: '100%',
                            clipPath: getPsychologyClipPath(
                              indicators.psychology
                            ),
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-2 flex justify-between text-xs text-DarkBlue/70 font-normal">
                      <span>Fear</span>
                      <span>Accumulation</span>
                      <span>Greed</span>
                    </div>
                    <span className="mt-2.5 text-center block font-normal text-sm tracking-wide opacity-30 text-DarkBlue/60">
                      Based on Bluedia param
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-[#28c9e1]/10 bg-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-md"
                      style={{
                        backgroundColor: colors?.primaryWithOpacity(0.85),
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-DarkBlue">
                        Twitter/X Community
                      </h3>
                      <p className="text-sm text-DarkBlue/70">
                        Followers in millions
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-end justify-between">
                    <div className="text-4xl font-bold text-DarkBlue">
                      {indicators.communityX}
                      <span style={{ color: colors?.primary }}>M</span>
                    </div>
                    <div className="h-32 w-full max-w-[200px]">
                      <div className="h-full w-full rounded-lg bg-DarkBlue/10 p-4">
                        <div className="relative h-full w-full">
                          <div className="absolute bottom-0 left-0 w-full">
                            <div
                              className="rounded-t-sm bg-gradient-to-t from-[#1a95a7] to-[#28c9e1]"
                              style={{
                                height: `${Math.min((indicators.communityX / 5) * 100, 100)}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-[#28c9e1]/10 bg-white p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-md"
                      style={{
                        backgroundColor: colors?.primaryWithOpacity(0.85),
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="m22 8-6 4 6 4V8Z"></path>
                        <rect width="14" height="12" x="2" y="6" rx="2"></rect>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-DarkBlue">
                        Telegram Community
                      </h3>
                      <p className="text-sm text-DarkBlue/70">
                        Members in thousands
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-end justify-between">
                    <div className="text-4xl font-bold text-DarkBlue">
                      {indicators.communityTel}
                      <span style={{ color: colors?.primary }}>K</span>
                    </div>
                    <div className="h-32 w-full max-w-[200px]">
                      <div className="h-full w-full rounded-lg bg-DarkBlue/10 p-4">
                        <div className="relative h-full w-full">
                          <div className="absolute bottom-0 left-0 w-full">
                            <div
                              className="rounded-t-sm bg-gradient-to-t from-[#28c9e1] to-[#1a95a7]"
                              style={{
                                height: `${Math.min((indicators.communityTel / 50) * 100, 100)}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </GlassCard>
    </motion.div>
  );
}

// Helper function to determine the clip path for the psychology indicator
function getPsychologyClipPath(psychology: string): string {
  switch (psychology.toLowerCase()) {
    case 'fear':
      return 'polygon(0 0, 20% 0, 20% 100%, 0 100%)';
    case 'accumulation':
      return 'polygon(0 0, 60% 0, 60% 100%, 0 100%)';
    case 'greed':
      return 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    default:
      return 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';
  }
}
