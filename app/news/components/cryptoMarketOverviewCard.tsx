'use client';

import { useEffect, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { LuSquareChartGantt } from 'react-icons/lu';
import { RiBarChartBoxAiLine } from 'react-icons/ri';
import { formatMarketNumbers } from '@/app/lib/helper';
import clsx from 'clsx';
import Image from 'next/image';
import btcNews from '@/public/btcNews.jpg';
import ethNews from '@/public/ethNews.jpg';
import solanaNews from '@/public/solanaNews.jpg';
import { getCurrencyPrice } from '@/app/lib/utils/data';
import { CryptoMarketOverviewSkeleton } from '@/app/components/skeletons/cryptoMarketOverviewSkeleton';

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

function CryptoMarketOverviewCard() {
  const [data, setData] = useState<marketDataT>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getCurrencyPrice('bitcoin,ethereum,solana');
      setData(result as marketDataT);
      return result;
    }
    fetchData();
  }, []);
  console.log(data);

  if (!data) {
    return <CryptoMarketOverviewSkeleton />;
  }

  return (
    <>
      {Object.entries(data).map((item) => {
        const details = item[1];
        const name = item[0];
        let picture = null;
        switch (name) {
          case 'bitcoin':
            picture = btcNews;
            break;
          case 'ethereum':
            picture = ethNews;
            break;
          case 'solana':
            picture = solanaNews;
            break;

          default:
            picture = btcNews;
            break;
        }
        return (
          <div
            className="w-full rounded-lg px-4 py-5 relative flex flex-col gap-2 overflow-hidden text-white bg-DarkBlue "
            key={name}
          >
            <Image
              src={picture}
              alt="newspic"
              className=" absolute top-0 right-0 z-0 opacity-70 object-center"
              placeholder="blur"
            />
            <h6 className="text-xl font-semibold capitalize z-10">{name}</h6>
            <div className="flex flex-row justify-between w-full items-center z-10 ">
              <span className="flex flex-row items-center gap-px text-2xl font-semibold">
                <BsCurrencyDollar />
                {details.usd}
              </span>
              <span
                className={clsx(`text-lg font-normal`, {
                  'text-green-400': details.usd_24h_change > 0,
                  'text-red-400': details.usd_24h_change < 0,
                })}
              >
                {formatMarketNumbers(details.usd_24h_change, 2)} %
              </span>
            </div>
            <div className="flex flex-col justify-between w-full items-center z-10">
              <div className="flex flex-row items-center gap-1 justify-between w-full">
                <span className="flex flex-row items-center gap-0.5 text-sm xs:text-lg md:text-sm font-normal">
                  <RiBarChartBoxAiLine />
                  Market Cap
                </span>
                <span className=" text-sm xs:text-lg md:text-sm font-medium">
                  {formatMarketNumbers(details.usd_market_cap, 3)} B
                </span>
              </div>
              <div className="flex flex-row items-center gap-1 justify-between w-full">
                <span className="flex flex-row items-center gap-0.5 text-sm xs:text-lg md:text-sm font-normal">
                  <LuSquareChartGantt />
                  Volume 24h
                </span>
                <span className=" text-sm xs:text-lg md:text-sm font-medium">
                  {formatMarketNumbers(details.usd_24h_vol, 3)} B
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export { CryptoMarketOverviewCard };
