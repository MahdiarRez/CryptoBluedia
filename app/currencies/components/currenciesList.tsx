import { fetchCurrencies } from '../../lib/data';
import { CurrencyFilterServer } from './currencyFilter';

export default async function CurrenciesListServer() {
  const currencies = await fetchCurrencies();

  if (!currencies || currencies.length === 0) {
    return <p className="text-DarkBlue/70 text-center">There is no currency</p>;
  }

  return (
    <div className="space-y-6">
      <CurrencyFilterServer currencies={currencies} />
    </div>
  );
}
