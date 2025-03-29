'use client';
import type { CryptoData } from './utils/types';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-BFWDBUWwk7346RxDahTiAzkn',
  },
};

export async function getCurrencyPrice(id: string): Promise<any> {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
      options
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Fetch error:', err);
    throw err;
  }
}
// This function would normally fetch data from a cryptocurrency API
// For this example, we're returning mock data
export async function fetchCryptoData(cryptoId: string): Promise<CryptoData> {
  return {
    id: cryptoId,
    name: cryptoId,
    symbol: 'dot',
    current_price: 5.23,
    image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png',
    market_cap: 5800000000,
    market_cap_rank: 12,
    total_volume: 320000000,
    high_24h: 5.45,
    low_24h: 5.12,
    price_change_percentage_24h: -2.34,
    circulating_supply: 1200000000,
    total_supply: 1500000000,
    max_supply: 1500000000,
    ath: 49.69,
    ath_date: '2021-11-04T14:10:09.301Z',
    ath_change_percentage: -89.2,
    atl: 2.69,
    atl_date: '2020-08-20T05:48:11.359Z',
    atl_change_percentage: 94.8,
    chart_data: generateChartData(),
    markets: [
      {
        exchange: 'Binance',
        pair: 'DOT/USDT',
        price: 5.23,
        volume: 98500000,
        trust_score: 'high',
      },
      {
        exchange: 'Coinbase',
        pair: 'DOT/USD',
        price: 5.24,
        volume: 45300000,
        trust_score: 'high',
      },
      {
        exchange: 'Kraken',
        pair: 'DOT/EUR',
        price: 5.22,
        volume: 28700000,
        trust_score: 'high',
      },
      {
        exchange: 'KuCoin',
        pair: 'DOT/USDT',
        price: 5.23,
        volume: 19800000,
        trust_score: 'medium',
      },
      {
        exchange: 'Gate.io',
        pair: 'DOT/USDT',
        price: 5.22,
        volume: 12400000,
        trust_score: 'medium',
      },
    ],
    news: [
      {
        title:
          'Polkadot Releases Major Network Upgrade Enhancing Cross-Chain Communication',
        description:
          'The latest upgrade to the Polkadot network introduces significant improvements to its cross-chain messaging system, allowing for faster and more secure communication between parachains.',
        url: 'https://example.com/polkadot-upgrade',
        source: 'Crypto News Network',
        date: 'March 10, 2025',
      },
      {
        title:
          'Polkadot Ecosystem Sees Surge in Developer Activity According to New Report',
        description:
          'A recent analysis shows that Polkadot has experienced a 40% increase in developer contributions over the past quarter, ranking it among the most actively developed blockchain platforms.',
        url: 'https://example.com/polkadot-developers',
        source: 'Blockchain Insights',
        date: 'March 5, 2025',
      },
      {
        title: 'Major DeFi Protocol Announces Expansion to Polkadot Ecosystem',
        description:
          "One of the largest decentralized finance protocols has announced plans to deploy on Polkadot, citing the network's scalability and interoperability features as key factors in the decision.",
        url: 'https://example.com/defi-polkadot',
        source: 'DeFi Daily',
        date: 'February 28, 2025',
      },
    ],
    // New indicators data
    indicators: {
      since_of: 2017,
      narrative: 'Layer0',
      communityX: 1.4,
      communityTel: 24,
      risk: 16,
      reward: 63,
      value: 85,
      ranks: {
        '2022': 12,
        '2023': 14,
        '2024': 13,
        '2025': 17,
      },
      prices: {
        '2022': 6.8,
        '2023': 4.7,
        '2024': 7,
        '2025': 5,
      },
      rol: {
        '2022': -82,
        '2023': 55,
        '2024': -19,
        '2025': -10,
      },
      sentiment: 15,
      psychology: 'accumulation',
      inflation: null,
      score: 955,
      digitalType: 74,
    },
    // Polkadot's brand colors
    color: '#E6007A', // Primary pink color
    secondaryColor: '#28c9e1', // Secondary color
    backgroundColor: '#0d1217', // Background color
  };
}

function generateChartData() {
  const data = [];
  const now = new Date();
  const basePrice = 5.25;
  const volatility = 0.15;

  // Generate 30 days of data
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(now.getDate() - i);

    // Generate a price with some randomness but with a trend
    const trendFactor = Math.sin(i / 10) * 0.2;
    const randomFactor = 1 + (Math.random() * 2 - 1) * volatility + trendFactor;
    const price = basePrice * randomFactor;

    data.push({
      date: formatDate(date, 'MMM DD'),
      price: Number.parseFloat(price.toFixed(2)),
    });
  }

  return data;
}

function formatDate(date: Date, format: string) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  if (format === 'MMM DD') {
    return `${months[date.getMonth()]} ${date.getDate()}`;
  }

  return date.toLocaleDateString();
}
