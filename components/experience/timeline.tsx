import Image from 'next/image';
import { MotionFadeIn, MotionZoomIn } from '../motion-component';
import { Aisia, Hcmus } from '@/public/company';
import { cn } from '@/lib/utils';
import { TimelineCard } from './timeline-card';

export const Timeline = () => {
  const data = [
    {
      from: '2021',
      to: 'Present',
      title: 'Bachelor Degree in Data Science',
      company: 'University of Science',
      image: Hcmus,
      heading: 'Data Science',
      content:
        'I am currently pursuing a Bachelor Degree in Data Science at University of Science, Ho Chi Minh City. I am expected to graduate in 2025.',
      tag: 'Education',
      subContent: 'GPA: 3.24/4.0',
    },
    {
      from: '2021',
      to: 'Present',
      title: 'Bachelor Degree in Data Science',
      company: 'University of Science',
      image: Hcmus,
      heading: 'Data Science',
      content:
        'I am currently pursuing a Bachelor Degree in Data Science at University of Science, Ho Chi Minh City. I am expected to graduate in 2022.',
      tag: 'Education',
      subContent: 'GPA: 3.24/4.0',
    },
  ];
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
      {data.map((item, idx) => (
        <TimelineCard key={idx} idx={idx} {...item} />
      ))}
    </div>
  );
};
