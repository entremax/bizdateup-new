import StartupCard from '@/components/invest/startupCard'
import { useAppSelector } from '@/store/hooks'
import { StartupTypes } from '@/types/startup'

type Props = {
  startupType: StartupTypes
}
export default function RecommendedStartups({ startupType }: Props) {
  const { startups } = useAppSelector(({ startup }) => startup)
  return (
    <div className="max-w-screen col-span-full grid grid-cols-12 px-3 xl:col-start-2">
      <h3 className="col-span-full m-0 p-0 pb-8 text-2xl xl:col-start-1 xl:text-4xl">
        Recommended Startups
      </h3>
      <div className="scrollbar  col-span-full w-full md:overflow-x-auto xl:col-start-1">
        <div
          className="flex flex-col gap-4 md:flex-row"
          style={{ display: 'inline-flex' }}>
          {startups[startupType]?.map((startup) => (
            <StartupCard key={startup._id} startup={startup} />
          ))}
        </div>
      </div>
    </div>
  )
}
