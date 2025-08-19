import { interFont } from '@/app/currencies/[currency]/components/currencyMainPage';
import WatchlistCard from './components/watchlistCard';
import { Cabin } from 'next/font/google';
import AddWatchlistServer from './components/addWatchlistServer';
import { fetchWatchlist } from '@/app/lib/utils/data';

const archivoFont = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

async function WatchList() {
  const { watchlist } = await fetchWatchlist();

  // if (loading) return <p>Loading watchlist...</p>;
  if (!watchlist.length) return <p>Your watchlist is empty.</p>;

  return (
    <div
      className={`${interFont.className} flex flex-col items-center w-full gap-y-4 relative`}
    >
      <div className="flex flex-row justify-between items-center w-full py-5 sticky bg-white/85 backdrop-blur-sm z-20 -top-7">
        <h4
          className={` ${archivoFont.className} text-3xl text-DarkBlue font-medium`}
        >
          Your Watch List
        </h4>
        <AddWatchlistServer />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4 max-h-full overflow-auto">
        {watchlist.map((item) => (
          <WatchlistCard key={item.name} curr={item} />
        ))}
      </div>
    </div>
  );
}

export default WatchList;
