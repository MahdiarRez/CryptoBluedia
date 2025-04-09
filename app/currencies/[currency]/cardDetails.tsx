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
      className="h-auto w-auto rounded-2xl rounded-t-md flex flex-col p-5 items-start bg-white border-t-4 border-solid"
      style={{ borderColor: currency.color }}
    >
      <h5 className=" text-xl font-medium text-DarkBlue/80 pb-2">{title}</h5>
      <span className="w-full h-px bg-DarkBlue/30"></span>
      {!risk || !reward ? (
        <div className="flex flex-row items-center gap-0.5 mt-4 tracking-tighter">
          {icon}
          <NumberTriggerOnScroll className="ml-3 text-3xl font-bold text-DarkBlue">
            {value}
          </NumberTriggerOnScroll>
          <span className="text-3xl font-extrabold text-DarkBlue">
            {symbol}
          </span>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-0.5 mt-4">
          {icon}
          <NumberTriggerOnScroll className=" text-3xl font-bold text-DarkBlue ml-3">
            {risk}
          </NumberTriggerOnScroll>
          <span className="text-3xl font-extrabold text-DarkBlue">
            {symbol}
          </span>
          <NumberTriggerOnScroll className=" text-3xl font-bold text-DarkBlue">
            {reward}
          </NumberTriggerOnScroll>
        </div>
      )}
    </div>
  );
}

export default CardDetails;
