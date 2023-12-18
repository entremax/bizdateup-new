import SectionBar from '@/components/profile/sidebarSection'
import SectionHeader from '@/components/profile/sectionHeader'
import UpdateContextProvider from '@/context/profile/index'
import React from 'react'

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4 lg:hidden">
      <div className="mb-4 grid min-h-[60vh] w-full grid-cols-12 outline-2 lg:outline-gray-300">
        <SectionBar />
        <div className="border_gray g: col-span-9 hidden overflow-clip rounded-r-3xl">
          <div className="xlflex flex-col">
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
