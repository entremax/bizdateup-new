import TopSection from '@/components/learn/TopSection'
import AboutStats from '@/components/AboutStats'
import OurValues from '@/components/learn/OurValues'
import Featured from '@/app/_components/Featured'
import OurTeam from '@/components/learn/OurTeam'
import Opportunities from '@/components/learn/Opportunities'
import ReadyToJoin from '@/app/_components/RedayToJoin'

export default function About() {
  return (
    <main className="">
      <TopSection />
      <AboutStats />
      <OurValues />
      <Featured />
      <Opportunities />
      <OurTeam />
      <ReadyToJoin />
    </main>
  )
}
