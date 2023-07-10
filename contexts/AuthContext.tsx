import DecodeJWT from 'jwt-decode';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useCookies } from 'react-cookie';

type AuthContextType = ReturnType<typeof useAuthContextFactory>;
interface DecodedToken {
  sub: string;
  name: string;
  email: string;
  image: string;
  iat: number;
  exp: number;
}

const useAuthContextFactory = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');

  const setUserData = useCallback((data: string) => {
    const decodedToken = DecodeJWT<DecodedToken>(data);
    setUser(decodedToken);
  }, []);

  const login = useCallback((token: string) => {
    setCookie('token', token, { path: '/' });
  }, []);

  const logout = useCallback(() => {
    removeCookie('token', { path: '/' });
    setUser(null);
    setToken('');
  }, []);

  useEffect(() => {
    if (cookies.token) {
      setToken(cookies.token);
      setUserData(cookies.token);
    }
    setLoading(false);
  }, [cookies.token]);

  return {
    user,
    token,
    login,
    logout,
    loading,
  };
};

const initialState: AuthContextType = {
  user: null,
  token: '',
  login: (token: string) => {},
  logout: () => {},
  loading: true,
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const value = useAuthContextFactory();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
