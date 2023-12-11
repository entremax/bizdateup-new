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
    <div className=" 3xl:grid-cols-4 my-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {(search.length === 0 ? startups[startupType] : search).map((startup) => (
        <StartupCard key={startup._id} startup={startup} />
      ))}
    </div>
  )
}
