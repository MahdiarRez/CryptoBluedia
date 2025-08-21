'use client';
import { insertWatchlist } from '@/app/lib/utils/data';
import { ReactNode } from 'react';

function ButtonAddWatchlist({
  children,
  userId,
  currId,
}: {
  children: ReactNode;
  userId: string;
  currId: string;
}) {
  return (
    <button
      className="w-full hover:scale-105 transition-transform duration-300"
      onClick={() => insertWatchlist(userId, currId)}
    >
      {children}
    </button>
  );
}

export default ButtonAddWatchlist;
