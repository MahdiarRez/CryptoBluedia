'use client';

export function CryptoTrendingCoinsSkeleton() {
  return (
    <div className="space-y-4 ">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Icon Skeleton */}
            <div className="h-10 w-10 rounded-md bg-gray-200 animate-pulse" />
            {/* Text Skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
