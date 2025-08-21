import ModalBox from '@/app/components/ui/modalBox';
import { fetchCurrencies, fetchWatchlist } from '@/app/lib/utils/data';
import WatchlistCard from './watchlistCard';
import { getUserWithProfile } from '../../actions/getUserProfile';
import ButtonAddWatchlist from './buttonAddWatchlist';
import { Suspense } from 'react';

export default async function AddWatchlist() {
  const currencies = await fetchCurrencies();
  const { watchlist } = await fetchWatchlist();
  const { profile } = await getUserWithProfile();

  const watchlistNames = watchlist.map((item) => item.name);
  const newarr = currencies.filter(
    (item) => !watchlistNames.includes(item.name)
  );

  return (
    <ModalBox headerText="Select Currency" buttonText="Add Currency">
      <ul className="flex flex-col gap-4 w-full px-9 pb-7">
        <Suspense fallback={<p>loading....</p>}>
          {newarr.map((c) => (
            <li key={c.id}>
              <ButtonAddWatchlist currId={c.name} userId={profile?.id}>
                <WatchlistCard showPrice={false} curr={c} />
              </ButtonAddWatchlist>
            </li>
          ))}
        </Suspense>
      </ul>
    </ModalBox>
  );
}
