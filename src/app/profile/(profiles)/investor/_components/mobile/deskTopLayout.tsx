import ProfileHeader from '@/components/profile/profileHeader'
import SectionBar from '@/components/profile/sidebarSection'
import SectionHeader from '@/components/profile/sectionHeader'
import UpdateContextProvider from '@/context/profile/index'
import React from 'react'

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="hidden flex-col gap-4 lg:flex">
      <ProfileHeader />
      <div className="mb-4 grid min-h-[60vh] w-full grid-cols-12 outline-2 lg:outline-gray-300">
        <SectionBar />
        <div className="border_gray col-span-9 overflow-clip rounded-r-3xl">
          <div className="flex-col xl:flex">
            <div className="border_gray flex border-b-2  p-4 ">
              <SectionHeader />
            </div>
            <UpdateContextProvider>{children}</UpdateContextProvider>
          </div>
        </div>
      </div>
    </section>
  )
}
