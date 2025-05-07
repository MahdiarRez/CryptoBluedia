import { FaTelegram } from 'react-icons/fa6';
import Button from '../components/button';
import { BoxReveal } from '../components/magicUi/boxReveal';
import { TextEffect } from '../components/motionPrimitive/ui/text-effect';
import { IoLogoYoutube } from 'react-icons/io5';
import Link from 'next/link';
export function Hero1() {
  return (
    <div className="min-h-dvh w-full flex flex-col items-center ">
      <div className="flex flex-col items-center justify-center gap-y-7 bg-DarkBlue  text-white dark:bg-white dark:text-DarkBlue rounded-2xl w-full p-12 py-14">
        <TextEffect
          className="text-6xl  font-bold text-center "
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
          className=" font-semibold text-lg max-w-3xl text-center"
          delay={0.5}
        >
          We're a team of cryptocurrency experts, analysts, and enthusiasts
          dedicated to providing valuable insights into the crypto market.
        </TextEffect>
        <div className="flex flex-row items-center gap-3">
          <Link
            href={'https://youtube.com/@cryptobluedia?si=RVjhfsmL6GgvDf81'}
            target="_blank"
          >
            <Button classes="bg-LightBlue flex flex-row items-center gap-2 hover:bg-DarkBlue border border-LightBlue rounded-lg">
              <IoLogoYoutube />
              Youtube
            </Button>
          </Link>
          <Link href={'https://t.me/crypto_bluedia'} target="_blank">
            <Button classes="bg-LightBlue flex flex-row items-center gap-2 hover:bg-DarkBlue border border-LightBlue rounded-lg">
              <FaTelegram />
              Telegram
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
