import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { NewsItem } from '@/app/lib/types';
import { BadgeShadcn } from '@/app/components/ui/badge';
import {
  CardContentShadcn,
  CardFooterShadcn,
  CardShadcn,
} from '@/app/components/ui/card';
import pic from '@/public/youtubePic.jpeg';

interface CryptoNewsCardProps {
  newsItem: NewsItem;
  classes?: string;
}

export function CryptoNewsCard({ newsItem, classes }: CryptoNewsCardProps) {
  return (
    <CardShadcn
      className={`overflow-hidden flex flex-col rounded-2xl transition-all cursor-pointer hover:shadow-md ${classes} self-center group h-full`}
    >
      <div className="relative w-full overflow-hidden h-52">
        <Image
          // src={newsItem.imageUrl || '/placeholder.svg'}
          priority
          src={pic}
          fill={true}
          alt={newsItem.title}
          sizes="200"
          placeholder="blur"
          className="object-cover sm:group-hover:grayscale transition-all duration-500"
        />
      </div>
      <CardContentShadcn className="p-4">
        <div className="flex items-center justify-between mb-2">
          <BadgeShadcn variant="outline" className="capitalize">
            {newsItem.category}
          </BadgeShadcn>
          <span className="text-xs text-muted-foreground">{'4 days ago'}</span>
        </div>
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">
          {newsItem.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {newsItem.summary}
        </p>
      </CardContentShadcn>
      <CardFooterShadcn className="p-4 pt-0 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Source: {newsItem.source}
        </span>
        <Link
          href={newsItem.url}
          className="inline-flex items-center text-xs font-medium text-primary hover:underline"
        >
          Read more <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardFooterShadcn>
    </CardShadcn>
  );
}
