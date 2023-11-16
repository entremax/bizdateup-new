import React from 'react'
import MobileNavbar from '@/components/mobileNavbar'
const DashboardLayout = ({ children }: React.PropsWithChildren) => (
  <main>
    {children}
    <MobileNavbar />
  </main>
)

export default DashboardLayout
