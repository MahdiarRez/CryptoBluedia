'use client';
import { hexOpacity } from '@/app/lib/helper';
import Image from 'next/image';
import { Currency } from '@/app/lib/types';

function WatchlistCard({
  curr: data,
  showPrice = true,
}: {
  curr: Currency;
  showPrice?: boolean;
}) {
  return (
    <div
      className="w-full shadow rounded-xl h-28 justify-between px-8 flex flex-row items-center tracking-normal text-DarkBlue relative group "
      style={{ backgroundColor: hexOpacity(data.color, 0.3) }}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        {/* <IoIosRemoveCircle className="text-3xl mr-6 fill-red-500 md:group-hover: visible transition-all duration-300" /> */}
        <Image src={data.logo} alt={data.name} width={50} height={50} />
        <div className="flex flex-col items-start justify-center ml-4">
          <span className="font-medium text-lg capitalize">{data.name}</span>
          <span className="font-semibold text-sm  uppercase opacity-60">
            {data.id}
          </span>
          <span className="font-semibold text-sm  opacity-60">
            {data.narrative}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-end">
        <span className="text-2xl font-medium text-DarkBlue">
          {showPrice ? '0.005 $' : `Upside: ${data.upside}`}
        </span>
        <span className="text-lg font-medium text-red-600">
          {showPrice ? '-0.8 %' : `Sentiment: ${data.sentiment}`}
        </span>
        <span className="text-base opacity-80 font-normal ">
          Score: {data.score}
        </span>
      </div>
    </div>
  );
}

export default WatchlistCard;
