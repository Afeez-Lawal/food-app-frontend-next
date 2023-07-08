import { axiosInstance } from '@/axiosService';
import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';

export default function () {
  const googleCallback = async (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
    const { data } = await axiosInstance.post('/auth/callback/google', {
      token: credentialResponse.credential,
    });

    console.log(data);
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
