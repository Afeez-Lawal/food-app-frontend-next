import { axiosInstance } from '@/axiosService';
import { useAuth } from '@/contexts/AuthContext';
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';

export default function Login() {
  const { login } = useAuth();

  const googleCallback = async (credentialResponse: CredentialResponse) => {
    const { data } = await axiosInstance.post('/auth/callback/google', {
      token: credentialResponse.credential,
    });

    login(data.token);
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <GoogleLogin
        useOneTap={true}
        onSuccess={googleCallback}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}
