import {
  CardShadcn,
  CardContentShadcn,
  CardHeaderShadcn,
  CardTitleShadcn,
} from '@/app/components/cardShadcn';
import { BadgeShadcn } from '@/app/components/badgeShadcn';
import { ArrowDown, ArrowUp, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export function CryptoTrendingCoins() {
  const trendingCoins = [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 61245.78,
      change: 2.34,
      logo: '/placeholder.svg?height=32&width=32',
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3245.92,
      change: -1.23,
      logo: '/placeholder.svg?height=32&width=32',
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      price: 142.87,
      change: 5.67,
      logo: '/placeholder.svg?height=32&width=32',
    },
    {
      id: 'cardano',
      name: 'Cardano',
      symbol: 'ADA',
      price: 0.58,
      change: 1.45,
      logo: '/placeholder.svg?height=32&width=32',
    },
    {
      id: 'polkadot',
      name: 'Polkadot',
      symbol: 'DOT',
      price: 7.23,
      change: -0.87,
      logo: '/placeholder.svg?height=32&width=32',
    },
  ];

  return (
    <CardShadcn>
      <CardHeaderShadcn className="flex flex-row items-center justify-between">
        <CardTitleShadcn className="text-xl">Trending Coins</CardTitleShadcn>
        <BadgeShadcn variant="outline" className="flex items-center">
          <TrendingUp className="h-3 w-3 mr-1" />
          24h
        </BadgeShadcn>
      </CardHeaderShadcn>
      <CardContentShadcn>
        <div className="space-y-4">
          {trendingCoins.map((coin) => (
            <div key={coin.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={coin.logo || '/placeholder.svg'}
                  alt={coin.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{coin.name}</p>
                  <p className="text-xs text-muted-foreground">{coin.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  $
                  {coin.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: coin.price < 1 ? 4 : 2,
                  })}
                </p>
                <p
                  className={`text-xs flex items-center justify-end ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'}`}
                >
                  {coin.change >= 0 ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(coin.change)}%
                </p>
              </div>
            </div>
          ))}
        </div>{' '}
      </CardContentShadcn>{' '}
    </CardShadcn>
  );
}
