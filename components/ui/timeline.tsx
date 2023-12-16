'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import Image, { StaticImageData } from 'next/image';
import { MotionFadeIn, MotionZoomIn } from '@/components/motion-component';

const Timeline = ({ children }: { children: React.ReactNode }) => {
  const [windowHeight, setWindowHeight] = useState<number | null>(null);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-12 sm:pr-6 md:pr-0 md:gap-0 items-center h-full relative">
      <div
        className={cn(
          'absolute top-8 md:-top-12 -bottom-12',
          '-left-4 -right-4 md:left-10 md:right-10 lg:left-18 lg:right-18 xl:left-28 xl:right-28',
          'bg-slate-200/40 dark:bg-slate-700',
          'md:rounded-[32px]',
        )}
      ></div>
      <div
        className={cn(
          'w-[6px] rounded-b-md',
          'absolute top-24 md:top-14 bottom-10 left-[11px] md:left-1/2 md:-translate-x-1/2',
          'bg-white drop-shadow-xl',
        )}
      />
      <div className="absolute -top-8 md:-top-28 left-[11px] md:left-1/2 md:-translate-x-1/2 w-2 h-16 bg-background z-20"></div>
      <div className="absolute top-8 md:-top-12 left-[11px] md:left-1/2 md:-translate-x-1/2 w-2 h-12 bg-[#f3f6f9] z-30"></div>
      <div className="absolute bottom-14 -top-[50vh] left-[11px] md:left-1/2 md:-translate-x-1/2 w-[6px] rounded-b-md z-10">
        <div className="w-[6px] top-0 sticky gradient-line z-10 h-[50vh]"></div>
      </div>
      <div className="absolute linear-top-white top-18 left-[11px] md:left-1/2 md:-translate-x-1/2 w-[6px] h-8 md:h-14"></div>
      <div className="absolute linear-bottom-white top-[calc(100%-40px)] left-[11px] md:left-1/2 md:-translate-x-1/2 w-[6px] h-10 backdrop-blur-2xl"></div>
      <div className="mt-14"></div>
      {children}
    </div>
  );
};

const TimelineCard = ({ children, idx }: { children: React.ReactNode; idx: number }) => {
  const isRight = idx % 2 === 0;

  return (
    <div
      className={cn(
        'grid timeline-grid md:flex gap-4 gap-y-8 lg:gap-12 w-full z-30 mb-14',
        !isRight ? 'md:flex-row-reverse' : 'timeline-right',
      )}
    >
      {children}
    </div>
  );
};

const TimelineMetadata = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="col-start-2 flex-1">
      <div className="timeline-metadata sticky top-1/2 md:w-64">
        <MotionFadeIn delay={0} direction="up" duration={0.75} offset={20} type="spring" rootMargin="-100px 0px">
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
  return <h3 className="timeline-text font-bold text-xl md:text-2xl mt-2 md:mt-3">{children}</h3>;
};

const TimelineCompany = ({ children }: { children: string }) => {
  return <p className="timeline-text font-light text-text-dark mt-[2px] md:mt-1">{children}</p>;
};

const TimelineCircle = () => {
  return (
    <div className="row-start-1 w-7 h-7 rounded-full bg-white drop-shadow-md sticky top-[50vh] flex items-center justify-center">
      <div className="w-5 h-5 bg-text-secondary rounded-full"></div>
    </div>
  );
};

const TimelineContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="row-start-2 col-start-2 flex-1 flex flex-col gap-8">{children}</div>;
};

const TimelineBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionZoomIn delay={0.15} duration={0.5} rootMargin="-300px 0px">
      <div className="p-4 lg:p-6 xl:pl-12 xl:pr-10 bg-white drop-shadow rounded-[16px] relative">{children}</div>
    </MotionZoomIn>
  );
};

const TimelineTag = ({ children }: { children: string }) => {
  return (
    <p className="absolute top-4 right-4 text-xs leading-5 text-text-secondary border border-solid border-text-secondary font-mono px-2 rounded-md">
      {children}
    </p>
  );
};

const TimelineImage = ({ image, alt }: { image: StaticImageData; alt: string }) => {
  return (
    <div className="relative w-16 h-16 rounded-full bg-white drop-shadow-md">
      <Image src={image.src} alt={alt} fill className="object-contain h-12 w-12 p-2" />
    </div>
  );
};

const TimelineHeading = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <h3 className={cn('font-bold font-jakarta text-xl', className)}>{children}</h3>;
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
