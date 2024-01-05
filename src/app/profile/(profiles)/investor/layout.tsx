import type { Metadata } from 'next'
import SectionBar from '@/components/profile/sidebarSection'
import React from 'react'
import SectionHeader from '@/components/profile/sectionHeader'
import ReduxProvider from '@/store/Provider'
import UpdateContextProvider from '@/components/profile/context'
import DetailsTab from '@/components/profile/detailsTab'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Profile - Investor | Bizdateup',
  description: 'General Profile of Investor',
}
const ProfileHeader = dynamic(
  () => import('@/components/profile/profileHeader'),
)
export default function InvestorProfileLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <ReduxProvider>
      <section className="flex flex-col gap-4 xl:px-32">
        <div className="hidden lg:inline-block">
          <ProfileHeader />
        </div>
        <div className="min-h-[60vh] w-full grid-cols-12 outline-2 outline-gray-300 lg:grid xl:mb-4">
          <SectionBar>
            <ProfileHeader />
          </SectionBar>
          <div className="border_gray col-span-9 grid overflow-clip rounded-r-3xl">
            <div className="hidden flex-col lg:flex">
              <div className="border_gray flex items-center border-b-2 p-4 ">
                <SectionHeader />
              </div>
              <UpdateContextProvider>{children}</UpdateContextProvider>
            </div>
          </div>
          <DetailsTab>
            <UpdateContextProvider>{children}</UpdateContextProvider>
          </DetailsTab>
        </div>
      </section>
    </ReduxProvider>
  )
}
