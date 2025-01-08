'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BluediaLogo from '../../public/logo.jpeg';
import HamberMenu from '@/app/components/hamberMenu';
import Link from 'next/link';
import NavMenuItem from '@/app/components/navMenuItem';

function ScrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// }function ScrollUp() {
//   const timer = setTimeout(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, 200);
//
//   return () => clearTimeout(timer);
// }

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledFar, setIsScrolledFar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
      setIsScrolledFar(scrollTop > 395);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => ScrollUp(), []);

  return (
    <div
      className={`text-DarkBlue fixed flex items-center right-1/2 translate-x-1/2 justify-between z-[2000] transition-all duration-500 ${isScrolled ? `w-[224px] md:w-[535px] md:gap-1 ${isScrolledFar ? 'bg-gray-400' : 'bg-WHITE'}  dark:bg-DarkBlue bg-opacity-70 backdrop-blur-sm p-1.5 rounded-2xl top-7` : 'w-full h-20 px-5 sm:px-8 lg:px-28 xl:px-40 bg-transparent dark:bg-white backdrop-blur-sm '}`}
    >
      <Link href={'/'}>
        <Image
          src={BluediaLogo}
          alt={'Bluedia logo'}
          placeholder={'blur'}
          className={`w-10 h-10 rounded-lg object-cover cursor-pointer md:h-11 md:w-11 z-50 ${isScrolled ? 'dark:border dark:border-white' : 'dark:border-none'}`}
        />
      </Link>
      <div
        className={`flex flex-row items-center ${!isScrolled ? 'gap-4' : 'gap-1'} h-10`}
      >
        <ul
          className={`hidden md:flex justify-items-stretch transition-all  duration-500 flex-row items-center gap-1 text-DarkBlue font-medium text-sm ${isScrolled ? 'bg-DarkBlue rounded-lg text-white min-h-full' : ' '}`}
        >
          <NavMenuItem isScrolled={isScrolled} href={'/'}>
            Home
          </NavMenuItem>
          <NavMenuItem isScrolled={isScrolled} href={'/currencies'}>
            Currencies
          </NavMenuItem>
          <NavMenuItem isScrolled={isScrolled} href={'/news'}>
            News
          </NavMenuItem>
          <NavMenuItem isScrolled={isScrolled} href={'/qwe'}>
            Contact us
          </NavMenuItem>
        </ul>
        <button
          className={`text-white overflow-hidden flex flex-col justify-center items-center font-medium relative bg-DarkBlue ${isScrolled && 'dark:bg-white dark:text-DarkBlue'} rounded-lg px-8 transition-colors duration-300  ${isScrolled ? 'h-10 md:h-11' : 'h-10'} group`}
        >
          <span
            className={`group-hover:translate-y-10 transition-transform duration-300`}
          >
            Login
          </span>
          <span
            className={`${isScrolled ? 'bottom-12 group-hover:bottom-2.5' : 'bottom-10 group-hover:bottom-2'} transition-all duration-300 absolute`}
          >
            Login
          </span>
        </button>
        <HamberMenu isScrolled={isScrolled} />
      </div>
    </div>
  );
}

export default Navbar;
