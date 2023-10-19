import React from 'react';
import MobileNavbar from "@/components/mobileNavbar";
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <section>
      {children}
    <MobileNavbar/>
  </section>
);

export default DashboardLayout;
