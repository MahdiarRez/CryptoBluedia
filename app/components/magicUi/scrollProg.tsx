'use client';

import { cn } from '@/app/lib/utils/framer';
import {
  motion,
  type MotionProps,
  useScroll,
  type MotionStyle,
} from 'motion/react';
import React from 'react';

type ScrollProgressProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
>;

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  // Define the style with proper typing
  const motionStyle: MotionStyle = {
    scaleX: scrollYProgress,
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-[155] h-1 origin-left bg-gradient-to-r from-[#1B2057] via-[#38C6FF] to-[#6F6FCC]',
        className
      )}
      style={motionStyle}
      {...props}
    />
  );
});

ScrollProgress.displayName = 'ScrollProgress';
