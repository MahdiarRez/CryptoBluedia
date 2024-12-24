'use client';

import React from 'react';
import NavMenuItem from '@/app/components/navMenuItem';

function NavMenu() {
  return (
    <ul
      className={
        'hidden md:flex flex-row items-center gap-1 text-DarkBlue font-medium text-sm'
      }
    >
      <NavMenuItem href={'/'}>Home</NavMenuItem>
      <NavMenuItem href={'/cryptos'}>Cryptos</NavMenuItem>
      <NavMenuItem href={'/123'}>About us</NavMenuItem>
      <NavMenuItem href={'/qwe'}>Contact us</NavMenuItem>
    </ul>
  );
}

export default NavMenu;
