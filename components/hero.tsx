import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { fadeIn } from '@/lib/motion';
import { MotionDiv } from '@/components/motion-component';
import Link from 'next/link';
import { socialMedia } from '@/lib/constants';

export const Hero = () => {
  return (
    <div
      className={cn(
        'md:h-[calc(100vh-60px)] lg:h-[calc(100vh-90px)]',
        'flex flex-col sm:flex-col-reverse md:grid grid-hero',
        'items-center gap-14 xs:gap-20 md:gap-8',
        'w-full',
        'pt-12 xs:pt-16 md:p-0',
        'bg-background z-20',
        'pb-20 md:pb-0',
        'z-30',
      )}
    >
      <MotionDiv
        className="flex-1 flex flex-col md:justify-center h-full"
        variants={fadeIn({
          direction: 'up',
          type: 'spring',
          delay: 0,
          duration: 0.75,
          offset: 100,
        })}
        initial="hidden"
        animate="show"
      >
        <div className="h-[6px] md:h-2 w-40 rounded-md dark:bg-white bg-[#2b2c34] mb-6 xs:mb-8 md:mb-12" />
        <h1
          className={cn(
            'font-jakarta font-bold',
            'text-[#2B2C34] dark:text-white',
            'text-4xl xs:text-[40px] md:text-[52px] xl:text-[64px]',
            'md:leading-[64px] xl:leading-[76px]',
          )}
        >
          I’m <span className="text-text-secondary">Nhan</span>, a Fullstack Web Developer
        </h1>
        <p
          className={cn(
            'font-light font-inter',
            'mt-[10px] md:mt-4 lg:mt-5',
            'dark:text-slate-300 text-slate-700',
            'text-base md:text-lg lgxl:text-xl',
            'md:leading-7 lgxl:leading-8',
          )}
        >
          I’m an aspiring <span className="font-semibold text-text-secondary">Fullstack Web Developer</span> with a{' '}
          <span className="font-semibold text-text-secondary">strong foundation</span> in web technologies. Eager to
          apply my skills and passion to real-world projects, I aim to{' '}
          <span className="font-semibold text-text-secondary">expand my expertise</span>.
        </p>
        <Separator className="mt-10 md:mt-[52px] mb-5 h-[2px]" />
        <div className="flex items-center gap-4 xs:gap-6">
          <Link
            className="bg-text-secondary text-white px-6 py-2 xs:px-8 xs:py-3 text-lg xs:text-xl font-semibold rounded-md"
            href="/contact"
          >
            Contact Me
          </Link>
          <div className="flex gap-4">
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
                  <Icon className="w-7 xs:w-8 h-7 xs:h-8" />
                </a>
              );
            })}
          </div>
        </div>
      </MotionDiv>
      <MotionDiv
        className="relative"
        variants={fadeIn({
          direction: 'up',
          type: 'spring',
          delay: 0.25,
          duration: 0.75,
          offset: 100,
        })}
        initial="hidden"
        animate="show"
      >
        <div
          className={cn(
            'absolute',
            'w-[calc(100%-20px)] rounded-full',
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
          className="object-cover object-center z-10 relative w-full"
        />
      </MotionDiv>
    </div>
  );
};
