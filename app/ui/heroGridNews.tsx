import React from 'react';
import { BentoGrid, BentoGridItem } from '../components/aceternityUi/gridAcet';
import { FaBitcoin } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';
import supabase from '@/app/lib/utils/supabaseClient';
import { unstable_noStore as noStore } from 'next/cache';

interface MarketNewsItem {
  id: string;
  head: string;
  description: string;
  image: string;
  created_at: string; // Assuming a timestamp
}

export async function HeroGridNews() {
  const data = await getMarketNews();
  console.log(data);
  return (
    <BentoGrid className=" mx-auto">
      {data.map((item, i) => (
        <BentoGridItem
          key={i}
          head={item.head}
          description={item.description}
          header={item.image}
          icon={
            i <= 3 ? (
              <FaBitcoin className="h-4 w-4 text-neutral-500" />
            ) : (
              <TbWorld className="h-4 w-4 text-neutral-500" />
            )
          }
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}

// const Skeleton = () => (
// <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>;
// );

// const items = [
//   {
//     title: 'The Dawn of Innovation',
//     description: 'Explore the birth of groundbreaking ideas and inventions.',
//     header: <Skeleton />,
//     icon: ,
//   },
//   {
//     title: 'The Digital Revolution',
//     description: 'Dive into the transformative power of technology.',
//     header: <Skeleton />,
//     icon: <FaBitcoin className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: 'The Art of Design',
//     description: 'Discover the beauty of thoughtful and functional design.',
//     header: <Skeleton />,
//     icon: <FaBitcoin className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: 'The Power of Communication',
//     description:
//       'Understand the impact of effective communication in our lives.',
//     header: <Skeleton />,
//     icon: <TbWorld className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: 'The Pursuit of Knowledge',
//     description: 'Join the quest for understanding and enlightenment.',
//     header: <Skeleton />,
//     icon: <TbWorld className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: 'The Joy of Creation',
//     description: 'Experience the thrill of bringing ideas to life.',
//     header: <Skeleton />,
//     icon: <TbWorld className="h-4 w-4 text-neutral-500" />,
//   },
//   {
//     title: 'The Spirit of Adventure',
//     description: 'Embark on exciting journeys and thrilling discoveries.',
//     header: <Skeleton />,
//     icon: <TbWorld className="h-4 w-4 text-neutral-500" />,
//   },
// ];

async function getMarketNews(): Promise<MarketNewsItem[]> {
  noStore();
  const { data, error } = await supabase.from('marketNews').select('*');

  if (error) {
    console.error('Error fetching market news:', error);
    return [];
  }

  return data as MarketNewsItem[];
}
