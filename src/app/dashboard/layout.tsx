import React from 'react';
import Navbar from "@/components/navbar";
// import MobileNavbar from "@/components/mobileNavbar";
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <section>
    <Navbar type={"authenticated"}/>
      {children}
    {/*<MobileNavbar/>*/}
  </section>
);

export default DashboardLayout;
