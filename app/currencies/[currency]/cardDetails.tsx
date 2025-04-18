import { NumberTriggerOnScroll } from '@/app/components/ui/numberFlow';
import { Currency } from '@/app/lib/utils/types';
import { ReactElement } from 'react';

function CardDetails({
  currency,
  title,
  icon,
  value,
  symbol,
}: {
  currency: Currency;
  title: string;
  icon?: ReactElement;
  value: number;
  symbol?: string;
}) {
  return (
    <div
      className="h-auto w-auto rounded-2xl rounded-t-md flex flex-col p-7 py-5 items-start bg-white border-t-4 border-solid"
      style={{ borderColor: currency.color }}
    >
      <h5 className=" text-base font-medium text-DarkBlue/80 pb-2 flex flex-row items-center justify-between w-full gap-1.5">
        {title} {icon}
      </h5>
      <span className="w-full h-px bg-gradient-to-r from-DarkBlue/30 via-DarkBlue/10 to-transparent"></span>
      <div className="flex flex-row items-center gap-1.5 mt-4 tracking-tighter">
        <NumberTriggerOnScroll
          style={{ outlineColor: currency.color }}
          className=" text-xl font-bold text-DarkBlue outline-2 outline  p-1.5 px-2.5 rounded-full"
        >
          {value}
        </NumberTriggerOnScroll>
        <span className="text-xl font-extrabold text-DarkBlue">{symbol}</span>
      </div>
    </div>
  );
}

export default CardDetails;
