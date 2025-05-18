import Image, { StaticImageData } from 'next/image';
import youtube from '@/public/communityYoutube.jpg';
import telegram from '@/public/communityTel.jpg';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import GlowText from '../components/ui/glowText';

export function Hero3() {
  return (
    // <div className="text-white bg-DarkBlue dark:bg-white rounded-2xl flex flex-col items-center justify-center mt-24 py-10 px-4 md:py-16 gap-9">
    // {/* <h6 className="text-white xs:text-3xl sm:text-4xl text-xl font-bold text-center  dark:text-DarkBlue">
    //   Connect With Us
    // </h6> */}
    <>
      <div className="flex flex-col mt-24 md:flex-row items-center justify-center w-full gap-7 px-10 md:px-0">
        <BluediaCommunity
          img={youtube}
          name={'Youtube'}
          link={'https://www.youtube.com/@CryptoBluedia/videos'}
        />
        <BluediaCommunity
          img={telegram}
          name={'Telegram'}
          link={'https://t.me/crypto_bluedia'}
        />
      </div>
    </>
    // </div>
  );
}

function BluediaCommunity({
  img,
  name,
  link,
}: {
  img: StaticImageData;
  name: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="p-6 text-white w-full relative h-32 rounded-2xl group overflow-hidden"
    >
      <Image
        src={img}
        alt="bluediaCommunity"
        className="w-full absolute top-0 right-0 h-full object-cover object-center z-0 group-hover:scale-125 transition-transform duration-300"
      />
      <div className="w-full h-full top-0 right-0 absolute z-10 bg-black/20 backdrop-blur-[2px] rounded-2xl p-5 flex flex-col items-start justify-start">
        <GlowText className="z-20 relative text-xl text-white font-bold">
          Our {name} Channel
        </GlowText>
        <div
          className={
            'font-extrabold cursor-pointer mt-2.5 group text-sm underline flex flex-row text-LightBlue max-w-fit items-center gap-1 md:text-base'
          }
        >
          <FaExternalLinkAlt
            className={'group-hover:opacity-70 transition-opacity duration-300'}
          />
          <span
            className={'group-hover:opacity-70 transition-opacity duration-300'}
          >
            Bluedia {name}
          </span>
        </div>
      </div>
    </Link>
  );
}
