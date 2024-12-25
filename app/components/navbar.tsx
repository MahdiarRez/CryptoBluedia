'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import BluediaLogo from '../../public/logo.jpeg';
import Button from '@/app/components/button';
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
      className={`text-DarkBlue fixed flex items-center right-1/2 translate-x-1/2 justify-between z-50 transition-all duration-500 ${isScrolled ? 'w-1/2 bg-WHITE p-1.5 rounded-2xl top-7' : 'w-full h-20 px-5 sm:px-8 lg:px-28 xl:px-40 bg-transparent backdrop-blur-sm rounded-lg'}`}
    >
      <Link href={'/'}>
        <Image
          src={BluediaLogo}
          alt={'Bluedia logo'}
          placeholder={'blur'}
          className={
            'w-10 h-10 rounded-lg object-cover sm:w-11 cursor-pointer sm:h-11'
          }
        />
      </Link>
      <div
        className={`flex flex-row items-center ${!isScrolled ? 'gap-4' : 'gap-1'} h-10`}
      >
        <ul
          className={`hidden md:flex justify-items-stretch flex-row items-center gap-1 text-DarkBlue font-medium text-sm ${isScrolled ? 'bg-DarkBlue rounded-lg text-white min-h-full' : ' '}`}
        >
          <NavMenuItem href={'/'}>Home</NavMenuItem>
          <NavMenuItem href={'/cryptos'}>Cryptos</NavMenuItem>
          <NavMenuItem href={'/123'}>About us</NavMenuItem>
          <NavMenuItem href={'/qwe'}>Contact us</NavMenuItem>
        </ul>
        <Button isForNav={true} classes={'font-medium px-8'}>
          Login
        </Button>
        <HamberMenu />
      </div>
    </div>
  );
}

export default Navbar;
