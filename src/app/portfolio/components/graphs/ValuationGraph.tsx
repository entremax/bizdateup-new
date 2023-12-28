'use client'
import { PortfolioData } from '@/types/portfolio'
import { useEffect, useState } from 'react'

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { formatIndianValuation } from '@/lib/utils'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface IGraphData {
  investedCompany: string[]
  expectedValuation: string[]
  investedValuation: number[]
}

const generateTickLabel = (tickValue: string) => {
  let tick = tickValue
  // Check if tickValue is a string and contains more than 3 words
  if (tickValue.split(' ').length > 3) {
    const stringArray = tickValue.split(' ')
    tick = stringArray.map((text) => text.charAt(0)).join('')
  }
  return tick
}

export default function ValuationGraph({
  portfolioData: { investedStartupDetails },
}: {
  portfolioData: PortfolioData
}) {
  const [graph, setGraph] = useState<IGraphData>({
    investedCompany: [],
    expectedValuation: [],
    investedValuation: [],
  })
  useEffect(() => {
    setGraph({
      investedCompany: investedStartupDetails?.map(
        ({ registeredCompanyName }) => registeredCompanyName,
      ),
      expectedValuation: investedStartupDetails?.map(({ portfolio }) =>
        portfolio?.expectedValuation ? portfolio.expectedValuation : '0',
      ),
      investedValuation: investedStartupDetails?.map(
        ({ dealTerms: { valuation } }) => valuation ?? '',
      ),
    })
  }, [investedStartupDetails])

  const data = {
    labels:
      graph.investedCompany.length < 3
        ? [...graph.investedCompany.map(generateTickLabel), '', '', '', '']
        : graph.investedCompany.map(generateTickLabel),
    datasets: [
      {
        label: 'Expected Valuation',
        data: graph.expectedValuation.map((val) => parseFloat(val) || 0),
        backgroundColor: 'rgba(191, 174, 204, 1)', // Set your desired color
        // borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0,
        borderRadius: 100,
      },
      {
        label: 'Invested Valuation',
        data: graph.investedValuation,
        backgroundColor: 'rgba(136, 188, 238, 1)', // Set your desired color
        // borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 0,
        borderRadius: 100,
      },
    ],
  }

  const config = {
    data,
    options: {
      plugins: {
        labels: {
          display: false,
        },
        bar: {
          barPercentage: 0.6, // Adjust this value to set the bar width (60% of the available space in this example)
          categoryPercentage: 0.6, // Adjust this value to set the category width (60% of the available space)
          borderRadius: 100,
        },
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
          labels: {
            boxWidth: 10,
            borderRadius: 100,
            usePointStyle: true,
            pointStyle: 'circle',
          },
        },
      },
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            callback: (tickValue: string | number, index: any, ticks: any) =>
              `₹ ${formatIndianValuation(Number(tickValue), true)}`,
          },
        },
      },
    },
  }

  return (
    <div className={'flex flex-col px-3 pt-0'}>
      <div className="mb-4 flex items-center justify-between border-0 border-b-2 border-solid border-gray-300 py-3 pt-2">
        <h4 className="text-2xl font-semibold">Valuation</h4>
        <div className="flex w-fit items-center gap-4">
          <p className={'flex items-center gap-2 text-xs  font-semibold'}>
            <span
              className={'inline-block h-3 w-3 rounded-full bg-[#BFAECCFF]'}
            />
            Expected
          </p>
          <p className={'flex items-center gap-2 text-xs  font-semibold'}>
            <span
              className={'inline-block h-3 w-3 rounded-full bg-[#BCEEFF]'}
            />
            Invested
          </p>
        </div>
      </div>
      <Bar {...config} />
    </div>
  )
}
