import { NumberTriggerOnScroll } from '@/app/components/ui/numberFlow';
import { Currency } from '@/app/lib/utils/types';
import { ReactElement } from 'react';
import { hexOpacity } from '@/app/lib/helper';
function CardDetails({
  currency,
  title,
  icon,
  value,
  symbol,
  className,
  isNumberVal = true,
}: {
  currency: Currency;
  title: string;
  icon?: ReactElement;
  value: number | string | null;
  symbol?: string;
  className?: string;
  isNumberVal?: boolean;
}) {
  return (
    <div
      className={`${className} h-auto w-auto rounded-2xl rounded-t-md flex flex-col md2:px-5 lg:px-7 px-7 py-5 items-start bg-white border-t-4 border-solid`}
      style={{ borderColor: hexOpacity(currency.color, 0.8) }}
    >
      <h5 className=" text-base text-nowrap font-medium text-DarkBlue/80 pb-2 flex flex-row items-center justify-between w-full gap-1.5">
        {title} {icon}
      </h5>
      <span className="w-full h-px bg-gradient-to-r from-DarkBlue/30 via-DarkBlue/10 to-transparent"></span>
      <div className="flex flex-row items-center gap-1.5 mt-4 tracking-tighter">
        {isNumberVal && typeof value == 'number' ? (
          <NumberTriggerOnScroll
            once={true}
            style={{ outlineColor: hexOpacity(currency.color, 0.7) }}
            className={`text-xl font-bold text-DarkBlue outline-2 outline  p-1.5 px-2.5 rounded-full`}
          >
            {value}
          </NumberTriggerOnScroll>
        ) : (
          <span className="text-xl font-bold text-DarkBlue outline-2 outline-transparent  py-1.5 capitalize tracking-normal">
            {value}
          </span>
        )}
        <span className="text-xl font-extrabold text-DarkBlue">{symbol}</span>
      </div>
    </div>
  );
}

export default CardDetails;
