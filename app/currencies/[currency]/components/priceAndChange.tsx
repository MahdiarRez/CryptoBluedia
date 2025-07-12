'use client';
import { FaCaretUp } from 'react-icons/fa6';
import GlowText from '@/app/components/ui/glowText';
import { getCurrencyPrice } from '@/app/lib/data';
import { useEffect, useState } from 'react';
import { formatMarketNumbers } from '@/app/lib/helper';
import clsx from 'clsx';

type DataT = {
  usd: number;
  usd_24h_change: number;
  usd_market_cap: number;
  usd_24h_vol: number;
};

function PriceAndChange({ name }: { name: string }) {
  const [data, setData] = useState<DataT>({
    usd: 0,
    usd_24h_change: 0,
    usd_market_cap: 0,
    usd_24h_vol: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const details = await getCurrencyPrice(name);
      if (details[name]) {
        setData(details[name]);
        console.log(details[name]);
      }
    }
    fetchData();
  }, [name]);

  return (
    <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between w-full bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/10 shadow-md">
      <div className="flex flex-col min-h-full justify-between">
        <span className="text-white text-sm mb-1 font-medium">
          Current Price
        </span>
        <GlowText className="text-white font-black text-2xl md:text-xl lg:text-2xl xl:text-3xl xs:text-3xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          $ {data.usd}
        </GlowText>
      </div>
      <div className="flex flex-col min-h-full justify-between items-start sm:items-end">
        <span className="text-white text-sm mb-1 font-medium">24h Change</span>
        <span
          className={clsx(
            `flex flex-row items-center font-bold text-lg sm:text-xl md:text-lg gap-1`,
            {
              'text-red-400': data.usd_24h_change < 0,
              'text-green-400': data.usd_24h_change > 0,
            }
          )}
        >
          <FaCaretUp
            className={clsx(`w-5 h-5`, {
              'rotate-180': data.usd_24h_change < 0,
              'rotate-0': data.usd_24h_change > 0,
            })}
          />
          {formatMarketNumbers(data.usd_24h_change, 2)}%
        </span>
      </div>
    </div>
  );
}

export default PriceAndChange;
