import React from 'react';
import Image from 'next/image';
import { FaTelegram, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <div className={'bg-WHITE dark:bg-DarkBlue w-full p-4'}>
      <div
        className={
          'bg-DarkBlue dark:bg-WHITE rounded-3xl text-WHITE dark:text-DarkBlue w-full py-10 px-8 flex flex-col items-center justify-center'
        }
      >
        <div className={'flex flex-col md:flex-row gap-10 w-full'}>
          <div className={'flex flex-col gap-2.5 items-center '}>
            <div className={'flex flex-row items-center justify-center gap-1'}>
              <Image
                src={'/logo.jpeg'}
                alt={'logo'}
                width={50}
                height={50}
                className={'w-10 h-10'}
              />
              <h4 className={'uppercase font-bold text-lg tracking-wide'}>
                Crypto Blue<span className={'text-LightBlue '}>dia</span>
              </h4>
            </div>
            <p className={'font-normal text-sm text-center tracking-wide'}>
              Your Partner in Crypto Investing helping You Make Informed
              Decisions in the Crypto World.
            </p>
          </div>
          <div
            className={'flex flex-row w-full items-start justify-center gap-10'}
          >
            <div
              className={
                'grid grid-rows-4 grid-cols-1 gap-2 font-semibold text-center text-sm'
              }
            >
              <h5
                className={
                  'text-center font-bold text-base opacity-85 text-gray-400 row-span-2'
                }
              >
                Company
              </h5>
              <h6>Currencies</h6>
              <h6>About us</h6>
              <h6>Contact us</h6>
              <h6>Market News</h6>
            </div>
            <div
              className={
                'grid grid-rows-4 grid-cols-1 font-semibold text-center text-sm gap-2'
              }
            >
              <h5
                className={
                  'text-center font-bold text-base opacity-95 text-gray-400 row-span-2'
                }
              >
                Legal
              </h5>
              <h6>Privacy policy</h6>
              <h6>Terms of us</h6>
              <h6>Licencing</h6>
            </div>
          </div>
        </div>
        <div
          className={
            'mt-6 flex flex-col items-center justify-center border-solid border-t-[0.5px] border-opacity-40 pb-0 border-WHITE pt-6 p-5 gap-3.5'
          }
        >
          <p className={'text-sm font-normal opacity-75 text-center'}>
            © Crypto Bluedia | All rights deserved by Bluedia Company
          </p>
          <div className={'flex flex-row gap-3 items-center justify-center '}>
            <FaYoutube
              className={
                'w-7 hover:opacity-100 opacity-75 transition-opacity duration-300 cursor-pointer h-7'
              }
            />
            <AiFillInstagram
              className={
                'w-7 hover:opacity-100 opacity-75 transition-opacity duration-300 cursor-pointer h-7'
              }
            />
            <FaTelegram
              className={
                'w-6 hover:opacity-100 opacity-75 transition-opacity duration-300 cursor-pointer h-6'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
