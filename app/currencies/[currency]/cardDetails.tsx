import { Currency } from '@/app/lib/utils/types';
import { ReactElement } from 'react';

function CardDetails({
  currency,
  title,
  icon,
  value,
}: {
  currency: Currency;
  title: string;
  icon: ReactElement;
  value: string;
}) {
  return (
    <div
      className="h-auto w-auto rounded-2xl flex flex-col p-5 items-start bg-white border border-solid"
      style={{ borderColor: currency.color }}
    >
      <h5 className=" text-xl font-medium text-DarkBlue/80 pb-2">{title}</h5>
      <span className="w-full h-px bg-DarkBlue/30"></span>
      <div className="flex flex-row items-center gap-3 mt-4">
        {icon}
        <span className=" text-3xl font-bold text-DarkBlue">{value}</span>
      </div>
    </div>
  );
}

export default CardDetails;
