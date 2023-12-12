'use client';

import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { Separator } from '../ui/separator';
import Image from 'next/image';

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
                src="/avatar.jpg"
                width={120}
                height={120}
                className="rounded-full dark:border-none border border-solid border-slate-200 object-cover w-32 h-32"
              />
            </div>
            <Link href="/" className="font-semibold text-text-dark dark:text-white text-xl">
              Nhan Nguyen
            </Link>
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex flex-col w-full">
          <Link href="/blog" className="p-3 hover:bg-slate-100/70 dark:hover:bg-slate-800 rounded-md">
            Blog
          </Link>
          <Link href="/projects" className="p-3 hover:bg-slate-100/70 dark:hover:bg-slate-800 rounded-md">
            Projects
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
