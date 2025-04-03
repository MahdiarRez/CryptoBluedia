import { fetchCurrencies } from '../lib/utils/supabaseServer';
import { CurrencyFilterServer } from './currency-filter';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-BFWDBUWwk7346RxDahTiAzkn',
  },
};

export default async function CurrenciesListServer() {
  // Fetch currencies from Supabase
  const currencies = await fetchCurrencies();
  const names = currencies.map((item) => {
    return item.name;
  });
  const str = names.join('%2C');
  const details = Object.entries(await getCurrenciesPrice(str));
  console.log(details);

  return (
    <div className="space-y-6">
      <CurrencyFilterServer currencies={currencies} />
    </div>
  );
}

export async function getCurrenciesPrice(id: string): Promise<any> {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd&`,
      options
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Fetch error:', err);
    throw err;
  }
}
