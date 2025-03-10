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
