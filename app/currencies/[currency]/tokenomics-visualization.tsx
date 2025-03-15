'use client';

import React from 'react';
import { motion } from 'motion/react';
import { withOpacity } from '@/app/lib/color-utils';
import type { CryptoData } from '@/app/lib/utils/types';
import {
  TrendingUp,
  TrendingDown,
  Award,
  DollarSign,
  BarChart3,
} from 'lucide-react';

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
      icon: <Award className="h-5 w-5" />,
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
      icon: <DollarSign className="h-5 w-5" />,
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
      icon: <BarChart3 className="h-5 w-5" />,
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
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            Historical Performance
          </h2>
          <p className="text-xs sm:text-sm text-gray-200">
            Year by year analysis of {data.symbol.toUpperCase()}
          </p>
        </div>
      </div>

      {/* Metrics cards */}
      <div className="space-y-8">
        {metrics.map((metric, metricIndex) => (
          <motion.div
            key={metric.title}
            className="overflow-hidden rounded-xl border shadow-sm"
            style={{ borderColor: withOpacity(metric.color, 0.3) }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: metricIndex * 0.2 }}
          >
            {/* Metric header */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ backgroundColor: withOpacity(metric.color, 0.1) }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: withOpacity(metric.color, 0.2) }}
              >
                {React.cloneElement(metric.icon, {
                  style: { color: metric.color },
                })}
              </div>
              <h3
                className="text-lg font-semibold"
                style={{ color: metric.color }}
              >
                {metric.title}
              </h3>
              <div
                className="ml-auto flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium"
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
            <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4">
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
                    className={`relative overflow-hidden rounded-lg border p-4 ${isHighlighted ? 'shadow-md' : ''}`}
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
                    {isHighlighted && (
                      <div
                        className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: metric.color }}
                      >
                        ★
                      </div>
                    )}

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
        className="mt-8 rounded-xl border p-6 shadow-sm"
        style={{ borderColor: themeColors.primaryWithOpacity(0.2) }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="mb-6 text-center text-lg font-semibold text-gray-900">
          Year-by-Year Comparison
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {years.map((year, index) => (
            <motion.div
              key={year}
              className="relative flex h-32 w-32 flex-col items-center justify-center rounded-lg border shadow-sm"
              style={{
                borderColor: themeColors.primaryWithOpacity(0.3),
                background: `radial-gradient(circle, ${withOpacity(themeColors.primary, 0.05)}, white)`,
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
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-sm font-bold shadow-sm"
                style={{ color: themeColors.primary }}
              >
                {year}
              </div>

              <div className="mt-4 space-y-2 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Award className="h-4 w-4 text-gray-500" />
                  <span className="font-medium text-gray-900">
                    #{data.indicators.ranks[year]}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-1">
                  <DollarSign className="h-4 w-4 text-gray-500" />
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
