'use client';

import { cn } from '@/app/lib/utils/framer';
import { motion, MotionProps, useScroll } from 'motion/react';
import React from 'react';

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<
  HTMLDivElement,
  ScrollProgressProps
>(({ className, ...props }, ref) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        'fixed inset-x-0 top-0 z-[155] h-1 origin-left bg-gradient-to-r to-[#6F6FCC] via-[#38C6FF] from-[#1B2057]',
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
});

ScrollProgress.displayName = 'ScrollProgress';
