'use client';

import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileMenu } from './mobile-menu';
import { Code2 } from 'lucide-react';
import { navbarItems } from '@/lib/constants';

export const Navbar = () => {
  return (
    <header className="relative flex justify-center w-full">
      <div className="w-305 max-w-full mx-5 lg:mx-16 xl:mx-24 2xl:mx-28 h-15 flex justify-between items-center lg:mt-7.5">
        <Link
          href="/"
          className="font-semibold text-text-dark dark:text-white text-xl lg:text-2xl flex items-center h-full hover:scale-105 transition"
        >
          <Code2 className="text-text-secondary w-8 h-8 mr-2" />
          Nhan Nguyen
        </Link>
        <div className="hidden sm:flex gap-[14px] items-center text-text-dark dark:text-white text-lg lg:text-xl">
          {navbarItems.map((item, idx) => (
            <Link key={idx} className="p-2" href={item.href}>
              {item.name}
            </Link>
          ))}
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
