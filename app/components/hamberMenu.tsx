'use client';

import React, { useEffect } from 'react';
import HamberMenuItem from '@/app/components/hamberMenuItem';
import { AnimatePresence, motion } from 'motion/react';

function HamberMenu({ isScrolled }: { isScrolled: boolean }) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100dvh';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [menuIsOpen]);

  return (
    <>
      <HamberButton
        isScrolled={isScrolled}
        isOpen={menuIsOpen}
        setIsOpen={setMenuIsOpen}
      />
      <AnimatePresence initial={false}>
        {menuIsOpen && (
          <motion.div
            initial={{
              opacity: 0,
              filter: 'blur(4px)',
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
            }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuIsOpen(false)}
            className={`bg-white dark:bg-DarkBlue md:hidden z-50 dark:bg-opacity-80 dark:backdrop-blur-sm bg-opacity-80 backdrop-blur-2xl fixed  ${isScrolled ? 'w-auto top-16 h-auto pb-3 rounded-2xl' : 'w-dvh top-20 h-dvh'} left-0 right-0 px-4 pt-3`}
          >
            <motion.ul
              initial={{ opacity: 0, y: '-20px' }}
              animate={{ opacity: 1, y: '0px' }}
              exit={{ opacity: 0, y: '-20px' }}
              transition={{
                type: 'spring',
                stiffness: 100,
                duration: 0.1,
                delay: 0.2,
              }}
              onClick={(e) => e.stopPropagation()}
              className={`bg-DarkBlue  font-normal  text-white dark:bg-white dark:text-DarkBlue overflow-hidden ${isScrolled ? 'w-auto rounded-lg' : 'w-full rounded-xl'} py-2.5`}
            >
              <HamberMenuItem setMenuIsOpen={setMenuIsOpen} href={'/'}>
                Home
              </HamberMenuItem>
              <HamberMenuItem setMenuIsOpen={setMenuIsOpen} href={'/youtube'}>
                Youtube
              </HamberMenuItem>
              <HamberMenuItem setMenuIsOpen={setMenuIsOpen} href={'/news'}>
                News{' '}
              </HamberMenuItem>
              <HamberMenuItem setMenuIsOpen={setMenuIsOpen} href={'/ww'}>
                Contact us
              </HamberMenuItem>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HamberButton({
  isOpen,
  setIsOpen,
  isScrolled,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prevValue: boolean) => boolean)) => void;
  isScrolled: boolean;
}) {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className={`menu md:hidden bg-transparent border-none rounded-lg hover:bg-opacity-60 cursor-pointer flex p-0 focus:outline-none hover:bg-WHITE ${isScrolled && 'hover:bg-transparent'}`}
      onClick={toggleMenu}
      aria-label="Main Menu"
      aria-expanded={isOpen}
      aria-controls="main-navigation"
    >
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path
          className={`line line1 ${
            isOpen ? 'opened' : ''
          } fill-none stroke-DarkBlue ${isScrolled && 'dark:stroke-white'} stroke-[5] transition-all cursor-pointer duration-500 ease-in-out`}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          style={{
            strokeDasharray: isOpen ? '90 207' : '60 207',
            strokeDashoffset: isOpen ? '-134' : '0',
          }}
        />
        <path
          className={`line line2 ${
            isOpen ? 'opened' : ''
          } fill-none stroke-DarkBlue ${isScrolled && 'dark:stroke-white'} stroke-[5] transition-all cursor-pointer duration-500 ease-in-out`}
          d="M 20,50 H 80"
          style={{
            strokeDasharray: isOpen ? '1 60' : '60 60',
            strokeDashoffset: isOpen ? '-30' : '0',
          }}
        />
        <path
          className={`line line3 ${
            isOpen ? 'opened' : ''
          } fill-none stroke-DarkBlue ${isScrolled && 'dark:stroke-white'} stroke-[5] transition-all cursor-pointer duration-500 ease-in-out`}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          style={{
            strokeDasharray: isOpen ? '90 207' : '60 207',
            strokeDashoffset: isOpen ? '-134' : '0',
          }}
        />
      </svg>
    </button>
  );
}

export default HamberMenu;
