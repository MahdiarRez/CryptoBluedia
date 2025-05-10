import Image, { StaticImageData } from 'next/image';
import youtube from '@/public/communityYoutube.jpg';
import telegram from '@/public/communityTel.jpg';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import GlowText from '../components/ui/glowText';

export function Hero4() {
  return (
    <div className="text-DarkBlue bg-white rounded-2xl flex flex-col items-center justify-center mt-24 py-10 px-4 md:py-16 gap-9">
      <h6 className="text-DarkBlue xs:text-3xl sm:text-4xl text-xl font-bold text-center ">
        Connect With Us
      </h6>
    </div>
  );
}
