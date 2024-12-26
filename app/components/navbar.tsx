'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BluediaLogo from '../../public/logo.jpeg';
import HamberMenu from '@/app/components/hamberMenu';
import Link from 'next/link';
import NavMenuItem from '@/app/components/navMenuItem';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`text-DarkBlue fixed flex items-center right-1/2 translate-x-1/2 justify-between z-50 transition-all duration-500 ${isScrolled ? 'w-[224px] md:w-[530px] md:gap-1 bg-WHITE bg-opacity-70 backdrop-blur-sm p-1.5 rounded-2xl top-7' : 'w-full h-20 px-5 sm:px-8 lg:px-28 xl:px-40 bg-transparent dark:bg-white backdrop-blur-sm '}`}
    >
      <Link href={'/'}>
        <Image
          src={BluediaLogo}
          alt={'Bluedia logo'}
          placeholder={'blur'}
          className={
            'w-10 h-10 rounded-lg object-cover cursor-pointer md:h-11 md:w-11 z-50'
          }
        />
      </Link>
      <div
        className={`flex flex-row items-center ${!isScrolled ? 'gap-4' : 'gap-1'} h-10`}
      >
        <ul
          className={`hidden md:flex justify-items-stretch flex-row items-center gap-1 text-DarkBlue font-medium text-sm ${isScrolled ? 'bg-DarkBlue rounded-lg text-white min-h-full' : ' '}`}
        >
          <NavMenuItem isScrolled={isScrolled} href={'/'}>
            Home
          </NavMenuItem>
          <NavMenuItem isScrolled={isScrolled} href={'/cryptos'}>
            Cryptos
          </NavMenuItem>
          <NavMenuItem isScrolled={isScrolled} href={'/123'}>
            About us
          </NavMenuItem>
          <NavMenuItem isScrolled={isScrolled} href={'/qwe'}>
            Contact us
          </NavMenuItem>
        </ul>
        <button
          className={`text-white overflow-hidden flex flex-col justify-center items-center font-medium relative bg-DarkBlue rounded-lg px-8 transition-colors duration-300  ${isScrolled ? 'h-10 md:h-11' : 'h-10'} group`}
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
