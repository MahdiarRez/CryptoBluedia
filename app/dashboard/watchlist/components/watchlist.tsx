import { fetchWatchlist } from '@/app/lib/utils/data';
import WatchlistCard from './watchlistCard';
import ButtonDeleteWatchlist from './buttonDeleteWatchlist';
import { redirect } from 'next/navigation';
import { BsFillEmojiGrinFill } from 'react-icons/bs';

export const dynamic = 'force-dynamic';

async function Watchlist() {
  const { watchlist, user } = await fetchWatchlist();

  if (!user) {
    redirect('/login');
  }

  if (!watchlist.length) {
    return (
      <div className="max-h-full w-full text-2xl flex flex-row items-center justify-center gap-3 py-10 bg-LightBlue/30 text-DarkBlue/70 rounded-xl">
        <BsFillEmojiGrinFill />
        <p className="text-center ">Your Watch List is empty.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 max-h-full overflow-auto">
      {watchlist.map((item) => (
        <ButtonDeleteWatchlist
          key={item.name}
          userId={user?.id}
          currId={item.name}
        >
          <WatchlistCard curr={item} />
        </ButtonDeleteWatchlist>
      ))}
    </div>
  );
}

export default Watchlist;
