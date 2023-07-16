import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setVisible(window.scrollY < 200);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  return (
    <nav
      className={`${
        visible ? 'fixed' : 'hidden'
      } top-0 left-0 z-20 w-full border-b border-tertiary`}
    >
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto'>
        <Link
          href='/'
          className='text-2xl font-semibold whitespace-nowrap text-primary'
        >
          FoodApp
        </Link>
      </div>
    </nav>
  );
}
