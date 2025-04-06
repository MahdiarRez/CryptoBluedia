import { fetchCurrencyById } from '@/app/lib/utils/supabaseServer';
import { notFound } from 'next/navigation';
import CryptoDetails from './cryptoDetails';

export const dynamic = 'force-dynamic'; // Ensure data is always fresh

export default async function Page({
  params,
}: {
  params: Promise<{ currency: string }>;
}) {
  const { currency } = await params;

  if (!currency || typeof currency !== 'string') {
    notFound();
  }

  try {
    const currency = await fetchCurrencyById((await params).currency);
    console.log('currency : ', currency);

    return (
      <div className="sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-32 px-4 min-h-dvh w-full">
        <CryptoDetails currency={currency} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ currency: string }>;
}) {
  try {
    const id = (await params).currency;
    const currency = await fetchCurrencyById(id);

    return {
      title: `${currency.name} (${currency.id.toUpperCase()})`,
      description: `View detailed information, charts, and analysis for ${currency.name}`,
    };
  } catch (error) {
    return {
      title: 'Bluedia',
      description: 'View detailed information about this cryptocurrency',
    };
  }
}
