'use client';

import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import Image from 'next/image';
import { navbarItems } from '@/lib/constants';

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon className="w-8 h-8 text-text-dark dark:text-white cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle className="mt-4">
            <div className="flex justify-center w-full mb-3">
              <Image
                alt="Nhan Avatar"
                src="/hero.png"
                width={361}
                height={288}
                className="rounded-full dark:border-none border border-solid border-slate-200 object-cover object-center w-32 h-32 mb-1"
              />
            </div>
            <Link href="/" className="font-semibold text-text-dark dark:text-white text-xl py-4">
              Nhan Nguyen
            </Link>
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex flex-col w-full">
          {navbarItems.map((item, idx) => (
            <Link key={idx} href={item.href} className="p-3 hover:bg-slate-100/70 dark:hover:bg-slate-800 rounded-md">
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
