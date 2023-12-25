import React from 'react'
import TopSection from '@/components/home/TopSection'
import WhoAreWe from '@/components/home/WhoAreWe'
import AngelInvestor from '@/components/home/AngelInvestor'

export default function Home() {
  return (
    <main className="mx-auto">
      <TopSection />
      <WhoAreWe />
      <AngelInvestor />
    </main>
  )
}
