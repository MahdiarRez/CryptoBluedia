'use client'

import React from 'react';
import {LuMenu} from "react-icons/lu";
import Link from "next/link";

function HamberMenu() {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    function handleToggleMenu() {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <>
           
            <LuMenu
                className='h-10 w-10 text-DarkBlue cursor-pointer hover:bg-WHITE hover:bg-opacity-80 rounded-lg'
                onClick={handleToggleMenu}/>
            {menuIsOpen && <div
                className='bg-white dark:bg-DarkBlue bg-opacity-80 backdrop-blur-sm absolute h-dvh top-20 w-dvw left-0 right-0 px-4 pt-3'>
                <ul className={'bg-DarkBlue rounded-xl font-normal text-white dark:bg-white dark:text-DarkBlue overflow-hidden w-full py-2.5'}>
                    <li className={'flex h-10 items-center justify-start'}>
                        <Link className={'w-full h-full flex justify-start items-center pl-7'}
                              onClick={() => setMenuIsOpen(false)} href={'/'}>Home</Link>
                    </li>
                    <li className={'flex h-10 items-center justify-start'}>
                        <Link className={'w-full h-full flex justify-start items-center pl-7'}
                              onClick={() => setMenuIsOpen(false)} href={'/cryptos'}>Cryptos</Link>
                    </li>
                    <li className={'flex h-10 items-center justify-start'}>
                        <Link className={'w-full h-full flex justify-start items-center pl-7'}
                              onClick={() => setMenuIsOpen(false)} href={'/'}>About
                            us</Link>
                    </li>
                    <li className={'flex h-10 items-center justify-start'}>
                        <Link className={'w-full h-full flex justify-start items-center pl-7'}
                              onClick={() => setMenuIsOpen(false)} href={'/'}>Contact
                            us</Link>
                    </li>
                </ul>
            </div>}
        </>
    );
}

export default HamberMenu;