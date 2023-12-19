import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const BlogCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('w-full', className)}>{children}</div>;
};

interface IBlogCover {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const BlogCover = ({ src, alt, width, height, className }: IBlogCover) => {
  return (
    <div className={cn('w-full h-60 relative', className)}>
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-full object-cover" />
    </div>
  );
};

const BlogContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex flex-col gap-3 mt-8', className)}>{children}</div>;
};

const BlogMetadata = ({ children, className }: { children: string; className?: string }) => {
  return <div className={cn('flex text-text-secondary text-sm font-semibold font-sans', className)}>{children}</div>;
};

const BlogTitle = ({ children, className }: { children: string; className?: string }) => {
  return (
    <div className="flex">
      <h1 className={cn('text-2xl font-san-francisco font-semibold text-text-dark leading-8 flex-1', className)}>
        {children}
      </h1>
      <div className="w-10 flex justify-end">
        <ArrowRight className="-rotate-45 h-6 w-6" />
      </div>
    </div>
  );
};

const BlogDescription = ({ children, className }: { children: string; className?: string }) => {
  return <p className={cn('text-[#667085] font-san-francisco leading-6', className)}>{children}</p>;
};

const BlogTags = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn('flex gap-2 mt-6', className)}>{children}</div>;
};

interface IColorVariants {
  variant: 'purple' | 'blue' | 'pastel' | 'green' | 'black' | 'red' | 'crimson' | 'orange';
}

const blogTagVariants = cva('px-[10px] py-[2px] rounded-2xl text-sm font-jakarta font-medium', {
  variants: {
    variant: {
      purple: 'bg-[#F9F5FF] text-text-secondary',
      blue: 'bg-[#EEF4FF] text-[#3538CD]',
      pastel: 'bg-[#F0F9FF] text-[#026AA2]',
      green: 'bg-[#ECFDF3] text-[#027A48]',
      black: 'bg-[#F8F9FC] text-[#363F72]',
      red: 'bg-[#FFF1F3] text-[#C01048]',
      crimson: 'bg-[#FDF2FA] text-[#C11574]',
      orange: 'bg-[#FFF6ED] text-[#C4320A]',
    },
  },
  defaultVariants: {
    variant: 'purple',
  },
});

const BlogTag = ({
  children,
  variant = 'purple',
  className,
}: { children: string; className?: string } & IColorVariants) => {
  return <p className={cn(blogTagVariants({ variant, className }))}>{children}</p>;
};

export { BlogCard, BlogCover, BlogContent, BlogMetadata, BlogTitle, BlogDescription, BlogTags, BlogTag };
