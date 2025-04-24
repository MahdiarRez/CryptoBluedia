'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import BluediaLogo from '../../../public/logo.jpeg';
// import HamberMenu from '@/app/components/hamberMenu';
// import Link from 'next/link';
import NavMenuItem from '@/app/components/navMenuItem';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
// import { HiCurrencyDollar } from 'react-icons/hi2';

// function ScrollUp() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isScrolledFar, setIsScrolledFar] = useState(false);

//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsScrolled(scrollTop > 77);
//       setIsScrolledFar(scrollTop > 395);
//     };
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => ScrollUp(), []);

//   return (
//     <>
//       <div
//         className={`text-DarkBlue fixed flex items-center right-1/2 translate-x-1/2 justify-between z-[2000] transition-all ease-in-out duration-1000 ${isScrolled ? `w-[224px] md:w-[535px] md:gap-1 ${isScrolledFar ? 'bg-gray-400' : 'bg-transparent'}  dark:bg-DarkBlue bg-opacity-70 backdrop-blur-sm p-1.5 rounded-2xl top-3` : 'w-full h-20 px-5 sm:px-8 lg:px-28 xl:px-40 bg-transparent bg-opacity-70 dark:bg-white'}`}
//       >
//         <Link href={'/public'}>
//           <Image
//             src={BluediaLogo}
//             alt={'Bluedia logo'}
//             placeholder={'blur'}
//             width={40}
//             height={40}
//             priority
//             className={`w-10 h-10 rounded-lg object-cover cursor-pointer md:h-11 md:w-11 z-50 ${isScrolled ? 'dark:border dark:border-white' : 'dark:border-none'}`}
//           />
//         </Link>
//         <div
//           className={`flex flex-row items-center ${!isScrolled ? 'gap-4' : 'gap-1'} h-10`}
//         >
//           <ul
//             className={`hidden md:flex justify-items-stretch transition-all  duration-500 flex-row items-center gap-1 text-DarkBlue font-medium text-sm ${isScrolled ? 'bg-DarkBlue rounded-lg text-white min-h-full' : ' '}`}
//           >
//             <NavMenuItem isScrolled={isScrolled} href={'/'}>
//               Home
//             </NavMenuItem>
//             <NavMenuItem isScrolled={isScrolled} href={'/youtube'}>
//               Youtube
//             </NavMenuItem>

//             <NavMenuItem isScrolled={isScrolled} href={'/qwe'}>
//               Contact us
//             </NavMenuItem>
//           </ul>
//           <Link
//             href={'/currencies'}
//             className={`text-white overflow-hidden flex flex-col justify-center items-center text-sm font-medium relative bg-DarkBlue ${isScrolled && 'dark:bg-white dark:text-DarkBlue'} rounded-lg px-4  transition-colors duration-300  ${isScrolled ? 'h-10 md:h-11 md:px-5' : 'h-10 md:px-7'} group/modal-btn `}
//           >
//             <span
//               className={clsx(
//                 `w-1 h-1 absolute left-4 animate-fade bg-opacity-70 animate-duration-500 rounded-full bg-WHITE`,
//                 {
//                   flex: pathname == '/currencies',
//                   hidden: pathname !== '/currencies',
//                 }
//               )}
//             ></span>
//             <span
//               className={clsx(
//                 `w-1 h-1 absolute right-4 animate-fade bg-opacity-70 animate-duration-500 rounded-full bg-WHITE`,
//                 {
//                   flex: pathname == '/currencies',
//                   hidden: pathname !== '/currencies',
//                 }
//               )}
//             ></span>
//             <div className="bg-black dark:bg-white dark:text-black text-white flex justify-center ">
//               <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
//                 Currencies
//               </span>
//               <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
//                 <HiCurrencyDollar className="text-2xl" />
//               </div>
//             </div>
//           </Link>
//           <HamberMenu isScrolled={isScrolled} />
//         </div>
//       </div>
//       {/*<RxDoubleArrowDown*/}
//       {/*  className={`fixed size-12 dark:text-WHITE ${isScrolled ? 'opacity-0' : ' opacity-0 lg:opacity-100'} xl:size-14 xl:bottom-12 xl:left-9 text-DarkBlue bottom-11 transition-all duration-700 left-7 arrow-motion`}*/}
//       {/*/>*/}
//     </>
//   );
// }

// export default Navbar;
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
import Button from '../button';
import { InteractiveHoverButton } from '../aceternityUi/btnAcet';
import Link from 'next/link';

export function Navbar() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'News',
      link: '/news',
    },
    {
      name: 'About Bluedia',
      link: '/contact',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <N>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <Link href={'/currencies'}>
          <InteractiveHoverButton className="bg-DarkBlue text-WHITE text-sm rounded-lg">
            Currencies
          </InteractiveHoverButton>
        </Link>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <Button
              // onClick={() => setIsMobileMenuOpen(false)}
              // variant="primary"
              classes="w-full"
            >
              Login
            </Button>
            <Button
              // onClick={() => setIsMobileMenuOpen(false)}
              // variant="primary"
              classes="w-full"
            >
              Book a call
            </Button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </N>
  );
}
