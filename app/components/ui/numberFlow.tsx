'use client';

import { cn } from '@/app/lib/utils/framer';
import NumberFlow from '@number-flow/react';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'motion/react';

type NumberProps = number | `${number}`;

export function NumberTriggerOnScroll({
  className,
  children,
  style,
  delayInMs = 100,
  once = true,
}: {
  className?: string;
  children: NumberProps;
  style?: any;
  delayInMs?: number;
  once: boolean;
}) {
  const [number, setNumber] = useState<NumberProps>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '0px 0px -20px 0px' });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setNumber(children), delayInMs);
    } else if (!isInView && !once) {
      setNumber(0);
    } else {
      setNumber(children);
    }
  }, [isInView, children, delayInMs]);

  return (
    <NumberFlow
      ref={ref}
      value={Number(number)}
      isolate={true}
      style={style}
      spinTiming={{ duration: 1200, easing: 'ease-in-out' }}
      className={cn('z-20  text-4xl font-medium tracking-tighter', className)}
    />
  );
}
