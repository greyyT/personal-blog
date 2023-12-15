'use client';

import React from 'react';

import { cn } from '@/lib/utils';

import Image, { StaticImageData } from 'next/image';
import { MotionFadeIn, MotionZoomIn } from '@/components/motion-component';

const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center h-full relative">
      <div className="absolute -top-12 -bottom-12 left-28 right-28 bg-slate-200/40 dark:bg-slate-700 rounded-[32px]"></div>
      <div
        className={cn(
          'w-[6px] rounded-b-md',
          'absolute top-10 bottom-10 left-1/2 -translate-x-1/2',
          'bg-white drop-shadow-xl',
          'z-20',
        )}
      ></div>
      <div className="absolute linear-top-white top-0 left-1/2 -translate-x-1/2 w-[6px] h-10 backdrop-blur-2xl z-20"></div>
      <div className="absolute linear-bottom-white top-[calc(100%-40px)] left-1/2 -translate-x-1/2 w-[6px] h-10 backdrop-blur-2xl z-20"></div>
      <div className="mt-14"></div>
      {children}
    </div>
  );
};

const TimelineCard = ({ children, idx }: { children: React.ReactNode; idx: number }) => {
  const isRight = idx % 2 === 0;

  return (
    <div className={cn('flex gap-12 w-full z-30 mb-14', !isRight ? 'flex-row-reverse' : 'timeline-right')}>
      {children}
    </div>
  );
};

const TimelineMetadata = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1">
      <div className="timeline-metadata sticky top-1/2 w-64">
        <MotionFadeIn delay={0} direction="up" duration={0.75} offset={20} type="spring" rootMargin="-200px">
          {children}
        </MotionFadeIn>
      </div>
    </div>
  );
};

const TimelineDate = ({ from, to }: { from: string; to: string }) => {
  return (
    <div className="timeline-date flex gap-2 text-text-secondary font-semibold text-lg">
      <p>{from}</p>
      <p>-</p>
      <p>{to}</p>
    </div>
  );
};

const TimelineTitle = ({ children }: { children: string }) => {
  return <h3 className="timeline-text font-bold text-2xl mt-3">{children}</h3>;
};

const TimelineCompany = ({ children }: { children: string }) => {
  return <p className="timeline-text font-light text-text-dark mt-1">{children}</p>;
};

const TimelineCircle = () => {
  return (
    <div className="w-7 h-7 rounded-full bg-white drop-shadow-md sticky top-1/2 flex items-center justify-center">
      <div className="w-5 h-5 bg-text-secondary rounded-full"></div>
    </div>
  );
};

const TimelineContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1 flex flex-col gap-8">{children}</div>;
};

const TimelineBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionZoomIn delay={0} duration={0.5} rootMargin="-300px">
      <div className="py-6 pl-12 pr-10 bg-white drop-shadow rounded-[16px] relative">{children}</div>
    </MotionZoomIn>
  );
};

const TimelineTag = ({ children }: { children: string }) => {
  return (
    <p className="absolute top-4 right-4 text-xs text-text-secondary border border-solid border-text-secondary font-mono px-2 rounded-md">
      {children}
    </p>
  );
};

const TimelineImage = ({ image, alt }: { image: StaticImageData; alt: string }) => {
  return (
    <div className="w-16 h-16 rounded-full bg-white drop-shadow-md">
      <Image src={image.src} alt={alt} fill className="object-contain p-2" />
    </div>
  );
};

const TimelineHeading = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="font-bold font-jakarta text-xl mt-2">{children}</h3>;
};

export {
  Timeline,
  TimelineCard,
  TimelineMetadata,
  TimelineDate,
  TimelineTitle,
  TimelineCompany,
  TimelineCircle,
  TimelineContent,
  TimelineBox,
  TimelineTag,
  TimelineImage,
  TimelineHeading,
};
