import React from 'react';
import Navbar from "@/components/navbar";
import ReduxProvider from "@/store/Provider";
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <main className={'w-full'}>
    <Navbar type={"unauthenticated"}/>
    <ReduxProvider>
        {children}
    </ReduxProvider>
  </main>
);

export default DashboardLayout;
