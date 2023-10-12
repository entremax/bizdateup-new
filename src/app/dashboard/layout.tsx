import React from 'react';
import { Inter } from 'next/font/google';
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ['latin'] });

const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <html lang='en'>
  <body className={inter.className}>
    <Navbar type={"dashboard"}/>
    {children}
  </body>
  </html>
);

export default DashboardLayout;
