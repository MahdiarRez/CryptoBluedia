import { TextEffect } from '../../components/motionPrimitive/ui/text-effect';
import { GlowEffect } from '../../components/motionPrimitive/ui/glow-effect';
import Image, { StaticImageData } from 'next/image';
import mahdiarPic from '@/public/mahdiarPic.png';
import hesamPic from '@/public/hesamPic.png';

export function BluediaTeam() {
  return (
    <div className="text-DarkBlue flex gap-4 flex-col items-center justify-center mt-24">
      <TextEffect
        className="xs:text-3xl sm:text-4xl text-xl font-bold text-center "
        as="h2"
        per="line"
        preset="fade-in-blur"
        delay={1.3}
      >
        Bluedia Team (Head & CEO)
      </TextEffect>
      <div className="flex flex-col xs:flex-row items-end justify-center w-full mt-5 gap-7 max-w-xl border-b border-gray-400 border-solid">
        <Image src={mahdiarPic} alt="mahdiar" />
        <Image src={hesamPic} alt="hesam" />
      </div>
    </div>
  );
}

function TeamCard({
  name,
  position,
  img,
  className,
}: {
  name: string;
  position: string;
  img: StaticImageData;
  className?: string;
}) {
  return (
    <div className="relative  w-full max-w-60 xs:max-w-max">
      <GlowEffect
        colors={['#29c8e153', '#0d121850']}
        mode="colorShift"
        blur="soft"
        className="rounded-2xl"
      />
      <div className="relative  w-full rounded-2xl bg-white text-DarkBlue dark:bg-white dark:text-black gap-y-2 p-5">
        <Image
          src={img}
          alt="pic1"
          className={`${className} aspect-square object-cover rounded-lg`}
          placeholder="blur"
          priority
        />
        <div className="flex flex-col items-start justify-center gap-0 mt-4">
          <span className="text-xl font-bold tracking-normal">{name}</span>
          <span className="text-sm text-nowrap sm:text-base font-medium">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
}
