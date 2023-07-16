import PageSpinner from '@/components/Spinner/PageSpinner';
import { useAuth } from '@/contexts/AuthContext';
import { Inter } from 'next/font/google';
import NavBar from './NavBar';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
}

const AppShell: React.FC<Props> = ({ children }) => {
  const { loading } = useAuth();

  if (loading) return <PageSpinner />;

  return (
    <>
      <NavBar />
      <main
        className={`bg-white px-4 w-screen h-screen overflow-y-auto pt-16 ${inter.className}`}
      >
        {children}
      </main>
    </>
  );
};

export default AppShell;
