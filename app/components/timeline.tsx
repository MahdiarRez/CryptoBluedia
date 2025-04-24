import React from 'react';
import { Timeline } from './aceternityUi/timelineAcet';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';
import { TextShimmer } from '@/app/components/motionPrimitive/ui/text-shimmer';
import HeroVideoDialog from '@/app/components/magicUi/hero-video-dialog';
import youtubePic from '../../public/youtubePic.jpeg';
import { RiTelegram2Fill } from 'react-icons/ri';
import { InteractiveHoverButton } from './aceternityUi/btnAcet';

export function TimelineDemo() {
  const data = [
    {
      title: 'Youtube',
      content: (
        <>
          <div className="text-DarkBlue dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-8">
            <p>
              Subscribe to our channel and benefit from the analysis and review
              of various cryptocurrencies.
            </p>
            <Link
              href={'https://www.youtube.com/@CryptoBluedia/videos'}
              className={
                'font-extrabold mt-2.5 group text-base underline flex flex-row text-LightBlue max-w-fit items-center gap-1 md:text-lg'
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
          <div className="flex flex-row items-center max-w-[380px] min-w-[180px] bg-red-300 justify-center rounded-2xl overflow-hidden">
            <HeroVideoDialogDemo />
          </div>
        </>
      ),
    },
    {
      title: 'Explore',
      content: (
        <div className="text-DarkBlue dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-8">
          <p>
            Go to the crypto page and easily search for the currency you want
            and see its information.
          </p>
          <div
            className={
              'flex flex-row flex-nowrap text-nowrap items-center gap-1 xs:gap-2 w-auto justify-start text-base xs:text-lg pt-1 pb-3'
            }
          >
            <span>Digging into the</span>
            <TextShimmer
              duration={1}
              className="text-xl xs:text-3xl font-bold [--base-color:theme(colors.cyan.500)] [--base-gradient-color:theme(colors.purple.400)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
            >
              219
            </TextShimmer>
            <span> Currencies.</span>
          </div>
          <Link
            href={'/currencies'}
            className={
              'font-extrabold no-underline mt-2.5 group text-base flex flex-row max-w-fit items-center gap-1 md:text-lg'
            }
          >
            <InteractiveHoverButton
              className={
                'rounded-lg text-base font-medium bg-DarkBlue text-white'
              }
            >
              Let&#39;s Explore
            </InteractiveHoverButton>
          </Link>
        </div>
      ),
    },
    {
      title: 'News',
      content: (
        <div className="text-DarkBlue dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-8">
          <p>
            Reliable and accurate coverage of market and cryptocurrency related
            news by the Bluedia team
          </p>
          <div
            className={
              'flex flex-row flex-nowrap text-nowrap items-center gap-1 xs:gap-2 w-auto justify-start text-base xs:text-lg pt-1 pb-3'
            }
          >
            <span className="flex flex-row items-center gap-1">
              <BiNews />
              Monitor the latest news daily.
            </span>
          </div>
          <Link
            href={'/news'}
            className={
              'font-extrabold no-underline mt-2.5 group text-base flex flex-row max-w-fit items-center gap-1 md:text-lg'
            }
          >
            <InteractiveHoverButton
              className={
                'rounded-lg text-base font-medium bg-DarkBlue text-white'
              }
            >
              Market News
            </InteractiveHoverButton>
          </Link>
        </div>
      ),
    },
    {
      title: 'Telegram',
      content: (
        <div className="text-DarkBlue dark:text-neutral-200 text-sm sm:text-base md:text-lg font-normal mb-8">
          <p>
            Stay ahead of the curve. Subscribe to our Telegram Channel{' '}
            <span className="font-semibold underline underline-offset-8">
              @Crypto_bluedia
            </span>{' '}
            for the latest news, insights, and updates about Bluedia and the
            cryptocurrency market.
          </p>
          <Link
            href={'https://t.me/crypto_bluedia'}
            className={
              'font-extrabold mt-2.5 group text-base underline flex flex-row text-LightBlue max-w-fit items-center gap-1 md:text-lg'
            }
          >
            <RiTelegram2Fill
              className={
                'group-hover:opacity-70 transition-opacity duration-300'
              }
            />
            <span
              className={
                'group-hover:opacity-70 transition-opacity duration-300'
              }
            >
              Bluedia Telegram Channel
            </span>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}

function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="block"
        animationStyle="from-center"
        videoSrc="/videos/vid1.mov"
        thumbnailSrc={youtubePic}
        thumbnailAlt="Bluedia video"
      />
    </div>
  );
}
