import React from 'react';
import { BentoGrid, BentoGridItem } from '../components/aceternityUi/gridAcet';
import { FaBitcoin } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';
import supabase from '@/app/lib/utils/supabaseClient';

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
              <FaBitcoin className="h-5 w-5 text-DarkBlue" />
            ) : (
              <TbWorld className="h-5 w-5 text-DarkBlue" />
            )
          }
          className={i === 3 || i === 9 ? 'lg:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}

async function getMarketNews(): Promise<MarketNewsItem[]> {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 10000);
  // });
  const { data, error } = await supabase.from('marketNews').select('*');

  if (error) {
    console.error('Error fetching market news:', error);
    return [];
  }

  return data as MarketNewsItem[];
}
