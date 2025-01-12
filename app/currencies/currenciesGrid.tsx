import { CurrenciesAcet } from '@/app/components/aceternityUi/CurrenciesAcet';

export default function CurrenciesGrid() {
  return (
    <div className="max-w-5xl mx-auto">
      <CurrenciesAcet items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: 'Shibainu',
    description: '71',
    link: 'https://stripe.com',
  },
  {
    title: 'Harmony',
    description: '12',
    link: 'https://netflix.com',
  },
  {
    title: 'Vechain',
    description: '182',
    link: 'https://google.com',
  },
  {
    title: 'Meta',
    description: '102',
    link: 'https://meta.com',
  },
  {
    title: 'Hamster',
    description: '98',
    link: 'https://amazon.com',
  },
  {
    title: 'Uniswap',
    description: '77',
    link: 'https://microsoft.com',
  },
];
