export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  imageUrl: string;
  category: string;
  url: string;
}

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  ath?: number;
  ath_date?: string;
  ath_change_percentage?: number;
  atl?: number;
  atl_date?: string;
  atl_change_percentage?: number;
}

export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  marketCap?: number;
  volume?: number;
  logo?: string;
}

export interface CryptoData {
  id?: string;
  name?: string;
  symbol?: string;
  current_price?: number;
  image?: string;
  market_cap?: number;
  market_cap_rank?: number;
  total_volume?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_percentage_24h: number;
  circulating_supply?: number;
  total_supply?: number;
  max_supply?: number;
  ath?: number;
  ath_date?: string;
  ath_change_percentage?: number;
  atl?: number;
  atl_date?: string;
  atl_change_percentage?: number;
  chart_data?: Array<{
    date: string;
    price: number;
  }>;
  markets: Array<{
    exchange: string;
    pair: string;
    price: number;
    volume: number;
    trust_score: string;
  }>;
  news: Array<{
    title: string;
    description: string;
    url: string;
    source: string;
    date: string;
  }>;
  // New indicator fields
  indicators: CryptoIndicators;
  ecosystem?: {
    projects: Array<{
      name: string;
      category: string;
      description: string;
      link: string;
      icon?: string;
    }>;
    stats?: {
      projectsCount: number;
      parachainsCount: number;
      tvl: number;
      developersCount: number;
    };
  };
  // New color property for theming
  color: string;
  secondaryColor?: string;
  backgroundColor?: string;
}

export interface CryptoIndicators {
  since_of: number;
  narrative: string;
  communityX: number;
  communityTel: number;
  risk: number;
  reward: number;
  value: number;
  ranks: {
    [key: string]: number;
  };
  prices: {
    [key: string]: number;
  };
  rol: {
    [key: string]: number;
  };
  sentiment: number;
  psychology: string;
  inflation: number | null;
  score: number;
  digitalType: number;
}

export type TimeframeType = '1d' | '7d' | '30d' | '1y';
