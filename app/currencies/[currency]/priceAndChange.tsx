'use client';
import { FaCaretUp } from 'react-icons/fa6';
import GlowText from '@/app/components/ui/glowText';
import { getCurrencyPrice } from '@/app/lib/data';
import { useEffect, useState } from 'react';
import { formatMarketNumbers } from '@/app/lib/helper';
type DataT =
  | {
      usd: number;
      usd_24h_change: number;
      usd_market_cap: number;
      usd_24h_vol: number;
    }
  | {};
function PriceAndChange({ name }: { name: string }) {
  const [data, setData] = useState<DataT>({});

  useEffect(() => {
    async function fetchData() {
      const details = await getCurrencyPrice(name);

      console.log('/////det', details[name]);
      setData(details[name]);
    }
    fetchData();
  }, []);

  return (
    <div className="mt-7 flex flex-row items-stretch justify-between w-full bg-white/20 backdrop-blur-sm p-5 rounded-xl border border-white/10 shadow-md">
      {/* <div className="flex flex-col min-h-full justify-between">
        <span className="text-white text-sm mb-1">Current Price</span>
        <GlowText className="text-white font-black text-3xl xs:text-5xl bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {formatMarketNumbers(data?.usd, 2)}%
        </GlowText>
      </div>
      <div className="flex flex-col min-h-full justify-between items-end">
        <span className="text-white text-sm mb-1">24h Change</span>
        <span className="flex flex-row items-center text-green-300 font-bold text-xl gap-1">
          <FaCaretUp className="w-5 h-5" />
          {formatMarketNumbers(data?.usd_24h_change, 2)}%
        </span>
      </div> */}
    </div>
  );
}

export default PriceAndChange;
