import React from 'react';
import MobileNavbar from "@/components/mobileNavbar";
import Navbar from "@/components/navbar";
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <main>
    <Navbar/>
      {children}
    <MobileNavbar/>
  </main>
);

export default DashboardLayout;
