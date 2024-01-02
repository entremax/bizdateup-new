import { fetchData } from '@/lib/fetchApi'
import { PortfolioData } from '@/types/portfolio'
import PortfolioOverview from '@/components/portfolio/Overview'
import InvestedStartups from '@/components/portfolio/invested_startup'
import { formatIndianValuation } from '@/lib/utils'
import React from 'react'
import NoData from '@/components/portfolio/NoData'
import ValuationGraph from '@/components/portfolio/graphs/ValuationGraph'
import DistributionByCompany from '@/components/portfolio/graphs/ByCompany'
import UpdatesWrapper from '@/app/startup/updates/components/UpdatesWrapper'
import { cookies } from 'next/headers'

export default async function InvestorPortfolio() {
  const user_id = cookies().get('user_id')?.value ?? ''
  const portfolioData = (await fetchData(
    `/investment/portfolio?investor=${user_id}`,
  )) as PortfolioData

  const totalValue = {
    funded_startups: portfolioData?.investedStartupDetails?.length ?? 0,
    portfolio_value: portfolioData?.totalInvestment[0]?.totalamount ?? 0,
    invested_sectors: 2,
  }
  const doughnutGraphData = [
    {
      name: 'by_company',
      dataset: portfolioData.percentageByCompany,
      title: 'by company',
    },
    {
      name: 'by_share_type',
      dataset: portfolioData.totalInvestmentPercentageByType,
      title: 'by share type',
    },
    {
      name: 'by_sector',
      //@ts-ignore
      dataset: portfolioData.percentageBySector,
      title: 'by sector',
    },
  ]

  return (
    <section className="portfolio pt-20 lg:pt-28">
      {portfolioData?.investedStartupDetails.length !== 0 ? (
        <>
          <div className="flex flex-col px-4 lg:mb-16 lg:px-28">
            <h4 className={'text-3xl text-primary-dark'}> My Portfolio</h4>
            <div className="my-8 grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 md:grid-cols-3">
              <PortfolioOverview
                overview={'current_value'}
                value={`₹ ${formatIndianValuation(totalValue.portfolio_value)}`}
                header={'Current Portfolio Value'}
              />
              <PortfolioOverview
                overview={'funded'}
                value={totalValue.funded_startups.toString()}
                header={'startups funded'}
              />
              <PortfolioOverview
                overview={'sectors'}
                value={totalValue.invested_sectors.toString()}
                header={'sectors invested'}
              />
            </div>
          </div>
          <div className="flex flex-col px-4 lg:px-28">
            <InvestedStartups startups={portfolioData.investedStartupDetails} />
          </div>
          <div className="my-28 flex flex-col px-4 lg:px-28">
            <h4 className={'text-3xl text-primary-dark'}>
              Investment value distribution
            </h4>
          </div>
          <div className="my-28 grid gap-4 px-4 md:grid-cols-2 lg:px-28">
            <div className="border_gray rounded-xl p-4">
              <ValuationGraph portfolioData={portfolioData} />
            </div>
            <div className="border_gray rounded-xl p-4">
              <UpdatesWrapper />
            </div>
          </div>
          <div className="my-28 grid grid-cols-1 items-start justify-center gap-4 px-4 sm:grid-cols-2 lg:px-28 xl:grid-cols-3">
            {doughnutGraphData.map(
              (data) =>
                data.dataset && (
                  <DistributionByCompany key={data.name} {...data} />
                ),
            )}
          </div>
        </>
      ) : (
        <NoData />
      )}
    </section>
  )
}
