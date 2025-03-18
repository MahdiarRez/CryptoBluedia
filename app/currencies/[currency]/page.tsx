import { fetchCurrencyById } from '@/app/lib/utils/supabaseServer';
import { notFound } from 'next/navigation';
import CryptoDetails from './crypto-details';

interface CurrencyPageProps {
  params: {
    currency: string;
  };
}

export const dynamic = 'force-dynamic'; // Ensure data is always fresh

export default async function CurrencyPage({ params }: CurrencyPageProps) {
  // Validate the currency ID
  console.log(params.currency);

  if (!params.currency || typeof params.currency !== 'string') {
    notFound();
  }

  try {
    // Fetch the currency data from Supabase
    const currency = await fetchCurrencyById(params.currency);

    return (
      <div className="min-h-screen w-full bg-white pb-4 sm:pb-8 overflow-x-hidden">
        <CryptoDetails cryptoId={params.currency} initialData={currency} />
      </div>
    );
  } catch (error) {
    // If the currency is not found, show the 404 page
    notFound();
  }
}

export async function generateMetadata({ params }: CurrencyPageProps) {
  try {
    const id = params.currency;
    const currency = await fetchCurrencyById(id);

    return {
      title: `${currency.name} (${currency.symbol.toUpperCase()}) | Crypto Dashboard`,
      description: `View detailed information, charts, and analysis for ${currency.name}`,
    };
  } catch (error) {
    return {
      title: 'Cryptocurrency | Crypto Dashboard',
      description: 'View detailed information about this cryptocurrency',
    };
  }
}
