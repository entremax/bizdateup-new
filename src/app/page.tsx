import React from 'react'
import TopSection from '@/components/home/TopSection'
import WhoAreWe from '@/components/home/WhoAreWe'
import AngelInvestor from '@/components/home/AngelInvestor'
import DidYouKnow from '@/app/_components/DidYouKnow'
import Invests from '@/app/_components/Invests'
import Reviews from '@/app/_components/slider'
import Founders from '@/app/_components/Founders'
import Featured from '@/app/_components/Featured'
import ReadyToJoin from '@/app/_components/RedayToJoin'
import DownloadLinks from '@/components/footer/DownloadLinks'
import Faq from '@/components/faq'
import HowItWorks from '@/components/home/onboarding_steps/HowToInvest'

export default function Home() {
  return (
    <main className="mx-auto mt-20">
      <TopSection />
      <WhoAreWe />
      <AngelInvestor />
      <DidYouKnow />
      <Invests />
      <HowItWorks />
      <Reviews />
      <Founders />
      <Featured />
      <ReadyToJoin />
      <DownloadLinks />
      <div className="flex-col items-center justify-center gap-8 md:my-32 md:px-44">
        <h4 className={'mb-4 text-center text-4xl font-bold lg:mb-8'}>
          Frequently Asked Questions
        </h4>

        <Faq />
      </div>
    </main>
  )
}
