import { hexOpacity } from '@/app/lib/helper';
import Image from 'next/image';
import { Currency } from '@/app/lib/types';
import { cn } from '@/app/lib/utils/cn';

function WatchlistCard({
  curr: data,
  showPrice = true,
}: {
  curr: Currency;
  showPrice?: boolean;
}) {
  return (
    <div
      className="w-full rounded-xl h-28 justify-between px-8 flex flex-row items-center tracking-normal text-DarkBlue relative group-hover:brightness-75"
      style={{ backgroundColor: hexOpacity(data.color, 0.3) }}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        {/* <IoIosRemoveCircle className="text-3xl mr-6 fill-red-500 me-hover: visible transition-all duration-300" /> */}
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
        <span
          className={cn(
            ` font-normal text-DarkBlue tracking-normal`,
            showPrice ? 'text-2xl tracking-tight ' : 'text-lg'
          )}
        >
          {showPrice ? '0.005 $' : `Upside: ${data.upside} %`}
        </span>
        <span
          className={cn(
            ` font-medium `,
            showPrice ? 'text-lg text-red-600' : 'text-sm text-DarkBlue/60'
          )}
        >
          {showPrice ? '-0.8 %' : `Sentiment: ${data.sentiment}`}
        </span>
        <span
          className={cn(
            ` opacity-80 font-normal`,
            showPrice ? 'text-base' : 'text-sm'
          )}
        >
          Score: {data.score}
        </span>
      </div>
    </div>
  );
}

export default WatchlistCard;
