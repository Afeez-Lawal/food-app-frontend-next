import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [deliveryAddress, setDeliveryAddress] = useState('');
  return (
    <div className='flex flex-col justify-center w-full h-full gap-5'>
      <h1 className='text-5xl font-semibold text-center md:text-6xl lg:text-8xl text-secondary'>
        Your food <span className='text-primary'>delivered</span> within
        minutes.
      </h1>
      <div className='flex flex-col justify-center w-full gap-5 sm:flex-row'>
        <input
          type='text'
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          placeholder='Enter your delivery address'
          className='px-4 py-2 text-lg font-semibold border rounded-md bg-light border-tertiary placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
        />
        <button
          type='button'
          className='px-4 py-2 text-lg font-semibold text-white rounded-md bg-primary'
          onClick={() => {
            // TODO: Add set delivery location logic
            router.push(`/restaurants`);
          }}
        >
          Find Restaurants
        </button>
      </div>
    </div>
  );
}
