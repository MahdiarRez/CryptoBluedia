'use client';
import React, { ReactNode } from 'react';
import { motion, Variants } from 'motion/react';

const up: Variants = {
  offscreen: {
    y: 50,
    opacity: 0.3,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 70,
    },
  },
};

const left: Variants = {
  offscreen: {
    x: 50,
    opacity: 0.3,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 70,
    },
  },
};

const right: Variants = {
  offscreen: {
    x: -50,
    opacity: 0.3,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: 'spring',
      stiffness: 70,
    },
  },
};

export function FadeUp({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string;
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      className={classes}
      viewport={{ amount: 0.5, once: true }}
      variants={up}
    >
      {children}
    </motion.div>
  );
}

export function FadeLeft({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5, once: true }}
      variants={left}
    >
      {children}
    </motion.div>
  );
}

export function FadeRight({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.5, once: true }}
      variants={right}
    >
      {children}
    </motion.div>
  );
}
