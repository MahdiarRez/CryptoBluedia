import type React from 'react';
import { TabsTrigger } from '@/app/components/ShadcnUi/tabs';
import { cn } from '@/app/lib/utils/framer';
import type { ComponentPropsWithoutRef } from 'react';

interface AnimatedTabsTriggerProps
  extends ComponentPropsWithoutRef<typeof TabsTrigger> {
  colors?: {
    primary: string;
    secondary: string;
  };
}

export function AnimatedTabsTrigger({
  className,
  children,
  colors,
  ...props
}: AnimatedTabsTriggerProps) {
  const activeStyle = colors
    ? {
        color: '#FFFFFF',
      }
    : {};

  // Fix the TypeScript error by properly typing the data-state property
  const isActive = props['data-state' as keyof typeof props] === 'active';

  return (
    <TabsTrigger
      className={cn('data-[state=active]:text-white', className)}
      style={
        {
          '--active-bg': colors
            ? `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
            : '',
        } as React.CSSProperties
      }
      {...props}
    >
      <span
        className="relative z-10 flex items-center justify-center"
        style={isActive ? activeStyle : {}}
      >
        {children}
      </span>
    </TabsTrigger>
  );
}
