import { Suspense } from 'react';
import { CurrencyListSkeleton } from './currency-skeleton';
import CurrenciesListServer from './currenciesList';

export const metadata = {
  title: 'Currencies',
  description:
    'Browse and analyze the top cryptocurrencies by market capitalization',
};

export default function CurrenciesPage() {
  return (
    <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE dark:bg-DarkBlue py-32 px-4 min-h-dvh w-full">
      <Suspense fallback={<CurrencyListSkeleton />}>
        <CurrenciesListServer />
      </Suspense>
    </div>
  );
}
