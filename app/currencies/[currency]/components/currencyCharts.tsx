'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/app/components/uiKits/cardShadcn';
import type { Currency } from '@/app/lib/types';

interface DonutChartProps {
  data: Array<{ name: string; value: number }>;
  title: string;
  description?: string;
  colors?: string[];
  valueFormatString?: string; // Use a string format instead of a function
  className?: string;
}

export function PriceHistoryChart({ currency }: { currency: Currency }) {
  const priceHistory = [
    { year: '2022', price: currency.price2022 },
    { year: '2023', price: currency.price2023 },
    { year: '2024', price: currency.price2024 },
    { year: '2025', price: currency.price2025 },
  ];
  const color = currency.color;

  return (
    <Card className="border-none shadow-none overflow-hidden bg-white dark:bg-slate-900 rounded-2xl w-full">
      <CardHeader style={{ backgroundColor: currency.color }}>
        <CardTitle className="text-white capitalize">
          Price history chart
        </CardTitle>
        <CardDescription className="text-white/80">
          Historical and projected price (USD)
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-80 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={priceHistory}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={color} stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-slate-200 dark:stroke-slate-700"
              />
              <XAxis
                dataKey="year"
                className="text-xs text-slate-600 dark:text-slate-400"
              />
              <YAxis
                className="text-xs text-slate-600 dark:text-slate-400"
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
                labelFormatter={(label) => `Year: ${label}`}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderColor: '#e2e8f0',
                  borderRadius: '0.5rem',
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke={color}
                fillOpacity={1}
                fill="url(#colorPrice)"
                strokeWidth={2}
                activeDot={{
                  r: 6,
                  stroke: color,
                  strokeWidth: 2,
                  fill: 'white',
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function DonutChart({
  data,
  title,
  description,
  colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'],
  valueFormatString = '', // Default empty string
  className,
}: DonutChartProps) {
  // Ensure we have enough colors for all data points
  const chartColors =
    colors.length >= data.length
      ? colors
      : [...colors, ...Array(data.length - colors.length).fill('#cbd5e1')];

  // Create a local formatter function based on the format string
  const valueFormatter = (value: number): string => {
    if (valueFormatString === 'percent') {
      return `${value}%`;
    } else if (valueFormatString === 'score') {
      return `${value}/100`;
    } else if (valueFormatString === 'number') {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else if (valueFormatString === 'currency') {
      return `$${value.toFixed(2)}`;
    }
    return `${value}`;
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
    value,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return percent > 0.05 ? (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-slate-800 p-3 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
          <p className="font-medium text-slate-900 dark:text-slate-100">
            {payload[0].name}
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            {valueFormatter(payload[0].value)} (
            {(
              (payload[0].value /
                data.reduce((sum, item) => sum + item.value, 0)) *
              100
            ).toFixed(1)}
            %)
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <ul className="flex flex-wrap justify-center gap-4 mt-4">
        {payload.map((entry: any, index: number) => (
          <li key={`legend-${index}`} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-slate-700 dark:text-slate-300">
              {entry.value}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Card className="border-none shadow-none overflow-hidden bg-white dark:bg-slate-900 rounded-2xl w-full ">
      <CardHeader style={{ backgroundColor: '#4B8F3F' }}>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-80 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
                animationDuration={750}
                animationBegin={0}
                animationEasing="ease-out"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={chartColors[index % chartColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={<CustomLegend />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
