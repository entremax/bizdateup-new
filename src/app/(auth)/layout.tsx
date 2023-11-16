import React from 'react'
import ReduxProvider from '@/store/Provider'
import Navbar from '@/components/navbar'
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <main className={'w-full'}>
    <Navbar />
    <ReduxProvider>{children}</ReduxProvider>
  </main>
)

export default DashboardLayout
