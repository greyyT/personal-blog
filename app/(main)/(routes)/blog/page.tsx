import { FeaturedBlogs } from '@/components/blog';
import { Separator } from '@/components/ui/separator';
import { Avatar, Place } from '@/public';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <div className="relative flex justify-center w-full">
      <div className="w-305 max-w-full mx-5 lg:mx-16 xl:mx-24 2xl:mx-28 mt-6">
        <div className="w-full relative">
          <Image
            src={Place.src}
            alt="Place"
            height={600}
            width={1216}
            className="w-full h-[600px] object-cover object-bottom relative rounded-2xl"
          />
          <div className="absolute left-16 -bottom-16 w-[598px] h-[304px] bg-white rounded-xl drop-shadow p-10">
            <p className="bg-text-secondary text-white rounded-md font-jakarta w-fit text-sm px-2 py-1">Technology</p>
            <h1 className="mt-4 text-4xl font-jakarta text-text-dark font-semibold">
              The Impact of Technology on the Workplace: How Technology is Changing
            </h1>
            <div className="flex gap-5 mt-6 items-center">
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 relative border border-solid border-slate-400/40 rounded-full">
                  <Image src={Avatar.src} alt="Nhan Nguyen" fill className="w-9 h-9 object-contain rounded-full" />
                </div>
                <p className="font-medium font-sans text-[#97989f]">Nhan Nguyen</p>
              </div>
              <p className="text-[#97989f] font-sans">December 19, 2023</p>
            </div>
          </div>
        </div>
        <Separator className="mt-24 mb-4 py-[1px]" />
      </div>
    </div>
  );
};

export default BlogPage;
