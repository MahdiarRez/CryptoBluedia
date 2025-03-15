'use client';

import React from 'react';

import { motion } from 'motion/react';
import { withOpacity } from '@/app/lib/color-utils';
import type { CryptoData } from '@/app/lib/utils/types';
import {
  Coins,
  Lock,
  Users,
  Wallet,
  Landmark,
  ArrowDownToLine,
  Clock,
  Zap,
} from 'lucide-react';

interface TokenomicsVisualizationProps {
  data: CryptoData | null;
  colors?: {
    primary: string;
    secondary: string;
    background: string;
    primaryWithOpacity: (opacity: number) => string;
  };
}

export default function TokenomicsVisualization({
  data,
  colors,
}: TokenomicsVisualizationProps) {
  if (!data) return null;

  // Default colors if not provided
  const themeColors = {
    primary: colors?.primary || '#28c9e1',
    secondary: colors?.secondary || '#F5F4F6',
    background: colors?.background || '#0d1217',
    primaryWithOpacity:
      colors?.primaryWithOpacity ||
      ((opacity: number) => `rgba(40, 201, 225, ${opacity})`),
  };

  // Calculate percentages for supply distribution
  const circulatingPercentage =
    (data.circulating_supply / data.total_supply) * 100;
  const lockedPercentage = 100 - circulatingPercentage;

  // Token allocation data (example data - would come from API in real implementation)
  const tokenAllocation = [
    { category: 'Public Sale', percentage: 30, color: themeColors.primary },
    {
      category: 'Team & Advisors',
      percentage: 20,
      color: withOpacity(themeColors.primary, 0.8),
    },
    {
      category: 'Foundation',
      percentage: 25,
      color: withOpacity(themeColors.primary, 0.6),
    },
    {
      category: 'Ecosystem Growth',
      percentage: 15,
      color: withOpacity(themeColors.primary, 0.4),
    },
    {
      category: 'Staking Rewards',
      percentage: 10,
      color: withOpacity(themeColors.primary, 0.2),
    },
  ];

  // Token utility data
  const tokenUtility = [
    {
      title: 'Governance',
      icon: <Landmark className="h-5 w-5" />,
      description: 'Vote on protocol upgrades and parameter changes',
    },
    {
      title: 'Staking',
      icon: <Lock className="h-5 w-5" />,
      description: 'Secure the network and earn rewards',
    },
    {
      title: 'Transaction Fees',
      icon: <Wallet className="h-5 w-5" />,
      description: 'Pay for transactions and smart contract execution',
    },
    {
      title: 'Parachain Slots',
      icon: <Zap className="h-5 w-5" />,
      description: 'Bond tokens to secure parachain slots',
    },
  ];

  // Vesting schedule data (example data)
  const vestingSchedule = [
    { date: 'Q1 2023', amount: '50M DOT', status: 'Released' },
    { date: 'Q3 2023', amount: '75M DOT', status: 'Released' },
    { date: 'Q1 2024', amount: '100M DOT', status: 'Upcoming' },
    { date: 'Q4 2024', amount: '125M DOT', status: 'Upcoming' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-xl font-semibold text-white">Tokenomics</h2>
          <p className="text-sm text-white/70">
            Comprehensive breakdown of {data.symbol.toUpperCase()} token
            distribution and utility
          </p>
        </div>

        <div
          className="flex items-center gap-2 rounded-lg border px-4 py-2"
          style={{
            borderColor: themeColors.primaryWithOpacity(0.2),
            backgroundColor: withOpacity(themeColors.background, 0.4),
          }}
        >
          <Coins className="h-5 w-5" style={{ color: themeColors.secondary }} />
          <div className="text-sm">
            <span className="font-medium text-white">Max Supply:</span>
            <span className="ml-2 text-white/70">
              {data.max_supply ? data.max_supply.toLocaleString() : 'Unlimited'}{' '}
              {data.symbol.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Supply Distribution */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          className="rounded-lg border p-5"
          style={{
            borderColor: themeColors.primaryWithOpacity(0.2),
            backgroundColor: withOpacity(themeColors.background, 0.4),
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="mb-4 text-lg font-medium text-white">
            Supply Distribution
          </h3>

          <div className="mb-6 space-y-4">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowDownToLine
                    className="h-4 w-4"
                    style={{ color: themeColors.primary }}
                  />
                  <span className="text-sm text-white/70">
                    Circulating Supply
                  </span>
                </div>
                <span className="text-sm font-medium text-white">
                  {data.circulating_supply.toLocaleString()}{' '}
                  {data.symbol.toUpperCase()}
                </span>
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${circulatingPercentage}%`,
                    backgroundColor: themeColors.primary,
                  }}
                ></div>
              </div>
              <div className="mt-1 text-right text-xs text-white/50">
                {circulatingPercentage.toFixed(1)}% of Total Supply
              </div>
            </div>

            <div>
              <div className="mb-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock
                    className="h-4 w-4"
                    style={{ color: themeColors.secondary }}
                  />
                  <span className="text-sm text-white/70">Locked/Reserved</span>
                </div>
                <span className="text-sm font-medium text-white">
                  {(
                    data.total_supply - data.circulating_supply
                  ).toLocaleString()}{' '}
                  {data.symbol.toUpperCase()}
                </span>
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${lockedPercentage}%`,
                    backgroundColor: themeColors.secondary,
                  }}
                ></div>
              </div>
              <div className="mt-1 text-right text-xs text-white/50">
                {lockedPercentage.toFixed(1)}% of Total Supply
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-between rounded-lg border p-3"
            style={{ borderColor: themeColors.primaryWithOpacity(0.2) }}
          >
            <div className="flex items-center gap-2">
              <Users
                className="h-4 w-4"
                style={{ color: themeColors.primary }}
              />
              <span className="text-sm text-white/70">Holders</span>
            </div>
            <span className="text-sm font-medium text-white">350,000+</span>
          </div>
        </motion.div>

        {/* Token Allocation */}
        <motion.div
          className="rounded-lg border p-5"
          style={{
            borderColor: themeColors.primaryWithOpacity(0.2),
            backgroundColor: withOpacity(themeColors.background, 0.4),
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="mb-4 text-lg font-medium text-white">
            Token Allocation
          </h3>

          <div className="mb-4 flex h-[180px] w-[180px] items-center justify-center mx-auto">
            <div className="relative h-full w-full">
              {tokenAllocation.map((segment, index) => {
                // Calculate the segment's position in the pie chart
                const startAngle =
                  index === 0
                    ? 0
                    : (tokenAllocation
                        .slice(0, index)
                        .reduce((sum, item) => sum + item.percentage, 0) /
                        100) *
                      360;

                const endAngle = startAngle + (segment.percentage / 100) * 360;

                return (
                  <motion.div
                    key={segment.category}
                    className="absolute left-0 top-0 h-full w-full"
                    initial={{ opacity: 0, rotate: startAngle }}
                    animate={{ opacity: 1, rotate: startAngle }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div
                      className="absolute left-1/2 top-1/2 h-[1px] w-1/2 origin-left"
                      style={{
                        backgroundColor: segment.color,
                        transform: `rotate(${(segment.percentage / 100) * 180}deg)`,
                        opacity: 0, // This line is invisible
                      }}
                    >
                      <div
                        className="absolute right-0 h-[80px] w-[80px] -translate-y-1/2 rounded-full"
                        style={{
                          backgroundColor: segment.color,
                          clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
                          transform: `rotate(${(segment.percentage / 100) * 180}deg)`,
                        }}
                      ></div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Inner circle */}
              <div
                className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border-4"
                style={{
                  backgroundColor: withOpacity(themeColors.background, 0.8),
                  borderColor: withOpacity(themeColors.primary, 0.3),
                }}
              >
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <span className="text-xs text-white/70">Total Supply</span>
                  <span className="text-lg font-bold text-white">
                    {(data.total_supply / 1e6).toFixed(1)}M
                  </span>
                  <span className="text-xs text-white/70">
                    {data.symbol.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {tokenAllocation.map((segment, index) => (
              <div key={segment.category} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: segment.color }}
                ></div>
                <div className="text-xs">
                  <span className="text-white">{segment.category}</span>
                  <span className="ml-1 text-white/50">
                    {segment.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Token Utility */}
      <motion.div
        className="rounded-lg border p-5"
        style={{
          borderColor: themeColors.primaryWithOpacity(0.2),
          backgroundColor: withOpacity(themeColors.background, 0.4),
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h3 className="mb-4 text-lg font-medium text-white">Token Utility</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tokenUtility.map((utility, index) => (
            <motion.div
              key={utility.title}
              className="rounded-lg border p-4"
              style={{
                borderColor: themeColors.primaryWithOpacity(0.2),
                backgroundColor: withOpacity(themeColors.background, 0.3),
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: themeColors.primaryWithOpacity(0.2) }}
              >
                {React.cloneElement(utility.icon, {
                  style: { color: themeColors.primary },
                })}
              </div>
              <h4 className="mb-1 font-medium text-white">{utility.title}</h4>
              <p className="text-sm text-white/70">{utility.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Vesting Schedule */}
      <motion.div
        className="rounded-lg border p-5"
        style={{
          borderColor: themeColors.primaryWithOpacity(0.2),
          backgroundColor: withOpacity(themeColors.background, 0.4),
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">
            Token Release Schedule
          </h3>
          <div
            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs"
            style={{
              backgroundColor: themeColors.primaryWithOpacity(0.2),
              color: themeColors.primary,
            }}
          >
            <Clock className="mr-1 h-3 w-3" />
            Vesting Timeline
          </div>
        </div>

        <div className="mt-6 relative">
          {/* Timeline line */}
          <div
            className="absolute left-[7px] top-0 h-full w-[2px]"
            style={{ backgroundColor: themeColors.primaryWithOpacity(0.3) }}
          ></div>

          {/* Timeline events */}
          <div className="space-y-8">
            {vestingSchedule.map((event, index) => (
              <motion.div
                key={event.date}
                className="relative flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div
                  className="z-10 mt-0.5 h-4 w-4 rounded-full border-2"
                  style={{
                    backgroundColor:
                      event.status === 'Released'
                        ? themeColors.primary
                        : withOpacity(themeColors.background, 0.8),
                    borderColor: themeColors.primary,
                  }}
                ></div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-white">{event.date}</h4>
                    <span
                      className="rounded-full px-2 py-0.5 text-xs"
                      style={{
                        backgroundColor:
                          event.status === 'Released'
                            ? withOpacity(themeColors.primary, 0.2)
                            : 'rgba(255, 255, 255, 0.1)',
                        color:
                          event.status === 'Released'
                            ? themeColors.primary
                            : 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {event.status}
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{event.amount}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        className="grid grid-cols-2 gap-4 md:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div
          className="rounded-lg border p-4 text-center"
          style={{
            borderColor: themeColors.primaryWithOpacity(0.2),
            backgroundColor: withOpacity(themeColors.background, 0.4),
          }}
        >
          <div className="text-sm text-white/70">Market Cap</div>
          <div className="text-xl font-bold text-white">
            ${(data.market_cap / 1e9).toFixed(2)}B
          </div>
        </div>

        <div
          className="rounded-lg border p-4 text-center"
          style={{
            borderColor: themeColors.primaryWithOpacity(0.2),
            backgroundColor: withOpacity(themeColors.background, 0.4),
          }}
        >
          <div className="text-sm text-white/70">Fully Diluted Valuation</div>
          <div className="text-xl font-bold text-white">
            ${((data.current_price * data.total_supply) / 1e9).toFixed(2)}B
          </div>
        </div>

        <div
          className="rounded-lg border p-4 text-center"
          style={{
            borderColor: themeColors.primaryWithOpacity(0.2),
            backgroundColor: withOpacity(themeColors.background, 0.4),
          }}
        >
          <div className="text-sm text-white/70">Staking APY</div>
          <div className="text-xl font-bold text-white">14.2%</div>
        </div>

        <div
          className="rounded-lg border p-4 text-center"
          style={{
            borderColor: themeColors.primaryWithOpacity(0.2),
            backgroundColor: withOpacity(themeColors.background, 0.4),
          }}
        >
          <div className="text-sm text-white/70">Inflation Rate</div>
          <div className="text-xl font-bold text-white">8.5%</div>
        </div>
      </motion.div>
    </div>
  );
}
