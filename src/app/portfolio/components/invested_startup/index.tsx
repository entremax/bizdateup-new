import React from 'react'
import { InvestedStartup } from '@/types/portfolio'
import StartupDetails from '@/components/portfolio/invested_startup/startup'

type Props = {
  startups: InvestedStartup[]
}

const InvestedStartups: React.FC<Props> = ({ startups }) => {
  return (
    <div className={'flex flex-col gap-8'}>
      <h4 className={'text-3xl text-primary-dark'}>
        Startups you have invested in
      </h4>
      <div className="flex flex-col gap-3">
        {startups.map((startup, index) => (
          <StartupDetails
            key={startup._id}
            details={startup}
            tabIndex={index}
          />
        ))}
      </div>
    </div>
  )
}
export default InvestedStartups
