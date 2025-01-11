import { cn } from '@/app/lib/utils/framer';
import { LuNewspaper } from 'react-icons/lu';
import Image from 'next/image';
import { FadeUp } from '@/app/components/motions/fade';

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
          'grid md:auto-rows-[23rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-6xl mx-auto ',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  head,
  description,
  header,
  icon,
}: {
  className?: string;
  head: string;
  description?: string | React.ReactNode;
  header: string;
  icon?: React.ReactNode;
}) => {
  return (
    <FadeUp
      classes={cn(
        'row-span-1 cursor-pointer rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      <Image
        src={header}
        alt={head}
        className={
          'flex flex-1 w-full h-full min-h-[218px] max-h-[218px] object-cover rounded-xl object-center'
        }
        placeholder={'empty'}
        width={300}
        height={96}
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-DarkBlue dark:text-neutral-200 mb-2 mt-2 line-clamp-1">
          {head}
        </div>
        <div className="font-sans font-normal text-DarkBlue text-xs sm:text-sm dark:text-neutral-300 min-h-10 line-clamp-2">
          {description}
        </div>
      </div>
    </FadeUp>
  );
};
