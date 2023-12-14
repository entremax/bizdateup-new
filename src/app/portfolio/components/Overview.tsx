import React from 'react'
import { cn } from '@/lib/utils'

type IOverview = 'current_value' | 'funded' | 'sectors'
type Props = {
  overview: IOverview
  value: string
  header: string
}

const PortfolioOverview: React.FC<Props> = ({ overview, value, header }) => {
  const config: { [key in IOverview]: { bg: string; circle_color: string } } = {
    current_value: {
      bg: 'bg-[#F5F5FF]',
      circle_color: 'bg-portfolio-overview_circle_1',
    },
    funded: {
      bg: 'bg-portfolio-overview_2',
      circle_color: 'bg-portfolio-overview_circle_2',
    },
    sectors: {
      bg: 'bg-portfolio-overview_3',
      circle_color: 'bg-portfolio-overview_circle_3',
    },
  }
  return (
    <div
      className={cn(
        'cols-span-1 relative overflow-clip rounded-xl p-[1.62rem]',
        config[overview].bg,
      )}>
      <p className="py-3 text-3xl font-bold">{value}</p>
      <p className="font-medium text-zinc-500">{header}</p>
      <div
        className={cn(
          `absolute  right-[-2.5rem] top-[0.5rem]  h-20 w-20 rounded-full`,
          config[overview].circle_color,
        )}></div>
      <div
        className={cn(
          `absolute right-[-1rem] top-[-2rem] h-20 w-20 rounded-full`,
          config[overview].circle_color,
        )}></div>
    </div>
  )
}
export default PortfolioOverview
