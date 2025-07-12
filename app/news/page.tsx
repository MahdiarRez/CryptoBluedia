import { CryptoNewsPage } from './components/cryptoNewsPage';

export const metadata = {
  title: 'News',
  description: 'get latest market news.',
};

export const dynamic = 'force-dynamic'; // ssr

export default async function Page() {
  // const news = await getMarketNews();
  // console.log(news);

  return (
    <div className={'sm:px-8 lg:px-28 xl:px-40 bg-WHITE pt-10 px-4'}>
      <CryptoNewsPage />;
    </div>
  );
}
