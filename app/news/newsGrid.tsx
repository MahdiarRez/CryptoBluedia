import React from 'react';
import { NewsCard } from '@/app/components/newsCard';

function NewsGrid() {
  return (
    <div className={'grid grid-cols-4 auto-row-[17rem] gap-2'}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

export default NewsGrid;
