'use client';

import { useState } from 'react';
import {
  CardContentShadcn,
  // CardFooterShadcn,
  CardShadcn,
  CardTitleShadcn,
} from '@/app/components/cardShadcn';
import {
  TabsShadcn,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/components/tabsShadcn';
import { ArrowDown, ArrowUp, DollarSign } from 'lucide-react';

// import { CryptoChart } from '@/components/crypto-chart';

export function CryptoMarketOverview() {
  const [activeTab, setActiveTab] = useState('bitcoin');

  const marketData = {
    bitcoin: {
      price: 61245.78,
      change: 2.34,
      marketCap: 1183.45,
      volume: 28.76,
    },
    ethereum: {
      price: 3245.92,
      change: -1.23,
      marketCap: 389.67,
      volume: 14.32,
    },
    solana: {
      price: 142.87,
      change: 5.67,
      marketCap: 61.23,
      volume: 4.89,
    },
  };

  return (
    <CardShadcn>
      <CardTitleShadcn className="text-xl">Market Overview</CardTitleShadcn>
      <CardContentShadcn>
        <TabsShadcn
          defaultValue="bitcoin"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
            <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
            <TabsTrigger value="solana">Solana</TabsTrigger>
          </TabsList>

          {Object.entries(marketData).map(([coin, data]) => (
            <TabsContent key={coin} value={coin} className="space-y-4">
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold">
                  $
                  {data.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div
                  className={`flex items-center ${data.change >= 0 ? 'text-green-500' : 'text-red-500'}`}
                >
                  {data.change >= 0 ? (
                    <ArrowUp className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 mr-1" />
                  )}
                  {Math.abs(data.change)}%
                </div>
              </div>

              {/*<CryptoChart coin={coin} />*/}

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Market Cap</p>
                  <p className="font-medium flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {data.marketCap}B
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">24h Volume</p>
                  <p className="font-medium flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {data.volume}B
                  </p>
                </div>
              </div>
            </TabsContent>
          ))}
        </TabsShadcn>
      </CardContentShadcn>
    </CardShadcn>
  );
}
