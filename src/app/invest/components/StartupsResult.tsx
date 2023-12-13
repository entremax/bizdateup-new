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
    <div className="my-8 flex w-fit flex-wrap items-center justify-center gap-8  px-4">
      {(search.length === 0 ? startups[startupType] : search).map((startup) => (
        <StartupCard key={startup._id} startup={startup} />
      ))}
    </div>
  )
}
