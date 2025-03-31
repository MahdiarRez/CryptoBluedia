import * as React from 'react';

import { cn } from '@/app/lib/utils/framer';

const CardShadcn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-xl bg-white text-gray-950  dark:bg-gray-950 dark:text-gray-50',
      className
    )}
    {...props}
  />
));
CardShadcn.displayName = 'CardShadcn';

const CardHeaderShadcn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeaderShadcn.displayName = 'CardHeaderShadcn';

const CardTitleShadcn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
CardTitleShadcn.displayName = 'CardTitleShadcn';

const CardDescriptionShadcn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm text-gray-500 dark:text-gray-400', className)}
    {...props}
  />
));
CardDescriptionShadcn.displayName = 'CardDescriptionShadcn';

const CardContentShadcn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContentShadcn.displayName = 'CardContentShadcn';

const CardFooterShadcn = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooterShadcn.displayName = 'CardFooterShadcn';

export {
  CardShadcn,
  CardHeaderShadcn,
  CardFooterShadcn,
  CardTitleShadcn,
  CardDescriptionShadcn,
  CardContentShadcn,
};
