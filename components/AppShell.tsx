import PageSpinner from '@/components/Spinner/PageSpinner';
import { useAuth } from '@/contexts/AuthContext';

interface Props {
  children: React.ReactNode;
}

const AppShell: React.FC<Props> = ({ children }) => {
  const { loading } = useAuth();

  if (loading) return <PageSpinner />;

  return <>{children}</>;
};

export default AppShell;
