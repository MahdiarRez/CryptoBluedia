import React from 'react';
import { Timeline } from './aceternityUi/timelineAcet';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import pic from '../../public/youtubePic.jpeg';
import { TiArrowForward } from 'react-icons/ti';

export function TimelineDemo() {
  const data = [
    {
      title: 'Youtube',
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-8">
            <p>
              Subscribe to our channel and benefit from the analysis and review
              of various cryptocurrencies.
            </p>
            <Link
              href={'https://www.youtube.com/@CryptoBluedia/videos'}
              className={
                'font-extrabold mt-2.5 group text-base underline flex flex-row max-w-fit items-center gap-1 md:text-lg'
              }
            >
              <FaExternalLinkAlt
                className={
                  'group-hover:opacity-70 transition-opacity duration-300'
                }
              />
              <span
                className={
                  'group-hover:opacity-70 transition-opacity duration-300'
                }
              >
                Bluedia youtube
              </span>
            </Link>
          </div>
          <div className="flex flex-row items-center max-w-[380px] justify-center rounded-2xl overflow-hidden">
            <Link
              href={'https://www.youtube.com/@CryptoBluedia/videos'}
              title={'Bluedia channel'}
              className={'hover:scale-110 transition-transform duration-300'}
            >
              <Image
                src={pic}
                alt={'ex'}
                placeholder={'blur'}
                className={'w-full md:h-auto h-52 object-cover object-left'}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Explore',
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-8">
            <p>
              Go to the crypto page and easily search for the currency you want
              and see its information.
            </p>
            <Link
              href={'/cryptos'}
              className={
                'font-extrabold mt-2.5 group text-base underline flex flex-row max-w-fit items-center gap-1 md:text-lg'
              }
            >
              <TiArrowForward
                className={
                  'group-hover:opacity-70 transition-opacity duration-300 font-bold'
                }
              />
              <span
                className={
                  'group-hover:opacity-70 transition-opacity duration-300'
                }
              >
                Crypto page
              </span>
            </Link>
          </div>
          <div className="flex flex-row items-center max-w-[380px] justify-center rounded-2xl overflow-hidden">
            <Link
              href={'https://www.youtube.com/@CryptoBluedia/videos'}
              title={'Bluedia channel'}
              className={'hover:scale-110 transition-transform duration-300'}
            >
              <Image
                src={pic}
                alt={'ex'}
                placeholder={'blur'}
                className={'w-full md:h-auto h-52 object-cover object-left'}
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: 'Mail',
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">hi</div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
