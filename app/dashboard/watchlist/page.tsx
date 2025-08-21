import { Poppins } from 'next/font/google';
import AddWatchlistServer from './components/addWatchlist';
import { Suspense } from 'react';
import Watchlist from './components/watchlist';
import WatchlistCardSkeleton from '@/app/components/skeletons/watchlistCardSkeleton';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '100', '200', '300', '800', '900'],
});

function Page() {
  return (
    <div
      className={`${poppins.className} flex flex-col items-center w-full gap-y-4 relative`}
    >
      <div className="flex flex-row justify-between items-center w-full py-5 sticky bg-white/85 backdrop-blur-sm z-20 -top-7">
        <h4 className={`  text-3xl text-DarkBlue font-medium`}>
          Your Watch List
        </h4>
        <Suspense
          fallback={
            <div className="px-6 py-2 bg-DarkBlue text-WHITE rounded-lg cursor-progress animate-pulse">
              Loading...
            </div>
          }
        >
          <AddWatchlistServer />
        </Suspense>
      </div>
      <Suspense fallback={<WatchlistCardSkeleton />}>
        <Watchlist />
      </Suspense>
    </div>
  );
}

export default Page;
