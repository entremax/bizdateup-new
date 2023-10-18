import React from 'react';
import Navbar from "@/components/navbar";
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <section>
    <Navbar type={"authenticated"}/>
    {children}
  </section>
);

export default DashboardLayout;
