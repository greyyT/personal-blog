interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = async ({ children }) => {
  return <div className="h-full">{children}</div>;
};

export default MainLayout;
