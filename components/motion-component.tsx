'use client';

import { fadeIn, zoomIn } from '@/lib/motion';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const MotionDiv = motion.div;

interface MotionFadeInProps {
  children: React.ReactNode;
  direction: 'up' | 'down' | 'left' | 'right';
  type: string;
  delay: number;
  duration: number;
  offset: number;
  rootMargin?: string;
}

export const MotionFadeIn = ({
  children,
  direction,
  type,
  delay,
  duration,
  offset,
  rootMargin = '0px',
}: MotionFadeInProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('show');
    }
  }, [inView, mainControls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn({
        direction,
        type,
        delay,
        duration,
        offset,
      })}
      initial="hidden"
      animate={mainControls}
    >
      {children}
    </motion.div>
  );
};

interface MotionZoomInProps {
  children: React.ReactNode;
  delay: number;
  duration: number;
  rootMargin?: string;
}

export const MotionZoomIn = ({ children, delay, duration, rootMargin = '0px' }: MotionZoomInProps) => {
  const [ref, isInView] = useInView({ triggerOnce: true, rootMargin });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('show');
    }
  }, [isInView, mainControls]);

  return (
    <motion.div ref={ref} variants={zoomIn({ delay, duration })} initial="hidden" animate={mainControls}>
      {children}
    </motion.div>
  );
};
