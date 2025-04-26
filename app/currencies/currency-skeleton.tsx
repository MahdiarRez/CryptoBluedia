export function CurrencyListSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        {/* Search Input Skeleton */}
        <div className="relative w-5/6 sm:w-1/2">
          <div className="h-10 bg-gray-200 rounded-xl w-full"></div>
        </div>

        {/* Radio Group Skeleton */}
        <div className="flex items-center gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Currency Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(12)].map((_, i) => (
          <CurrencyCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

function CurrencyCardSkeleton() {
  return (
    <div className="animate-pulse border-none rounded-2xl overflow-hidden min-h-[189px] h-[189px] bg-white">
      <div className="p-4 border-b bg-white">
        <div className="flex items-center">
          {/* Logo Skeleton */}
          <div className="w-10 h-10 bg-gray-200 rounded-2xl mr-3"></div>

          {/* Text Skeleton */}
          <div className="flex-1">
            <div className="h-4 bg-gray-200 w-24 mb-2 rounded"></div>
            <div className="h-3 bg-gray-200 w-16 rounded"></div>
          </div>

          {/* Rank Skeleton */}
          <div className="ml-auto">
            <div className="h-4 bg-gray-200 w-8 rounded"></div>
          </div>
        </div>
      </div>

      {/* Metric Bars Skeleton */}
      <div className="bg-gray-200 grid grid-cols-2 divide-x">
        <div className="p-3">
          <div className="h-4 bg-gray-300 w-12 mx-auto rounded mb-2"></div>
          <div className="h-4 bg-gray-300 w-8 mx-auto rounded"></div>
        </div>
        <div className="p-3">
          <div className="h-4 bg-gray-300 w-12 mx-auto rounded mb-2"></div>
          <div className="h-4 bg-gray-300 w-8 mx-auto rounded"></div>
        </div>
      </div>

      {/* Footer Skeleton
      <div className="px-4 py-3 bg-gray-100">
        <div className="flex justify-between">
          <div className="h-3 bg-gray-200 w-24 rounded"></div>
          <div className="h-3 bg-gray-200 w-16 rounded"></div>
        </div>
      </div> */}
    </div>
  );
}
