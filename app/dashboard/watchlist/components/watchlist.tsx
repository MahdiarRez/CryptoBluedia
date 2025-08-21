import { fetchWatchlist } from '@/app/lib/utils/data';
import WatchlistCard from './watchlistCard';

async function Watchlist() {
  const { watchlist } = await fetchWatchlist();

  if (!watchlist.length) return <p>Your watchlist is empty.</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 max-h-full overflow-auto">
      {watchlist.map((item) => (
        <WatchlistCard key={item.name} curr={item} />
      ))}
    </div>
  );
}

export default Watchlist;
