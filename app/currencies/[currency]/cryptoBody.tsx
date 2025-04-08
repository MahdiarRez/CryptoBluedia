import { Currency } from '@/app/lib/utils/types';
import CardDetails from './cardDetails';

function CryptoBody({ currency }: { currency: Currency }) {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 w-full gap-6 mt-8">
        <CardDetails currency={currency} />
        <CardDetails currency={currency} />
        <CardDetails currency={currency} />
        <CardDetails currency={currency} />
        <CardDetails currency={currency} />
      </div>
    </div>
  );
}

export default CryptoBody;
