import { BestCurrenciesAcet } from './aceternityUi/bestCurrenciesAcet';

export function BestCurrencies() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Shiba inu',
      designation: 'Product Manager at TechFlow',
      src: '/shibainu.png',
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: 'Harmony',
      designation: 'CTO at InnovateSphere',
      src: '/harmony.png',
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: 'Uni swap',
      designation: 'Operations Director at CloudScale',
      src: '/uniswap.png',
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: 'Vechain',
      designation: 'Engineering Lead at DataPro',
      src: '/vechain.png',
    },
    {
      quote:
        'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
      name: 'Pancake swap',
      designation: 'VP of Technology at FutureNet',
      src: '/pancakeswap.png',
    },
  ];
  return <BestCurrenciesAcet testimonials={testimonials} />;
}
