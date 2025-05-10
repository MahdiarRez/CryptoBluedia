import { FaTelegram } from 'react-icons/fa6';
import Button from '../components/button';
import { BoxReveal } from '../components/magicUi/boxReveal';
import { TextEffect } from '../components/motionPrimitive/ui/text-effect';
import { IoLogoYoutube } from 'react-icons/io5';
import Link from 'next/link';
import { ChartSpline, Globe, Kanban, TrendingUpDown } from 'lucide-react';
import ServiceItem from '../components/serviceItem';
import { FadeUp } from '../components/motions/fade';
export function Hero1() {
  return (
    <div className="min-h-dvh w-full flex flex-col items-center gap-10">
      <div className="flex flex-col items-center justify-center gap-y-7 bg-DarkBlue  text-white dark:bg-white dark:text-DarkBlue rounded-2xl w-full px-9 py-10 xs:px-11 sm:p-12 xs:py-14">
        <TextEffect
          className="sm:text-6xl xs:text-4xl text-2xl font-bold text-center "
          as="h1"
          per="line"
          preset="fade-in-blur"
        >
          About Crypto Bluedia
        </TextEffect>
        <TextEffect
          per="line"
          as="p"
          preset="fade-in-blur"
          className=" font-semibold text-sm xs:text-lg max-w-max xs:max-w-3xl text-center"
          delay={0.5}
        >
          We're a team of cryptocurrency experts, analysts, and enthusiasts
          dedicated to providing valuable insights into the crypto market.
        </TextEffect>
        <div className="flex flex-col xs:flex-row items-center gap-3">
          <Link
            className="w-full"
            href={'https://youtube.com/@cryptobluedia?si=RVjhfsmL6GgvDf81'}
            target="_blank"
          >
            <Button classes="bg-LightBlue flex flex-row w-full items-center gap-2 hover:bg-DarkBlue border border-LightBlue rounded-lg">
              <IoLogoYoutube />
              Youtube
            </Button>
          </Link>
          <Link
            href={'https://t.me/crypto_bluedia'}
            target="_blank"
            className="w-full"
          >
            <Button classes="bg-LightBlue flex flex-row w-full items-center gap-2 hover:bg-DarkBlue border border-LightBlue rounded-lg">
              <FaTelegram />
              Telegram
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-5 bg-WHITE  text-DarkBlue dark:bg-DarkBlue  dark:text-white rounded-2xl w-full mt-24">
        <TextEffect
          className="xs:text-4xl text-2xl font-bold text-center "
          as="h2"
          per="line"
          preset="fade-in-blur"
          delay={0.6}
        >
          What We Do?!
        </TextEffect>
        <TextEffect
          per="line"
          as="p"
          preset="fade-in-blur"
          className=" font-semibold text-sm xs:text-base max-w-96 xs:max-w-3xl text-center"
          delay={0.9}
        >
          At Bluedia, we're passionate about cryptocurrency and blockchain
          technology. Our mission is to make crypto accessible to everyone
          through education, analysis, and community building.
        </TextEffect>
        <FadeUp classes="mt-4 w-full grid grid-col-1 lg:grid-cols-3 gap-4">
          <ServiceItem
            h={'Crypto Analysis'}
            icon={
              <Kanban
                className="bg-gradient-to-tr from-DarkBlue/60 to-LightBlue via-LightBlue text-white p-1.5 rounded-md"
                size={35}
              />
            }
            p={
              'We provide in-depth analysis of cryptocurrencies, helping you make informed investment decisions based on data, not hype.'
            }
          />
          <ServiceItem
            h={'Market Trends'}
            icon={
              <TrendingUpDown
                className="bg-gradient-to-tr from-DarkBlue/60 to-LightBlue via-LightBlue text-white p-1.5 rounded-md"
                size={35}
              />
            }
            p={
              'Market Trends Our team of experts constantly monitors market trends and provides timely insights on emerging opportunities.'
            }
          />
          <ServiceItem
            h={'Global Perspective'}
            icon={
              <Globe
                className="bg-gradient-to-tr from-DarkBlue/60 to-LightBlue via-LightBlue text-white p-1.5 rounded-md"
                size={35}
              />
            }
            p={
              'With team members across the globe, we offer a truly international perspective on the cryptocurrency market'
            }
          />
        </FadeUp>
      </div>
    </div>
  );
}
