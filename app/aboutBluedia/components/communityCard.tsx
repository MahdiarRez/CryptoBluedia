import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import GlowText from '../../components/ui/glowText';
import Image, { StaticImageData } from 'next/image';

export function CommunityCard({
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
      <div className="w-full h-full top-0 right-0 absolute z-10 bg-black/20  rounded-2xl p-5 flex flex-col items-start justify-start">
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
