import CompanyIntro from '@/components/dashboard/startup/companyIntro'
import CompanyTarget from '@/components/dashboard/startup/companyTarget'
import Wealth_Manager from '@/components/referral/AskManger'
import InvestTable from '@/components/dashboard/startup/Investments'
import getUserDetails from '@/action/user'
import getStartupInvestmentDetails from '@/components/dashboard/startup/context'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function StartupDashboard() {
  const local_user = cookies().get('local-user')
  if (local_user) {
    return redirect('/startup/onboarding')
  }
  const result = await getStartupInvestmentDetails()

  const { user, status, role } = await getUserDetails()

  if (!user || role !== 'startup') {
    return <>Loading</>
  }

  return (
    <main className={'w-screen'}>
      {/* <StickyCompanyIntro startup={user}/> */}
      <div className="grid grid-cols-12 gap-2 pb-3 pt-12 md:pt-20 xl:ml-2 xl:py-20">
        <div className="col-span-full flex flex-col gap-7 md:col-start-1 md:col-end-12 xl:col-start-1 xl:col-end-12">
          <CompanyIntro startup={user} />
          <CompanyTarget startup={user} />
          <Wealth_Manager />

          <InvestTable investData={result} />
        </div>
        <div
          className={
            'md:col-end col-span-full hidden flex-col gap-4 md:col-start-8 md:flex md:pl-8 xl:col-start-8 xl:col-end-12 xl:px-12'
          }>
          {/* <DownloadFiles startup={user} /> */}
        </div>
      </div>
    </main>
  )
}
