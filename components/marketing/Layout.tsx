import { ReactNode } from 'react';

import MarketingNavbar from '@/components/marketing/Navbar';

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MarketingNavbar />
      <main className='container mx-auto mt-24'>{children}</main>
    </>
  );
}
