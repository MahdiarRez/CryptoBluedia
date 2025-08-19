import { fetchCurrencies } from '@/app/lib/utils/data';
import AddWatchlistClient from './addWatchlistClient';

export default async function AddWatchlistServer() {
  const currencies = await fetchCurrencies();

  return <AddWatchlistClient currencies={currencies} />;
}
