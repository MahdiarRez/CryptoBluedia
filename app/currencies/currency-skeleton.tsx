import { Skeleton } from "../components/ShadcnUi/skeleton";

export function CurrencyListSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <Skeleton className="h-10 w-full md:w-64" />
        <Skeleton className="h-10 w-full md:w-80" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-lg" />
          ))}
      </div>
    </div>
  );
}
