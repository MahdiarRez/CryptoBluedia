import { fetchCurrencies, fetchWatchlist } from '@/app/lib/utils/data';
import WatchlistCard from './watchlistCard';
import { getUserWithProfile } from '../../actions/getUserProfile';
import ButtonAddWatchlist from './buttonAddWatchlist';
import { redirect } from 'next/navigation';

export default async function AddWatchlist() {
  const [currencies, { watchlist, user }] = await Promise.all([
    fetchCurrencies(),
    fetchWatchlist(),
  ]);

  if (!user) {
    redirect('/login');
  }

  const watchlistNames = watchlist.map((item) => item.name);
  const newarr = currencies.filter(
    (item) => !watchlistNames.includes(item.name)
  );

  return (
    <ul className="flex flex-col gap-4 w-full px-9 pb-7">
      {newarr.map((c) => (
        <li key={c.id}>
          <ButtonAddWatchlist currId={c.name} userId={user.id}>
            <WatchlistCard showPrice={false} curr={c} />
          </ButtonAddWatchlist>
        </li>
      ))}
    </ul>
  );
}
