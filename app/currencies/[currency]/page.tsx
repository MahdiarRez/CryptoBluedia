import { notFound } from 'next/navigation';
import { fetchCurrencies, fetchCurrencyById } from '@/app/lib/utils/data';
import type { Currency } from '@/app/lib/types';
import type { Metadata } from 'next';
import CurrencyMainPage from './components/CryptoMain';

export default async function Page({
  params,
}: {
  params: Promise<{ currency: string }>;
}) {
  const { currency } = await params;
  const fetchedCurrency = await fetchCurrencyById(currency);
  console.log(currency);

  if (!currency || typeof currency !== 'string' || currency.length < 2) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-WHITE px-4 pt-10 transition-colors duration-200 dark:bg-DarkBlue sm:px-8 lg:px-28 xl:px-40">
      <CurrencyMainPage currency={fetchedCurrency} />
    </main>
  );
}

//////// Metadata & static params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ currency: string }>;
}): Promise<Metadata> {
  const { currency } = await params;

  try {
    const currencyData = await fetchCurrencyById(currency);

    return {
      title: `${currencyData.name} (${currencyData.id.toUpperCase()})`,
      description: `Track ${currencyData.name} price, market cap, volume and technical analysis. Real-time cryptocurrency data and insights.`,
      keywords: [
        currencyData.name,
        currencyData.id,
        'cryptocurrency',
        'price',
        'market cap',
      ],
    };
  } catch {
    return {
      title: 'Cryptocurrency Details',
      description:
        'View detailed cryptocurrency information and live market data',
    };
  }
}

export async function generateStaticParams(): Promise<
  Array<{ currency: string }>
> {
  try {
    const currencies: Currency[] = await fetchCurrencies();

    return currencies.slice(0, 50).map((currency) => ({
      currency: currency.id,
    }));
  } catch (error) {
    console.error('Failed to generate static params:', error);
    return [];
  }
}
