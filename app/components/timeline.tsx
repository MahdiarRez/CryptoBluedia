import React from 'react';
import { Timeline } from './aceternityUi/timelineAcet';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import pic from '../../public/youtubePic.jpeg';
import { TiArrowForward } from 'react-icons/ti';
import Button from '@/app/components/button';

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
          <div className="flex flex-row items-center max-w-[380px] justify-center rounded-xl overflow-hidden">
            <Link
              href={'https://www.youtube.com/@CryptoBluedia/videos'}
              title={'Bluedia channel'}
              className={'hover:opacity-90 transition-opacity duration-300'}
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
          <div className="flex flex-row items-center max-w-[380px] justify-center rounded-xl overflow-hidden">
            <Link
              href={'https://www.youtube.com/@CryptoBluedia/videos'}
              title={'Bluedia channel'}
              className={'hover:opacity-90 transition-opacity duration-300'}
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
      title: 'Get news',
      content: (
        <div>
          <div className="text-neutral-800 dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-8">
            <p>
              Stay ahead of the curve. Subscribe to our email list for the
              latest news, insights, and updates about Bluedia and the
              cryptocurrency market.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start max-w-[380px] gap-3 justify-center rounded-xl overflow-hidden">
            <input
              className={'w-full px-3 py-2 rounded-xl text-DarkBlue'}
              placeholder={'Your email address'}
            />
            <Button classes={'rounded-xl text-base'}>Subscribe</Button>
          </div>
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
