'use client';

import React from 'react';
import { motion } from 'motion/react';
import { withOpacity } from '@/app/lib/color-utils';
import type { CryptoData } from '@/app/lib/utils/types';
import { TrendingUp, TrendingDown, Award } from 'lucide-react';
import { FaRankingStar } from 'react-icons/fa6';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { IoStatsChart } from 'react-icons/io5';

interface TokenomicsVisualizationProps {
  data: CryptoData | null;
  colors: {
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
    secondary: colors?.secondary || '#333333',
    background: colors?.background || '#ffffff',
    primaryWithOpacity:
      colors?.primaryWithOpacity ||
      ((opacity: number) => `rgba(40, 201, 225, ${opacity})`),
  };

  // Historical data
  const years = ['2022', '2023', '2024', '2025'];

  const metrics = [
    {
      title: 'Rank',
      icon: <FaRankingStar className={'w-5 h-5'} />,
      data: data.indicators.ranks,
      prefix: '#',
      format: (value: number) => value.toString(),
      average: Math.round(
        Object.values(data.indicators.ranks).reduce((a, b) => a + b, 0) /
          Object.keys(data.indicators.ranks).length
      ),
      color: colors?.primary,
    },
    {
      title: 'Price',
      icon: <MdOutlineAttachMoney className="h-5 w-5" />,
      data: data.indicators.prices,
      prefix: '$',
      format: (value: number) => value.toFixed(1),
      average: Number(
        (
          Object.values(data.indicators.prices).reduce((a, b) => a + b, 0) /
          Object.keys(data.indicators.prices).length
        ).toFixed(1)
      ),
      color: colors?.primary,
    },
    {
      title: 'ROL',
      icon: <IoStatsChart className="h-5 w-5" />,
      data: data.indicators.rol,
      suffix: '%',
      format: (value: number) => value.toString(),
      isPercentage: true,
      average: Math.round(
        Object.values(data.indicators.rol).reduce((a, b) => a + b, 0) /
          Object.keys(data.indicators.rol).length
      ),
      color: colors?.primary,
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-between mb-5 gap-2 md:flex-row md:items-center">
        <h2 className="text-lg sm:text-3xl font-bold text-DarkBlue text-center">
          Historical Performance
        </h2>
        <p className="text-xs sm:text-lg text-gray-500 font-medium">
          2022 till now analysis of{' '}
          <span style={{ color: colors.primary }}>
            {data.symbol.toUpperCase()}
          </span>
        </p>
      </div>

      {/* Metrics cards */}
      <div className="space-y-4 mb-12">
        {metrics.map((metric, metricIndex) => (
          <motion.div
            key={metric.title}
            className="overflow-hidden rounded-2xl border shadow-sm"
            style={{ borderColor: colors.background }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: metricIndex * 0.2 }}
          >
            {/* Metric header */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ backgroundColor: withOpacity(metric.color, 0.2) }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg "
                style={{ backgroundColor: withOpacity(metric.color, 0.2) }}
              >
                {React.cloneElement(metric.icon, {
                  style: { color: ' #0d1217' },
                })}
              </div>
              <h3
                className="text-lg font-semibold text-DarkBlue"
                // style={{ color: metric.color }}
              >
                {metric.title}
              </h3>
              <div
                className="ml-auto flex items-center gap-1 rounded-lg px-3 py-1 text-sm font-medium"
                style={{
                  backgroundColor: withOpacity(metric.color, 0.1),
                  color: metric.color,
                }}
              >
                Average: {metric.prefix}
                {metric.average}
                {metric.suffix}
              </div>
            </div>

            {/* Year cards */}
            <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4 ">
              {years.map((year, yearIndex) => {
                const value = metric.data[year];
                const isHighlighted =
                  (metric.title === 'Rank' &&
                    value === Math.min(...Object.values(metric.data))) ||
                  (metric.title === 'Price' &&
                    value === Math.max(...Object.values(metric.data))) ||
                  (metric.title === 'ROL' &&
                    value === Math.max(...Object.values(metric.data)));

                return (
                  <motion.div
                    key={`${metric.title}-${year}`}
                    className={`relative overflow-hidden rounded-xl border p-4 ${isHighlighted ? 'shadow-md' : ''}`}
                    style={{
                      borderColor: withOpacity(
                        metric.color,
                        isHighlighted ? 0.5 : 0.2
                      ),
                      backgroundColor: isHighlighted
                        ? withOpacity(metric.color, 0.05)
                        : 'white',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + yearIndex * 0.1 + metricIndex * 0.2,
                    }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="mb-2 text-center text-sm font-medium text-gray-500">
                      {year}
                    </div>

                    {metric.isPercentage ? (
                      <div className="flex items-center justify-center">
                        <div
                          className={`flex items-center justify-center rounded-full px-3 py-1 text-lg font-bold ${
                            value >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}
                          style={{
                            backgroundColor:
                              value >= 0
                                ? 'rgba(34, 197, 94, 0.1)'
                                : 'rgba(239, 68, 68, 0.1)',
                          }}
                        >
                          {value >= 0 ? (
                            <TrendingUp className="mr-1 h-4 w-4" />
                          ) : (
                            <TrendingDown className="mr-1 h-4 w-4" />
                          )}
                          {value >= 0 ? '+' : ''}
                          {metric.format(value)}
                          {metric.suffix}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="text-center text-2xl font-bold"
                        style={{ color: metric.color }}
                      >
                        {metric.prefix}
                        {metric.format(value)}
                        {metric.suffix}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visual comparison */}
      <motion.div
        className="p-8 rounded-2xl mb-12 flex flex-col gap-12 items-center lg2:flex-row lg2:items-start justify-between bg-DarkBlue"
        style={{ borderColor: themeColors.primaryWithOpacity(0.2) }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div
          className={
            'flex flex-col items-center lg2::items-start justify-center gap-0.5'
          }
        >
          <h3 className="text-lg sm:text-2xl font-bold text-white text-left">
            2022 to 2025 comparison
          </h3>
          <h4 className="text-sm sm:text-lg font-semibold text-gray-200 text-left">
            based on Blue<span className={'text-LightBlue'}>dia</span>{' '}
            parameters
          </h4>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 justify-center gap-6 md:gap-3">
          {years.map((year, index) => (
            <motion.div
              key={year}
              className="relative flex h-32 w-32 flex-col items-center bg-WHITE justify-center rounded-xl border"
              style={{
                borderColor: themeColors.primaryWithOpacity(0.3),
              }}
              initial={{ opacity: 0, rotate: -5, y: 20 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-sm font-bold shadow-sm"
                style={{ color: themeColors.primary }}
              >
                {year}
              </div>

              <div className="mt-4 space-y-2 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Award className="h-4 w-4 text-gray-500" />
                  <span className="font-bold text-gray-900">
                    #{data.indicators.ranks[year]}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1">
                  <MdOutlineAttachMoney className="h-5 w-5 text-gray-500" />
                  <span className="font-medium text-gray-900">
                    ${data.indicators.prices[year].toFixed(1)}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1">
                  <span
                    className={`text-sm font-bold ${
                      data.indicators.rol[year] >= 0
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {data.indicators.rol[year] >= 0 ? '+' : ''}
                    {data.indicators.rol[year]}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
