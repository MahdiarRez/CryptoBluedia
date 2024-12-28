import { cn } from '@/app/lib/utils/framer';
import { LuNewspaper } from 'react-icons/lu';
import Image from 'next/image';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={'flex flex-col items-center gap-16'}>
      <h3
        className={
          'text-3xl leading-8 sm:text-4xl text-center font-bold tracking-tight flex flex-row items-center gap-2'
        }
      >
        <LuNewspaper />
        Latest Market News
      </h3>
      <div
        className={cn(
          'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  isSkeleton = false,
  className,
  head,
  description,
  header,
  icon,
}: {
  isSkeleton?: boolean;
  className?: string;
  head: string;
  description?: string | React.ReactNode;
  header: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      <Image
        src={header}
        alt={head}
        className={'flex flex-1 w-full h-full min-h-[6rem]'}
        placeholder={'empty'}
        width={300}
        height={96}
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {head}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {!isSkeleton ? description : 'News'}
        </div>
      </div>
    </div>
  );
};
