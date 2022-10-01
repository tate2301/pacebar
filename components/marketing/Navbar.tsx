import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function MarketingNavbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  return (
    <div className='fixed top-0 z-50 w-screen bg-white shadow-sm'>
      <div className='container mx-auto px-4 py-3 md:py-3 lg:py-4 lg:px-0'>
        <div className='flex w-full items-center justify-between'>
          <Link href='/'>
            <a className='flex items-center gap-2 text-xl font-bold'>
              <p className='relative h-6 w-6'>
                <Image src='/svg/Pacebar.svg' alt='Logo' layout='fill' />
              </p>
              <p className='font-bold'>Pacebar</p>
            </a>
          </Link>
          <div className='hidden items-center gap-8 font-medium lg:flex'>
            <Link href='/pricing'>
              <a>Pricing</a>
            </Link>
            <Link href='/perks'>
              <a>Perks</a>
            </Link>
            <Link href='/patners'>
              <a>Patners</a>
            </Link>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </div>
          <div className='flex items-center'>
            <div className='hidden items-center gap-4 lg:flex'>
              <p className='font-medium'>Log in</p>
              <button className='rounded-md bg-orange-600 px-4 py-2 font-medium text-white drop-shadow-xl'>
                Get started free
              </button>
            </div>
            <button
              onClick={toggleNav}
              className='flex items-center rounded-md border-gray-200 bg-gray-200'
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
