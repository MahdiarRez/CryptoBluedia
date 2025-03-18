import { fetchCurrencies } from '../lib/utils/supabaseServer';
import { CurrencyFilterServer } from './currency-filter';

export default async function CurrenciesListServer() {
  // Fetch currencies from Supabase
  const currencies = await fetchCurrencies();

  return (
    <div className="space-y-6">
      <CurrencyFilterServer currencies={currencies} />
    </div>
  );
}
