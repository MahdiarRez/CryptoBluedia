import React from 'react';
import Image from 'next/image';
import BluediaLogo from '../../public/logo.jpeg';
import Button from '@/app/components/button';
import HamberMenu from '@/app/components/hamberMenu';
import Link from 'next/link';
import NavMenu from '@/app/components/navMenu';

function Navbar() {
  return (
    <div
      className={
        'w-full bg-white text-DarkBlue h-20 fixed flex items-center justify-between px-5 sm:px-8 lg:px-40'
      }
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
      <div className="flex flex-row items-center gap-4 ">
        <NavMenu />
        <Button isForNav={true} classes={'font-medium px-8'}>
          Login
        </Button>
        <HamberMenu />
      </div>
    </div>
  );
}

export default Navbar;
