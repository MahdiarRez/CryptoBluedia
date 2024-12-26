'use client';
import React from 'react';
import { Carousel, Card } from '@/app/components/aceternityUi/carouselAcet';

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-center text-DarkBlue dark:text-white mb-16">
        Most popular currencies of <br className="md:hidden" /> the month
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            hello
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: '#1',
    src: '/shibainu.png',
    title: 'Shibainu',
    content: <DummyContent />,
  },
  {
    category: '#2',
    src: '/harmony.png',
    title: 'Harmony One',
    content: <DummyContent />,
  },
  {
    category: '#1',
    src: '/shibainu.png',
    title: 'Shibainu',
    content: <DummyContent />,
  },
];
