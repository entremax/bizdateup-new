import React from 'react';
import Navbar from "@/components/navbar";
import ReduxProvider from "@/store/Provider";
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <section>
    <Navbar type={"unauthenticated"}/>
    <ReduxProvider>
        {children}
    </ReduxProvider>
  </section>
);

export default DashboardLayout;
