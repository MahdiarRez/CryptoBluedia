function WatchlistCardSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-3 w-full gap-4 max-h-full overflow-auto">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          className="w-full shadow rounded-xl h-28 justify-between px-8 flex flex-row items-center tracking-normal text-DarkBlue relative bg-gray-200 animate-pulse"
          key={item}
        >
          <div className="flex flex-row items-center justify-center gap-2">
            {/* logo skeleton */}
            <div className="w-[50px] h-[50px] rounded-full bg-gray-300" />
            <div className="flex flex-col items-start justify-center ml-4 gap-2">
              <div className="w-24 h-4 bg-gray-300 rounded" />
              <div className="w-16 h-3 bg-gray-300 rounded" />
              <div className="w-20 h-3 bg-gray-300 rounded" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-end gap-2">
            <div className="w-20 h-5 bg-gray-300 rounded" />
            <div className="w-16 h-4 bg-gray-300 rounded" />
            <div className="w-14 h-3 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchlistCardSkeleton;
