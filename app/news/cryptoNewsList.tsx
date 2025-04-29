import { CryptoNewsCard } from '@/app/news/cryptoNewsCard';
import type { NewsItem } from '@/app/lib/utils/types';

interface CryptoNewsListProps {
  newsItems: NewsItem[];
}

export const newsItems: NewsItem[] = [];

export function CryptoNewsList({ newsItems }: CryptoNewsListProps) {
  if (newsItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <h3 className="text-xl font-semibold">No news found</h3>
        <p className="text-muted-foreground mt-2">
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {newsItems.map((item) => (
        <CryptoNewsCard key={item.id} newsItem={item} />
      ))}
    </div>
  );
}
