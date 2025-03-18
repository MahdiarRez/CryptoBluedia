import { Suspense } from 'react';
import { CurrencyListSkeleton } from './currency-skeleton';
import CurrenciesListServer from './currenciesList';

export const metadata = {
  title: 'Cryptocurrencies | Market Data',
  description:
    'Browse and analyze the top cryptocurrencies by market capitalization',
};

export const dynamic = 'force-dynamic'; // Ensure data is always fresh

export default function CurrenciesPage() {
  return (
    <div className="w-full min-h-dvh sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-32">
      <Suspense fallback={<CurrencyListSkeleton />}>
        <CurrenciesListServer />
      </Suspense>
    </div>
  );
}
