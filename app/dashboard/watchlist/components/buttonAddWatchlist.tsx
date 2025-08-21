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
        `w-full rounded-xl flex items-center justify-center`,
        isPending
          ? 'opacity-50 shadow-lg cursor-progress'
          : 'opacity-100  sm:hover:shadow-lg transition-shadow duration-300'
      )}
      onClick={handleClick}
      disabled={isPending}
    >
      {children}
    </button>
  );
}

export default ButtonAddWatchlist;
