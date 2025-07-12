////////////////// price and rol and rank currency //////////////////

import { CurrencyData, YearEntry } from './types';

export function getBestEntry<T>(
  currency: CurrencyData<T>,
  field: 'rank' | 'price' | 'rol',
  comparisonType: 'min' | 'max'
): YearEntry<T> {
  const years = [2022, 2023, 2024, 2025] as const;

  const entries = years.map((year) => ({
    year,
    value: currency[`${field}${year}`],
  })) as YearEntry<T>[];

  const compare =
    comparisonType === 'min'
      ? (a: YearEntry<T>, b: YearEntry<T>) => a.value < b.value
      : (a: YearEntry<T>, b: YearEntry<T>) => a.value > b.value;

  return entries.reduce((prev, curr) => (compare(prev, curr) ? prev : curr));
}

////////////////// format Market news numbers //////////////////
export function formatMarketNumbers(num: number, maxInt: number): string {
  let integerPart: string = Math.floor(num).toString().slice(0, maxInt);

  let decimalPart: string = (num - Math.floor(num)).toFixed(2).slice(2);

  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

////////////////// format color hex to rgb opacity //////////////////

export function hexOpacity(hex: string, opacity = 1) {
  // Remove the '#' character if present
  let sanitizedHex = hex.replace('#', '');

  // Expand short hex format (3 characters) to full format (6 characters)
  if (sanitizedHex.length === 3) {
    sanitizedHex = sanitizedHex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // Parse the hex values for red, green, and blue
  const r = parseInt(sanitizedHex.substring(0, 2), 16);
  const g = parseInt(sanitizedHex.substring(2, 4), 16);
  const b = parseInt(sanitizedHex.substring(4, 6), 16);

  // Return the RGBA string with specified opacity
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
