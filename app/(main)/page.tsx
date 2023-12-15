import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-305 max-w-full mx-5 lg:mx-16 xl:mx-24 2xl:mx-28 flex flex-col justify-center h-full z-10">
        <Hero />
        <Experience />
      </div>
    </div>
  );
}
