import React from 'react';

const BentoGrid = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={'flex flex-col items-center gap-16'}>
      <h3
        className={
          'text-3xl leading-8 sm:text-4xl text-center font-bold tracking-tight flex flex-row items-center gap-2'
        }
      >
        Latest Market News
      </h3>
      <div
        className={
          'grid md:auto-rows-[23rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto '
        }
      >
        {children}
      </div>
    </div>
  );
};

const BentoGridItem = ({
  head,
  description,
  header,
  icon,
}: {
  className?: string;
  head: string;
  description?: string | React.ReactNode;
  header: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={
        'row-span-1 cursor-pointer rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4'
      }
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 line-clamp-2">
          {head}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs sm:text-sm dark:text-neutral-300 min-h-10 line-clamp-2">
          {description}
        </div>
      </div>
    </div>
  );
};

export async function BentoGridSkeleton() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          head={item.title}
          description={item.description}
          header={item.header}
          icon={'o'}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <Skeleton />,
  },
  {
    title: 'The Digital Revolution',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
  },
  {
    title: 'The Pursuit of Knowledge',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
  },
  {
    title: 'The Joy of Creation',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
  },
  {
    title: 'The Spirit of Adventure',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton />,
  },
];
