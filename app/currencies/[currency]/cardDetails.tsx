import { NumberTriggerOnScroll } from '@/app/components/ui/numberFlow';
import { Currency } from '@/app/lib/utils/types';
import { ReactElement } from 'react';

function CardDetails({
  currency,
  title,
  icon,
  value,
  symbol,
  risk,
  reward,
}: {
  currency: Currency;
  title: string;
  icon: ReactElement;
  value: number;
  symbol?: string;
  risk?: number;
  reward?: number;
}) {
  return (
    <div
      className="h-auto w-auto rounded-2xl rounded-t-md flex flex-col p-7 py-4 items-start bg-white border-t-4 border-solid"
      style={{ borderColor: currency.color }}
    >
      <h5 className=" text-lg font-medium text-DarkBlue/80 pb-2 flex flex-row items-center justify-between w-full gap-1.5">
        {title} {icon}
      </h5>
      <span className="w-full h-px bg-gradient-to-r from-DarkBlue/30 via-DarkBlue/10 to-transparent"></span>
      {!risk || !reward ? (
        <div className="flex flex-row items-center gap-0.5 mt-4 tracking-tighter">
          <NumberTriggerOnScroll className=" text-2xl font-bold text-DarkBlue">
            {value}
          </NumberTriggerOnScroll>
          <span className="text-2xl font-extrabold text-DarkBlue">
            {symbol}
          </span>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-0.5 mt-4">
          <NumberTriggerOnScroll className=" text-2xl font-bold text-DarkBlue ">
            {risk}
          </NumberTriggerOnScroll>
          <span className="text-2xl font-extrabold text-DarkBlue">
            {symbol}
          </span>
          <NumberTriggerOnScroll className=" text-2xl font-bold text-DarkBlue">
            {reward}
          </NumberTriggerOnScroll>
        </div>
      )}
    </div>
  );
}

export default CardDetails;
