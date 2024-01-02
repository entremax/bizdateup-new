'use client'
import {
  PercentageByCompany,
  TotalInvestmentPercentageByType,
} from '@/types/portfolio'
import { Doughnut } from 'react-chartjs-2'
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { getRandomColor } from '@/lib/randomColor'
import { useEffect, useState } from 'react'

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)
type Props = {
  name: string
  dataset: PercentageByCompany | TotalInvestmentPercentageByType
  title: string
}
export default function DistributionByCompany({ name, dataset, title }: Props) {
  const [colors, setColors] = useState<string[]>([''])
  useEffect(() => {
    setColors(
      Object.keys(dataset).map((_, index) => getRandomColor(index, 'hsl')),
    )
  }, [])
  // const colors=useCallback(()=>Object.keys(dataset).map((_,index)=>getRandomColor(index,'hex')),[dataset])
  const data = {
    labels: Object.keys(dataset),
    datasets: [
      {
        data: Object.values(dataset),
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
        weight: 12,
        cutout: 70,
      },
    ],
  }
  const config = {
    data,
    options: {
      plugins: {
        title: {
          display: false,
          text: 'Valuation',
          align: 'start' as 'center' | 'start' | 'end' | undefined,
          font: {
            size: 24,
            weight: 700,
          },
        },
        legend: {
          display: false,
          position: 'bottom' as any,
          labels: {
            boxWidth: 10,
            borderRadius: 100,
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
      },
      responsive: true,
    },
  }
  return (
    <div
      className={'border_gray flex max-h-fit flex-col gap-4 rounded-xl p-4 '}>
      <div className="flex flex-col items-center justify-center">
        <h5 className="pb-8 text-center text-lg">Distribution {title}</h5>
        <div className="lg:3/4 mx-4 flex w-fit items-center justify-center sm:mx-0 sm:w-3/4 md:w-2/4 ">
          <Doughnut {...config} className={'relative'} />
          <h2 className="absolute text-[6rem] text-[rgba(0,0,0,0.16)]">
            {Object.keys(dataset).length}
          </h2>
        </div>
      </div>
      <div className="flex flex-[33%] flex-wrap items-center  justify-center gap-3 justify-self-start">
        {Object.keys(dataset).map((value, index) => (
          <p
            key={value}
            className={
              'flex flex-grow items-center justify-center gap-2 text-xs font-semibold'
            }>
            <span
              style={{ backgroundColor: colors[index] }}
              className={'inline-block h-3 w-3 rounded-full'}
            />{' '}
            {value}
          </p>
        ))}
      </div>
    </div>
  )
}
