'use client';

import {
  Navbar as N,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/app/components/aceternityUi/resiableNav';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { InteractiveHoverButton } from '../aceternityUi/btnAcet';
import Link from 'next/link';
import HamberMenuItem from '../hamberMenuItem';
import NavMenuItem from '../navMenuItem';
import { BsSuitDiamondFill } from 'react-icons/bs';
import { PiNewspaperClippingFill } from 'react-icons/pi';
import { FaHome } from 'react-icons/fa';
import { TbDiamondsFilled } from 'react-icons/tb';

export function Navbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <FaHome size={17} />,
    },
    {
      name: 'News',
      link: '/news',
      icon: <PiNewspaperClippingFill size={17} />,
    },
    {
      name: 'About Bluedia',
      link: '/aboutBluedia',
      icon: <TbDiamondsFilled size={17} />,
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex flex-row justify-between items-center z-[999] dark:bg-DarkBlue bg-WHITE h-20 px-4 sm:px-8 lg:px-28 xl:px-40">
        <NavbarLogo />
        <ul className="flex flex-row items-center justify-center gap-4">
          {navItems.map((item) => {
            return (
              <NavMenuItem key={item.link} icon={item.icon} href={item.link}>
                {item.name}
              </NavMenuItem>
            );
          })}
        </ul>
        <Link href={'/currencies'}>
          <InteractiveHoverButton className="bg-DarkBlue text-WHITE text-sm rounded-lg dark:bg-WHITE dark:text-DarkBlue">
            Currencies
          </InteractiveHoverButton>
        </Link>
      </nav>
      {/* Mobile Navigation */}
      {/* <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
      </MobileNav> */}
    </>
  );
}

{
  /* <AnimatePresence initial={false}>
  {isMobileMenuOpen && (
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
      onClick={() => setIsMobileMenuOpen(false)}
      className={`bg-white min-w-full sm:min-w-[80%] dark:bg-DarkBlue md:hidden z-50 dark:bg-opacity-80 dark:backdrop-blur-sm bg-opacity-80 backdrop-blur-2xl fixed top-20 transform -translate-x-1/2 left-1/2 px-4 py-3 rounded-2xl`}
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
        className={`bg-DarkBlue flex flex-col items-start font-normal  text-white dark:bg-white dark:text-DarkBlue overflow-hidden rounded-md`}
      >
        <HamberMenuItem setMenuIsOpen={setIsMobileMenuOpen} href={'/'}>
          Home
        </HamberMenuItem>

        <span className="w-full bg-gradient-to-r via-white/10 from-white/40 to-transparent h-px z-50 block"></span>
        <HamberMenuItem setMenuIsOpen={setIsMobileMenuOpen} href={'/news'}>
          News
        </HamberMenuItem>
        <span className="w-full bg-gradient-to-r via-white/10 from-white/40 to-transparent h-px z-50 block"></span>
        <HamberMenuItem
          setMenuIsOpen={setIsMobileMenuOpen}
          href={'/aboutBluedia'}
        >
          About Bluedia
        </HamberMenuItem>
        <span className="w-full bg-gradient-to-r via-white/10 from-white/40 to-transparent h-px z-50 block"></span>
        <Link href={'/currencies'} className="self-center">
          <button className="px-20 self-center my-3 h-10 rounded-lg hover:bg-LightBlue transition-colors duration-300 bg-white text-DarkBlue font-semibold">
            Currencies
          </button>
        </Link>
      </motion.ul>
    </motion.div>
  )}
</AnimatePresence>; */
}
