'use client';

import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileMenu } from './mobile-menu';

export const Navbar = () => {
  return (
    <header className="relative flex justify-center w-full">
      <div className="w-305 max-w-full mx-5 lg:mx-16 xl:mx-24 2xl:mx-28 h-15 flex justify-between items-center lg:mt-7.5">
        <Link
          href="/"
          className="font-semibold text-text-dark dark:text-white text-xl lg:text-2xl flex items-center h-full"
        >
          Nhan Nguyen
        </Link>
        <div className="hidden sm:flex gap-[14px] items-center text-text-dark dark:text-white text-lg lg:text-xl">
          <Link className="p-2" href="/blog">
            Blog
          </Link>
          <Link className="p-2" href="/projects">
            Projects
          </Link>
          <div className="ml-2">
            <ModeToggle />
          </div>
        </div>
        <div className="flex gap-2 sm:hidden items-center">
          <ModeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
