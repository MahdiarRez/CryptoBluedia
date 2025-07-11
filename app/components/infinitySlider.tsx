import { InfiniteSlider } from '@/app/components/uiKits/infiniteSlider';
import Image from 'next/image';
import shiba from '../../../public/shibainu.png';
import uniswap from '../../../public/uniswap.png';
import vechain from '../../../public/vechain.png';
import pancakeswap from '../../../public/pancakeswap.png';
import harmony from '../../../public/harmony.png';

export function InfinitySlider() {
  return (
    <InfiniteSlider durationOnHover={75} gap={24} reverse={true}>
      <Image
        alt={'currency pic'}
        src={shiba}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={pancakeswap}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={uniswap}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={harmony}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={vechain}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={shiba}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={pancakeswap}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={uniswap}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={harmony}
        className="aspect-square w-24 rounded-2xl"
      />
      <Image
        alt={'currency pic'}
        src={vechain}
        className="aspect-square w-24 rounded-2xl"
      />
    </InfiniteSlider>
  );
}
