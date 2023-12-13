interface motionProps {
  direction: 'left' | 'right' | 'up' | 'down';
  type: string;
  delay: number;
  duration: number;
  offset: number;
}

export const fadeIn = ({ direction, type, delay, duration, offset }: motionProps) => {
  return {
    hidden: {
      x: direction === 'left' ? offset : direction === 'right' ? 0 - offset : 0,
      y: direction === 'up' ? offset : direction === 'down' ? 0 - offset : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};
