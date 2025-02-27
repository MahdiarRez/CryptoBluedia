import pic from '@/public/youtubePic.jpeg';
import Image from 'next/image';

export function NewsCard() {
  return (
    <div className="relative my-4 aspect-square w-[200px] overflow-hidden rounded-[4px]">
      <Image
        src={pic}
        placeholder={'blur'}
        alt="News"
        className="absolute h-full object-cover inset-0"
      />
      <div className="absolute bottom-0 left-0">
        <div className="flex flex-col items-start gap-0 px-5 py-4">
          <p className="text-base font-medium text-white">Benjamin Spiers</p>
          <span className="mb-2 text-base text-zinc-300">Moonlight 2023</span>
          <p className="text-base text-white">Oil on linen. 40cm by 30cm</p>
        </div>
      </div>
    </div>
  );
}
