import React from 'react';
import Image from 'next/image';
import BluediaLogo from '../../public/logo.jpeg';
import Button from '@/app/components/button';
import HamberMenu from '@/app/components/hamberMenu';

function Navbar() {
  return (
    <div
      className={
        'w-full bg-white text-DarkBlue h-20 fixed flex items-center justify-between px-5 sm:px-8'
      }
    >
      <Image
        src={BluediaLogo}
        alt={'Bluedia logo'}
        placeholder={'blur'}
        className={'w-10 h-10 rounded-lg object-cover sm:w-11 sm:h-11'}
      />
      <div className="flex flex-row items-center gap-4 md:hidden">
        <Button isForNav={true} classes={'font-medium px-8'}>
          Login
        </Button>
        <HamberMenu />
      </div>
    </div>
  );
}

export default Navbar;
