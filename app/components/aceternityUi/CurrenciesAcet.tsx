'use client';
import { cn } from '@/app/lib/utils/framer';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import shiba from '@/public/shibainu.png';
import ShineBorder from '@/app/components/magicUi/shine-border';

export const CurrenciesAcet = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: number;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 place-items-center place-content-center py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group rounded-2xl block p-2 h-auto w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-LightBlue/30 dark:bg-LightBlue/20 block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription rate={item.description} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <ShineBorder
      borderWidth={1}
      borderRadius={15}
      hiddenOnMobile={false}
      color={['#b7a9f3', '#74bbf8']}
      className={cn(
        'rounded-2xl h-40 min-h-40 flex items-start justify-start w-full min-w-28 xs:min-w-36 lg:min-w-32 p-1 overflow-hidden border z-50 border-solid border-WHITE dark:border-white/[0.2] group-hover:border-transparent relative',
        className
      )}
    >
      <Image
        src={shiba}
        alt={'shiba'}
        className={
          'z-30 absolute object-center object-cover brightness-[0.6] top-0 right-0 w-full h-full'
        }
      />
      <div className="relative h-full z-50">
        <div className="p-3 h-full justify-between flex flex-col items-start">
          {children}
        </div>
      </div>
    </ShineBorder>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn('text-white text-xl font-bold tracking-normal', className)}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  rate,
}: {
  className?: string;
  rate: number;
}) => {
  return (
    <p
      className={cn(
        'text-white font-semibold flex flex-col gap-1 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      <span>Total Rate :</span>
      <span
        className={`text-base font-bold ${rate < 100 ? 'text-red-600' : 'text-green-500'} max-w-min bg-white/80 px-2 py-0.5 rounded-sm`}
      >
        {rate}
      </span>
    </p>
  );
};
