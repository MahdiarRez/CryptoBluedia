'use client';

import { ReactNode, useTransition, useState } from 'react';
import { cn } from '@/app/lib/utils/cn';
import { deleteWatchlist } from '@/app/lib/utils/data';
import { MdRemoveRedEye } from 'react-icons/md';
import { IoIosRemoveCircle } from 'react-icons/io';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  userId: string;
  currId: string;
  currSymbol: string;
}

export default function ButtonDeleteWatchlist({
  children,
  userId,
  currId,
  currSymbol,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [hovered, setHovered] = useState(false);

  const handleDelete = () => {
    startTransition(async () => {
      await deleteWatchlist(userId, currId);
    });
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        disabled={isPending}
        className={cn(
          'w-full rounded-xl flex items-center justify-center transition-all duration-300',
          isPending
            ? 'opacity-50 cursor-progress'
            : 'opacity-100 shadow-md hover:shadow-lg',
          hovered && !isPending ? 'brightness-50' : 'brightness-100'
        )}
      >
        {children}
      </button>

      <div
        className={cn(
          'absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300',
          hovered
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
          isPending && 'hidden'
        )}
      >
        <Link href={`/currencies/${currSymbol}`}>
          <button className="bg-LightBlue flex flex-row items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-DarkBlue shadow-md transition-colors duration-300">
            <MdRemoveRedEye className="text-xl" />
            Details
          </button>
        </Link>

        <button
          onClick={handleDelete}
          disabled={isPending}
          className="bg-red-600 flex flex-row items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-red-500 shadow-md transition-colors duration-300"
        >
          <IoIosRemoveCircle className="text-xl" />
          Remove
        </button>
      </div>
    </div>
  );
}
