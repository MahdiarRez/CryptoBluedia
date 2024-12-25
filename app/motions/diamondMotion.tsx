'use client';

import React from 'react';
import { motion } from 'framer-motion';

function DiamondMotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: -15 }}
      animate={{ y: 15 }}
      transition={{
        duration: 2,
        repeat: Infinity, // Make the animation loop infinitely
        repeatType: 'mirror', // Use mirror to create a smooth up-and-down motion
        ease: 'easeInOut',
      }}
      className={'bg-red-300 w-auto h-auto max-w-fit flex-1'}
    >
      {children}
    </motion.div>
  );
}

export default DiamondMotion;
