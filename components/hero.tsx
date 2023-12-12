import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { fadeIn } from '@/lib/motion';
import { MotionDiv } from './motion-div';
import { ArrowDown, Mail } from 'lucide-react';
import Link from 'next/link';
import { socialMedia } from '@/lib/constants';

export const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] lg:h-[calc(100vh-90px)] flex items-center justify-between w-full gap-12">
      <MotionDiv className="flex-1" variants={fadeIn('up', 'spring', 0, 0.75)} initial="hidden" animate="show">
        <div className="h-2 w-40 rounded-md dark:bg-white bg-[#2b2c34] mb-8"></div>
        <h1 className="font-jakarta text-[#2B2C34] dark:text-white font-bold text-[64px] leading-[76px]">
          I’m <span className="text-text-secondary">Nhan</span>, a
        </h1>
        <h1 className="font-jakarta text-[#2B2C34] dark:text-white font-bold text-[64px] leading-[76px]">
          Web Developer
        </h1>
        <p className="mt-5 dark:text-darkgrey text-slate-700 text-xl font-light font-inter">
          I’m an aspiring <span className="font-semibold text-text-secondary">Fullstack Web Developer</span> with a{' '}
          <span className="font-semibold text-text-secondary">strong foundation</span> in web technologies. Eager to
          apply my skills and passion to real-world projects, I aim to{' '}
          <span className="font-semibold text-text-secondary">expand my expertise</span>.
        </p>
        <Separator className="mt-10 mb-8 h-[2px]" />
        <Link className="bg-text-secondary text-white px-8 py-3 text-xl font-semibold rounded-md" href="/contact">
          Contact Me
        </Link>
        <div className="flex mt-8 gap-4">
          {socialMedia.map((item, idx) => {
            const Icon = item.icon;

            return (
              <a
                key={idx}
                className="hover:scale-110 hover:text-text-secondary transition"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-8 h-8" />
              </a>
            );
          })}
        </div>
      </MotionDiv>
      <MotionDiv className="relative" variants={fadeIn('up', 'spring', 0.25, 0.75)} initial="hidden" animate="show">
        <div
          className={cn(
            'absolute',
            'w-[500px] max-w-full rounded-full',
            'before:block before:pb-[100%]',
            'bg-slate-500/50 dark:bg-slate-400/80',
            'top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
            'z-0',
          )}
        />
        <Image
          src="/hero.png"
          width={542}
          height={453}
          alt="hero"
          priority
          className="object-cover object-center z-10 relative"
        />
      </MotionDiv>
    </div>
  );
};
