'use client';

import Image, { StaticImageData } from 'next/image';
import { MotionFadeIn, MotionZoomIn } from '../motion-component';

interface TimelineCardProps {
  idx: number;
  from: string;
  to: string;
  title: string;
  company: string;
  image: StaticImageData;
  heading: string;
  content: string;
  subContent?: string;
  tag: string;
}

export const TimelineCard = ({
  idx,
  from,
  to,
  title,
  company,
  image,
  heading,
  content,
  subContent,
  tag,
}: TimelineCardProps) => {
  const isRight = idx % 2 === 0;

  return (
    <div className={`flex ${!isRight && 'flex-row-reverse'} gap-12 w-full z-30 mb-14`}>
      <div className="flex-1">
        <div className={`${isRight && 'float-right'} sticky top-1/2 w-56`}>
          <MotionFadeIn delay={0.2} direction="up" duration={0.75} offset={20} type="spring">
            <div className={`flex gap-2 ${isRight && 'justify-end'} text-text-secondary font-semibold text-lg`}>
              <p>{from}</p>
              <p>-</p>
              <p>{to}</p>
            </div>
            <h3 className={`font-bold text-2xl ${isRight && 'text-right'} mt-3`}>{title}</h3>
            <p className={`font-light text-text-dark ${isRight && 'text-right'} mt-1`}>{company}</p>
          </MotionFadeIn>
        </div>
      </div>
      <div className="w-7 h-7 rounded-full bg-white drop-shadow-md sticky top-1/2 flex items-center justify-center">
        <div className="w-5 h-5 bg-text-secondary rounded-full"></div>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <MotionZoomIn delay={0.25} duration={0.5}>
          <div className="py-6 pl-12 pr-10 bg-white drop-shadow rounded-[16px] relative">
            <p className="absolute top-4 right-4 text-xs text-text-secondary border border-solid border-text-secondary font-mono px-2 rounded-md">
              {tag}
            </p>
            <div className="w-16 h-16 rounded-full bg-white drop-shadow-md">
              <Image src={image.src} alt="aisia" fill className="object-contain p-2" />
            </div>
            <h3 className="font-bold font-jakarta text-xl mt-2">{heading}</h3>
            <p className="mt-4">{content}</p>
          </div>
        </MotionZoomIn>
        {subContent && (
          <MotionZoomIn delay={0.25} duration={0.5}>
            <div className="py-6 pl-12 pr-10 bg-white drop-shadow rounded-[16px]">
              <p>{subContent}</p>
            </div>
          </MotionZoomIn>
        )}
      </div>
    </div>
  );
};
