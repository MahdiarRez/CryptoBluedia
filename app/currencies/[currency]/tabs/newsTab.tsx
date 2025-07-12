import { CryptoNewsCard } from '@/app/news/components/cryptoNewsCard';
import { newsItems } from '@/app/news/components/cryptoNewsList';

function NewsTab() {
  const items = newsItems;
  console.log(items);

  //   //   newsItems.forEach((item) => console.log(item));

  return (
    <div className="flex flex-col items-start justify-center">
      {/* <TextGenerate
        preset="fade-in-blur"
        delay={0.35}
        text="Technical Analysis"
        per="line"
        classes="text-2xl my-4 mb-7 border-l-4 border-solid border-DarkBlue pl-2 text-DarkBlue font-medium text-left"
      /> */}
      {/* 
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-9 px-5">
        <Image
          src={pic}
          alt="pic"
          className="w-full h-96 rounded-2xl"
          placeholder="blur"
        />
        <Image
          src={pic}
          alt="pic"
          className="w-full h-96 rounded-2xl"
          placeholder="blur"
        />
      </div> */}
      {/* <TextGenerate
        preset="fade-in-blur"
        delay={0.35}
        text={`Latest News`}
        per="line"
        classes="text-2xl my-4 mb-7 border-l-4 border-solid border-DarkBlue pl-2 text-DarkBlue font-medium text-left"
      /> */}
      <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 ">
        {items.slice(0, 4).map((item) => (
          <CryptoNewsCard newsItem={item} />
        ))}
      </div>
    </div>
  );
}

export default NewsTab;
