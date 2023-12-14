import { getCookieData } from '@/action/user'
import { fetchData } from '@/lib/fetchApi'
import { PortfolioData } from '@/types/portfolio'
import PortfolioOverview from '@/components/portfolio/Overview'
import InvestedStartups from '@/components/portfolio/invested_startup'

export default async function InvestorPortfolio() {
  const { user_id } = await getCookieData()
  const portfolioData = (await fetchData(
    `/investment/portfolio?investor=${user_id}`,
  )) as PortfolioData
  const totalValue = {
    funded_startups: portfolioData.investedStartupDetails.length ?? 0,
    portfolio_value: 0,
    invested_sectors: 2,
  }
  return (
    <section className="portfolio pt-28">
      <div className="flex flex-col px-4 lg:mb-16 lg:px-28">
        <h4 className={'text-3xl text-primary-dark'}> My Portfolio</h4>
        <div className="my-8 grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 md:grid-cols-3">
          <PortfolioOverview
            overview={'current_value'}
            value={`₹ ${totalValue.portfolio_value.toString()}`}
            header={'Current Portfolio Value'}
          />
          <PortfolioOverview
            overview={'funded'}
            value={totalValue.portfolio_value.toString()}
            header={'startups funded'}
          />
          <PortfolioOverview
            overview={'sectors'}
            value={totalValue.portfolio_value.toString()}
            header={'sectors invested'}
          />
        </div>
      </div>
      <div className="flex flex-col px-4 lg:px-28">
        <InvestedStartups startups={portfolioData.investedStartupDetails} />
      </div>
    </section>
  )
}
