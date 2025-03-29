'use client';

import { useEffect, memo, useState } from 'react';
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
import { getCurrencyPrice } from '../lib/api';
import { formatMarketNumbers } from '@/app/lib/formatter';

type marketDataT = {
  bitcoin: {
    usd: number;
    usd_24h_change: number;
    usd_market_cap: number;
    usd_24h_vol: number;
  };
  ethereum: {
    usd: number;
    usd_24h_change: number;
    usd_market_cap: number;
    usd_24h_vol: number;
  };
  solana: {
    usd: number;
    usd_24h_change: number;
    usd_market_cap: number;
    usd_24h_vol: number;
  };
} | null;

export const CryptoMarketOverview = memo(function CryptoMarketOverview() {
  const [activeTab, setActiveTab] = useState('bitcoin');
  const [data, setData] = useState<marketDataT>(null);
  console.log(data);

  async function getMarketData() {
    const res = await getCurrencyPrice('bitcoin%2Cethereum%2Csolana');
    return res;
  }

  useEffect(() => {
    async function fetchData() {
      const result = await getMarketData();
      setData(result);
    }

    fetchData();
  }, []);

  return (
    <CardShadcn className="rounded-2xl w-full">
      <CardTitleShadcn className="text-xl text-center py-6">
        Market Overview
      </CardTitleShadcn>
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
          {data &&
            Object.entries(data).map(([coin, val]) => (
              <TabsContent key={coin} value={coin} className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-bold">
                    $
                    {val.usd.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div
                    className={`flex items-center ${val.usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {val.usd_24h_change >= 0 ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    {val.usd_24h_change.toFixed(3)}%
                  </div>
                </div>

                {/*<CryptoChart coin={coin} />*/}

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Market Cap</p>
                    <p className="font-medium flex items-center">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {formatMarketNumbers(val.usd_market_cap, 3)}B
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">24h Volume</p>
                    <p className="font-medium flex items-center">
                      <DollarSign className="h-3 w-3 mr-1" />
                      {formatMarketNumbers(val.usd_24h_vol, 2)}B
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
        </TabsShadcn>
      </CardContentShadcn>
    </CardShadcn>
  );
});
