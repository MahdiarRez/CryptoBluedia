import React from 'react';
import { cn } from '@/app/lib/utils/cn';

interface ButtonInteractiveSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ButtonInteractiveSkeleton: React.FC<
  ButtonInteractiveSkeletonProps
> = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'w-auto min-w-[137px] h-[38px] text-DarkBlue flex items-center justify-center px-6 rounded-lg border border-solid border-DarkBlue dark:border-WHITE bg-gray-200 dark:bg-gray-700 animate-pulse',
        className
      )}
      {...props}
    >
      Loading
    </div>
  );
};
