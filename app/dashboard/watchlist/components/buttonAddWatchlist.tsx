'use client';

import { cn } from '@/app/lib/utils/cn';
import { insertWatchlist } from '@/app/lib/utils/data';
import { Children, ReactNode, useTransition } from 'react';

function ButtonAddWatchlist({
  children,
  userId,
  currId,
}: {
  children: ReactNode;
  userId: string;
  currId: string;
}) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await insertWatchlist(userId, currId);
    });
  };

  return (
    <button
      className={cn(
        `w-full  flex items-center justify-center`,
        isPending
          ? 'opacity-50 animate-pulse sm:scale-105'
          : 'opacity-100 animate-none sm:hover:scale-105 transition-transform duration-300'
      )}
      onClick={handleClick}
      disabled={isPending}
    >
      {children}
    </button>
  );
}

export default ButtonAddWatchlist;
