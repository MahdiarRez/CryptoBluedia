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
