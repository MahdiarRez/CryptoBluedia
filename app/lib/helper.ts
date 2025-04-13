////////////////// price and rol and rank currency //////////////////
interface CurrencyData<T> {
  [key: string]: T;
}

interface YearEntry<T> {
  year: number;
  value: T;
}

export interface BestDataT {
  [key: string]: number;
  rank2022: number;
  rank2023: number;
  rank2024: number;
  rank2025: number;
  price2022: number;
  price2023: number;
  price2024: number;
  price2025: number;
  rol2022: number;
  rol2023: number;
  rol2024: number;
  rol2025: number;
}

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
