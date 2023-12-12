import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div className="flex justify-center w-full h-full">
      <div className="w-305 max-w-full mx-5 lg:mx-16 xl:mx-24 2xl:mx-28 flex justify-between items-center h-full">
        <Hero />
      </div>
    </div>
  );
}
