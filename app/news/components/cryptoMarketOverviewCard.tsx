'use client';

import { useEffect, useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { LuSquareChartGantt } from 'react-icons/lu';
import { RiBarChartBoxAiLine } from 'react-icons/ri';
import { formatMarketNumbers } from '@/app/lib/helper';
import Image, { StaticImageData } from 'next/image';
import { getCurrencyPrice } from '@/app/lib/utils/data';
import { CryptoMarketOverviewSkeleton } from '@/app/components/skeletons/cryptoMarketOverviewSkeleton';
import clsx from 'clsx';
import logo from '@/public/logo.jpeg';

function CryptoMarketOverviewCard({
  currencies,
  pic,
}: {
  currencies: string;
  pic: { name: string; url: StaticImageData }[];
}) {
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getCurrencyPrice(currencies);
      setData(result as unknown);
      return result;
    }
    fetchData();
  }, []);

  if (!data) {
    return <CryptoMarketOverviewSkeleton />;
  }

  return (
    <>
      {Object.entries(data).map((item) => {
        const details = item[1];
        const name = item[0];
        let picture = logo;
        pic.forEach((obj) => {
          if (name === obj.name) {
            picture = obj.url;
          }
        });
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
