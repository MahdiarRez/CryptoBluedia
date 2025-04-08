import { Currency } from '@/app/lib/utils/types';
import { GrScorecard } from 'react-icons/gr';

function CardDetails({ currency }: { currency: Currency }) {
  return (
    <div
      className="h-auto w-auto rounded-2xl flex flex-col p-5 items-start bg-white border border-solid"
      style={{ borderColor: currency.color }}
    >
      <h5 className=" text-xl font-medium text-DarkBlue pb-2">
        Currenct Value
      </h5>
      <span className="w-full h-px bg-DarkBlue/30"></span>
      <div className="flex flex-row items-center gap-3 mt-4">
        <GrScorecard className="bg-purple-400 p-2 rounded-md text-4xl text-white" />
        <span className=" text-3xl font-bold text-DarkBlue">$1298</span>
      </div>
    </div>
  );
}

export default CardDetails;
