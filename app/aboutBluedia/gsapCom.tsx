'use client'; // Only needed if you're using Next.js App Router

import { JSX, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pic from '@/public/ethNews.jpg';
import Image from 'next/image';
import GlowText from '../components/ui/glowText';

gsap.registerPlugin(ScrollTrigger);

export default function HeroNeat(): JSX.Element {
  const heroRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!heroRef.current || !imageRef.current) return;

    const hero = heroRef.current;
    const image = imageRef.current;

    gsap.to(hero, {
      scrollTrigger: {
        trigger: hero,
        scrub: true,
        pin: true,
        start: 'center center',
        end: 'bottom -100%',
        toggleClass: { targets: hero, className: 'active' },
      },
      ease: 'power2',
    });

    gsap.to(image, {
      scrollTrigger: {
        trigger: hero,
        scrub: 0.5,
        start: 'top bottom',
        end: 'bottom -300%',
      },
      ease: 'power2',
      y: '-30%',
    });
  }, []);

  return (
    <div className="lg:block hidden font-medium">
      <section
        ref={heroRef}
        className="hero flex items-center justify-center w-full h-screen relative overflow-hidden"
      >
        <div className="w-screen max-h-screen relative">
          <div className="before:block before:pb-[56.25%] relative"></div>

          <div className="absolute top-0 left-0 w-full h-[160%]">
            <Image
              ref={imageRef}
              src={pic}
              className="w-full h-full object-cover brightness-75"
              alt="Hero"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="hero__headline relative inline-block text-[8vmin] overflow-hidden mt-[-1.5vmin] p-[2.5vmin]">
              <span className="block translate-y-[110%] transition-transform duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] delay-0 text-white">
                Shine Through the Market Noise.
              </span>
              <div className="after:absolute after:bottom-[1.5vmin] after:left-0 after:w-full after:h-[1.5vmin] after:bg-WHITE after:scale-x-0 after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.25,1,0.5,1)]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
