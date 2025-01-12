'use client';
import { cn } from '@/app/lib/utils/framer';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import shiba from '@/public/shibainu.png';
import ShineBorder from '@/app/components/magicUi/shine-border';
import { FadeUp } from '@/app/components/motions/fade';

export const CurrenciesAcet = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-2 xs:grid-cols-3 place-items-center place-content-center lg:grid-cols-3 py-10',
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
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-2xl"
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
            <Image
              src={shiba}
              alt={'currency pic'}
              className={'w-14 h-14 rounded-lg object-cover object-center'}
            />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
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
    <FadeUp>
      <ShineBorder
        borderWidth={1}
        borderRadius={15}
        hiddenOnMobile={false}
        color={['#916CF5', '#44A5FB']}
        className={cn(
          'rounded-2xl h-auto w-full min-w-36 p-1 overflow-hidden bg-DarkBlue/95 border border-solid border-WHITE dark:border-white/[0.2] group-hover:border-transparent relative z-20',
          className
        )}
      >
        <div className="relative z-50 rounded-2xl">
          <div className="p-4">{children}</div>
        </div>
      </ShineBorder>
    </FadeUp>
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
      className={cn(
        'text-white text-xl font-semibold tracking-normal mt-2.5',
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        'mt-0.5 text-white/70 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      Total Rate : <br />{' '}
      <span className={'text-base font-bold text-red-300'}>{children}</span>
    </p>
  );
};
