import React from 'react';
import ReduxProvider from "@/store/Provider";
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <main className={'w-full'}>
    <ReduxProvider>
        {children}
    </ReduxProvider>
  </main>
);

export default DashboardLayout;
