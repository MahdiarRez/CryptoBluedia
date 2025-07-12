'use client';

import { ReactNode, useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import useMeasure from 'react-use-measure';

import { cn } from '@/app/lib/utils/cn';

type Tab = {
  id: number;
  label: string;
  content: ReactNode;
  icon?: React.ReactNode | undefined;
};

interface OgImageSectionProps {
  tabs: Tab[];
  className?: string;
  rounded?: boolean;
  onChange?: () => void;
}

function DirectionAwareTabs({
  tabs,
  className,
  rounded,
  onChange,
}: OgImageSectionProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, bounds] = useMeasure();

  const content = useMemo(() => {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    return activeTabContent || null;
  }, [activeTab, tabs]);

  const handleTabClick = (newTabId: number) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1;
      setDirection(newDirection);
      setActiveTab(newTabId);
      onChange ? onChange() : null;
    }
  };

  const variants = {
    initial: (direction: number) => ({
      x: 300 * direction,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
    },
    exit: (direction: number) => ({
      x: -300 * direction,
      opacity: 0,
      filter: 'blur(4px)',
    }),
  };

  return (
    <div className=" flex flex-col items-center w-full mt-5">
      <div
        className={cn(
          'flex space-x-1 mb-5 self-start overflow-hidden w-full border border-none rounded-xl cursor-pointer bg-DarkBlue px-[3px] py-[3.2px] shadow-inner-shadow',
          className
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              'relative rounded-none w-full text-center  py-2.5 text-xs sm:text-sm md:text-base font-medium text-white  transition focus-visible:outline-1 focus-visible:ring-1  focus-visible:outline-none flex justify-center gap-1 items-center ',
              activeTab === tab.id
                ? 'text-white'
                : 'hover:text-white/50  text-white'
            )}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white brightness-110 mix-blend-difference shadow-inner-shadow border border-white/10"
                style={rounded ? { borderRadius: 11 } : { borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.19, duration: 0.4 }}
              />
            )}

            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <MotionConfig transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}>
        <motion.div
          className="relative mx-auto w-full h-full overflow-hidden"
          initial={false}
          animate={{ height: bounds.height }}
        >
          <div className="p-1" ref={ref}>
            <AnimatePresence
              custom={direction}
              mode="popLayout"
              onExitComplete={() => setIsAnimating(false)}
            >
              <motion.div
                key={activeTab}
                variants={variants}
                initial="initial"
                animate="active"
                exit="exit"
                custom={direction}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                {content}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </MotionConfig>
    </div>
  );
}
export { DirectionAwareTabs };
