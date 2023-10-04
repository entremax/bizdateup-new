import React from 'react';
import Navbar from '@/components/navbar'

const RootLayout = ({children}: React.PropsWithChildren) => (
  <>
    <Navbar/>
    <main className={""}>
      {children}
    </main>
  </>
);

export default RootLayout;