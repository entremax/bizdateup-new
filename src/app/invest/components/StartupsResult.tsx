import { useAppSelector } from '@/store/hooks'
import React from 'react'
import { StartupTypes } from '@/types/startup'
import StartupCard from '@/components/invest/startupCard'

type Props = {
  startupType: StartupTypes
}
export default function StartupResults({ startupType }: Props) {
  const { search, startups } = useAppSelector(({ startup }) => startup)

  return (
    <div className="mx-8 my-8  grid items-center justify-center sm:mx-16 md:grid-cols-2 xl:mx-32 xl:grid-cols-3">
      {(search.length === 0 ? startups[startupType] : search).map((startup) => (
        <StartupCard
          key={startup._id}
          startup={startup}
          className={'justify-self-center'}
        />
      ))}
    </div>
  )
}
