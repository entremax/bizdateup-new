import React from 'react';
import MobileNavbar from "@/components/mobileNavbar";
import Navbar from "@/components/navbar";
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <section>
    <Navbar/>
      {children}
  </section>
);

export default DashboardLayout;
