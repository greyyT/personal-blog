import { Navbar } from '@/components/navbar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = async ({ children }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
