import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';

export interface NewsItem {
  title: string;
  category: string;
  summary: string;
  url: string;
  id: string;
  head: string;
  created_at: string;
  description: string;
  source: string;
  image: string;
  currency_id: string;
  news_link: string;
}

export interface CryptoCurrency {
  id: string;
  name: string;
  logo: string;
  current_price: number;
  color: string;
  market_cap: number;
  risk?: number;
  rank2025?: number;
  reward?: number;
}

export type TrendingCoin = {
  id: string;
  name: string;
  icon: string;
  narrative: string;
};

export interface Currency {
  identifier: number;
  name: string;
  since_of: number;
  narrative: string;
  communityX: number;
  communityTel: number;
  risk: number;
  reward: number;
  value: number;
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
  sentiment: number;
  psychology: number;
  inflation: number | null;
  score: number | null;
  coin_level: string;
  upside: number;
  techno: number;
  anchain: number;
  fanda: number;
  structure: number;
  eco: number;
  investment: number;
  digitalType: number;
  id: string;
  color: string;
  logo: string;
}

export interface CurrencyData<T> {
  [key: string]: T;
}

export interface YearEntry<T> {
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

export interface MarketNewsItemProps {
  id: string;
  head: string;
  description: string;
  image: string;
  created_at: string;
}

export interface InputFloatProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  icon?: ReactNode;
  borderClr?: string;
}

export type ActionHandlerProps = (
  state: unknown,
  formData: FormData
) => Promise<{
  success: boolean;
  errors?: { field: string; message: string }[];
}>;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  label: string;
  icon?: ReactNode;
  hasArrow?: boolean;
  bg?: string;
  text?: string;
  borderClr?: string;
}

export interface CoinCurrencyValues {
  aed: number;
  ars: number;
  aud: number;
  bch: number;
  bdt: number;
  bhd: number;
  bmd: number;
  bnb: number;
  brl: number;
  btc: number;
  cad: number;
  chf: number;
  clp: number;
  cny: number;
  czk: number;
  dkk: number;
  dot: number;
  eos: number;
  eth: number;
  eur: number;
  gbp: number;
  gel: number;
  hkd: number;
  huf: number;
  idr: number;
  ils: number;
  inr: number;
  jpy: number;
  krw: number;
  kwd: number;
  lkr: number;
  ltc: number;
  mmk: number;
  mxn: number;
  myr: number;
  ngn: number;
  nok: number;
  nzd: number;
  php: number;
  pkr: number;
  pln: number;
  rub: number;
  sar: number;
  sek: number;
  sgd: number;
  sol: number;
  thb: number;
  try: number;
  twd: number;
  uah: number;
  usd: number;
  vef: number;
  vnd: number;
  xag: number;
  xau: number;
  xdr: number;
  xlm: number;
  xrp: number;
  yfi: number;
  zar: number;
  bits: number;
  link: number;
  sats: number;
}

export interface CoinGeckoData {
  market_data: {
    current_price: CoinCurrencyValues;
    total_value_locked: number | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;
    roi: number | null;
    ath: CoinCurrencyValues;
    ath_change_percentage: CoinCurrencyValues;
    ath_date: Record<keyof CoinCurrencyValues, string>;
    atl: CoinCurrencyValues;
    atl_change_percentage: CoinCurrencyValues;
    atl_date: Record<keyof CoinCurrencyValues, string>;
    market_cap: CoinCurrencyValues;
    market_cap_rank: number;
    fully_diluted_valuation: CoinCurrencyValues;
    market_cap_fdv_ratio: number;
    total_volume: CoinCurrencyValues;
    high_24h: CoinCurrencyValues;
    low_24h: CoinCurrencyValues;
  };
}
