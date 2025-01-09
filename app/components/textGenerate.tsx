import {
  PresetType,
  TextEffect,
} from '@/app/components/motionPrimitive/ui/text-effect';
import React from 'react';

export function TextGenerate({
  text,
  classes,
  delay,
  preset = 'fade-in-blur',
  element,
}: {
  text: string;
  classes?: string;
  delay?: number;
  preset?: PresetType;
  element?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <TextEffect
      preset={preset}
      speedReveal={1.3}
      speedSegment={0.4}
      className={classes}
      as={element}
      delay={delay}
    >
      {text}
    </TextEffect>
  );
}
