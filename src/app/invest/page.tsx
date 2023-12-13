'use client'
import Link from 'next/link'
import { apiUri, cn } from '@/lib/utils'
import StartupFilters from '@/components/invest/StartupsFilter'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { StartupParameters, StartupTypes } from '@/types/startup'
import { startupApis } from '@/lib/startup'
import { setStartups } from '@/reducers/user/startupSlice'
import { StartupData } from '@/types/invest'
import StartupResults from '@/components/invest/StartupsResult'
import RecommendedStartups from '@/components/invest/Recommanded'
import ClosedDeals from '@/components/invest/ClosedDeals'

export default function Invest() {
  const searchParams = useSearchParams()
  const startupType = searchParams?.get('type')
  const { token } = useAppSelector(({ authUser }) => authUser)

  const dispatch = useAppDispatch()
  const queryType = [
    {
      name: null,
      label: 'All',
    },
    {
      name: 'ccds',
      label: 'CCDS',
    },
    {
      name: 'ccps',
      label: 'CCPS',
    },
    {
      name: 'equity',
      label: 'Equity',
    },
    {
      name: 'category',
      label: 'Category',
    },
    {
      name: 'closed',
      label: 'Closed Category',
    },
    {
      name: 'coming-soon',
      label: 'Coming Soon',
    },
  ]
  const fetchSearch = async (queries: StartupParameters[]) => {
    const promises = queries.map((query) =>
      fetch(apiUri().v0 + startupApis.fetchByType + query, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then(({ data }) => data?.data ?? []),
    )

    const res = await Promise.all(promises).catch((e) => console.log(e))
    console.log(res)
    dispatch(
      setStartups({
        startup: (res && (res[0] as StartupData[])) ?? [],
        ccps: (res && (res[1] as StartupData[])) ?? [],
        ccds: (res && (res[2] as StartupData[])) ?? [],
        equity: (res && (res[3] as StartupData[])) ?? [],
      }),
    )
  }
  React.useEffect(() => {
    fetchSearch(['startup', 'CCPS', 'CCDS', 'equity'])
  }, [startupType, token])
  return (
    <main className={'py-24  lg:pb-0'}>
      <div className="flex flex-col gap-4 px-4 lg:px-28">
        <h3 className={'text-3xl font-semibold text-primary-dark'}>
          Discover Promising Startups
        </h3>
        <div
          className={
            'md:items-left flex flex-wrap items-center justify-center gap-4 md:justify-start'
          }>
          {queryType.map(({ name, label }) => (
            <Link
              key={name}
              href={'/invest' + (!name ? '' : `?type=${name}`)}
              className={cn(
                startupType === name
                  ? 'border-0 border-b-2 border-solid border-primary text-primary'
                  : 'text-gray-400',
              )}>
              <p className={'p-4'}>{label}</p>
            </Link>
          ))}
        </div>
        <div className="h-[0.22rem] w-full bg-light-shadow lg:hidden"></div>
        <StartupFilters
          startupType={(startupType?.toLowerCase() as StartupTypes) ?? 'all'}
        />
      </div>
      <StartupResults
        startupType={(startupType?.toLowerCase() as StartupTypes) ?? 'all'}
      />
      <div className="border_gray  border-x-0 border-y-2 bg-[#F9F9FC] py-14 pr-0 md:my-20 lg:py-28 xl:my-28 xl:px-32 xl:pr-0">
        <RecommendedStartups
          startupType={(startupType?.toLowerCase() as StartupTypes) ?? 'all'}
        />
      </div>
      <ClosedDeals />
    </main>
  )
}
