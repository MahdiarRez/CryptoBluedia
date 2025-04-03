import React from 'react';
import { BentoGrid, BentoGridItem } from '../aceternityUi/gridAcet';
import { FaBitcoin } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';
import { getMarketNews } from '@/app/lib/data';

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
