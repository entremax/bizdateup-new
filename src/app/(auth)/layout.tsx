import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from "@/components/navbar";
import ReduxProvider from "@/store/Provider";
const inter = Inter({ subsets: ['latin'] });

const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <section>
    <Navbar type={"normal"}/>
    <ReduxProvider>
        {children}
    </ReduxProvider>
  </section>
);

export default DashboardLayout;
