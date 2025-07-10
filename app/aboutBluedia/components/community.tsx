import youtube from '@/public/communityYoutube.jpg';
import telegram from '@/public/communityTel.jpg';
import { CommunityCard } from './communityCard';

export function Community() {
  return (
    <div className="flex flex-col mt-24 md:flex-row items-center justify-center w-full gap-7 px-10 md:px-0">
      <CommunityCard
        img={youtube}
        name={'Youtube'}
        link={'https://www.youtube.com/@CryptoBluedia/videos'}
      />
      <CommunityCard
        img={telegram}
        name={'Telegram'}
        link={'https://t.me/crypto_bluedia'}
      />
    </div>
  );
}
