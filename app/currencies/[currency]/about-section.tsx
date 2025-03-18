'use client';

import type { CryptoData } from '@/app/lib/utils/types';
import { motion } from 'motion/react';
import { GlassCard } from '@/app/components/ShadcnUi/glass-card';
import { CardContent } from '@/app/components/ShadcnUi/card';
import youtubePic from '@/public/youtubePic.jpeg';
import HeroVideoDialog from '@/app/components/magicUi/hero-video-dialog';

interface AboutSectionProps {
  data: CryptoData | null;
  colors?: {
    secondary: string;
    primaryWithOpacity: (opacity: number) => string;
    background: string;
    secondaryWithOpacity: (opacity: number) => string;
    primary: string;
  };
}

export default function AboutSection({ data, colors }: AboutSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard>
        <CardContent className="px-0 py-4 gap-y-6 flex justify-center items-center flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold text-DarkBlue text-center">
            About{' '}
            <span style={{ color: colors?.primaryWithOpacity(0.8) }}>
              {data?.name}
            </span>
          </h2>
          <div className="bg-DarkBlue/10 w-full max-w-md h-full rounded-2xl self-center">
            <HeroVideoDialog
              className="block"
              animationStyle="from-center"
              videoSrc="/videos/vid1.mov"
              thumbnailSrc={youtubePic}
              thumbnailAlt="Bluedia video"
            />
          </div>
        </CardContent>
      </GlassCard>
    </motion.div>
  );
}
