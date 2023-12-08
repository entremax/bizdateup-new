import { useAppSelector } from '@/store/hooks'
import React from 'react'
import { StartupTypes } from '@/types/startup'
import { useRouter } from 'next/navigation'
import StartupCard from '@/components/invest/startupCard'

type Props = {
  startupType: StartupTypes
}
export default function StartupResults({ startupType }: Props) {
  const router = useRouter()
  const { search, startups } = useAppSelector(({ startup }) => startup)

  return (
    <div className=" my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {(search.length === 0 ? startups[startupType] : search).map((startup) => (
        <StartupCard key={startup._id} startup={startup} />
      ))}
    </div>
  )
}