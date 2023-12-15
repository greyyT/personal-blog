'use client';

import { MotionFadeIn } from '@/components/motion-component';
import React from 'react';
import { Timeline } from './timeline';

export const Experience = () => {
  return (
    <>
      <MotionFadeIn delay={0.2} direction="up" duration={0.75} offset={20} type="spring">
        <p className="text-xl uppercase font-bold mb-2">
          <span className="text-text-secondary text-2xl mr-2">/</span> What I have done so far
        </p>
        <h1 className="font-bold text-[52px] leading-[64px] font-jakarta">Work Experience.</h1>
      </MotionFadeIn>
      <div className="pt-28"></div>
      <Timeline />
      <div className="h-screen"></div>
    </>
  );
};
