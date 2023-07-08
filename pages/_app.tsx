import '@/styles/globals.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import type { AppProps } from 'next/app';

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
