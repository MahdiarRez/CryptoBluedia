import React from 'react';
import ServiceItem from '@/app/components/serviceItem';
import { SiVictoriametrics } from 'react-icons/si';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';
import { FaUserSecret } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';

function HeroServices() {
  return (
    <div
      className={
        'h-auto mt-20 lg:mt-0 w-full flex flex-col justify-center items-center pb-20'
      }
    >
      <h3
        className={
          'text-3xl leading-8 sm:text-4xl text-center font-bold tracking-tight flex flex-row items-center'
        }
      >
        <BsPeopleFill className={'mr-2'} />
        What are we doing <br className={'md:hidden'} /> here in Blue
        <span className={'text-LightBlue'}>dia</span>?
      </h3>
      <p className={'text-center font-normal text-base mt-4 md:text-lg'}>
        Empower your crypto journey with us. We provide detailed reviews and
        ratings of crypto currencies. <br /> Our goal is to equip you with the
        knowledge you need to invest wisely.
      </p>
      <ServicesList />
    </div>
  );
}

function ServicesList() {
  return (
    <div
      className={
        'mt-16 flex flex-col max-w-[705px] lg2:max-w-[1991px] lg2:min-w-full lg2:flex-row items-center justify-center gap-6 '
      }
    >
      <ServiceItem
        h={'Proprietary Metrics'}
        icon={<SiVictoriametrics className={'w-10 h-10 text-gray-400'} />}
        p={
          'Unique indicators developed by your team that are not widely available. ' +
          'These could include measures of development activity.'
        }
      />
      <ServiceItem
        h={'Risk Assessment'}
        icon={<FaUserSecret className={'w-10 h-10 text-gray-400'} />}
        p={
          'Identifying potential risks, such as regulatory concerns, security vulnerabilities, and market factors.'
        }
      />
      <ServiceItem
        h={'Technical Analysis'}
        icon={<FaMagnifyingGlassChart className={'w-10 h-10 text-gray-400'} />}
        p={
          'Benchmarking against competitors, highlighting strengths and weaknesses.' +
          "In-depth assessment of the project's team."
        }
      />
    </div>
  );
}

export default HeroServices;
