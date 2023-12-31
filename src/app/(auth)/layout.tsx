import React from 'react'
import Navbar from '@/components/common/navbar'
import ReduxProvider from '@/store/Provider'

const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <main className={'w-full'}>
    <Navbar />
    <ReduxProvider>{children}</ReduxProvider>
  </main>
)

export default DashboardLayout
