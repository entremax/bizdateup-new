import { securityType, StartupDataByType } from '@/app/invest/_type'
import { apiUri } from '@/lib/utils'
import { cookies } from 'next/headers'
import StartupCard from '@/app/invest/_component/startupCard'

interface Props {
  header: string
  type: securityType
}

const getStartups = async (type: string) => {
  const cookie = cookies()
  const tokenKey = cookie.get('token')?.value
  const res = await fetch(
    apiUri().v0 + `/startup/fetchStartupByType?tos=${type}`,
    {
      headers: {
        Authorization: tokenKey ? 'Bearer ' + tokenKey : '',
      },
    },
  )
    .then((res) => {
      return res.json()
    })
    .catch((e) => {
      console.log(e)
      throw new Error('Something went wrong check server terminal')
    })

  return { startups: res.data.data }
}
export default async function StartupToInvest({ header, type }: Props) {
  const { startups }: { startups: StartupDataByType[] } =
    await getStartups(type)

  return (
    <div className="max-w-screen col-span-full grid grid-cols-12 px-3 xl:col-start-2 xl:px-5">
      <h3 className="col-span-full m-0 p-0 pb-8 text-2xl xl:col-start-1 xl:text-4xl">
        {header}
      </h3>
      <div className="scrollbar  col-span-full w-full md:overflow-x-auto xl:col-start-1">
        <div
          className="flex flex-col gap-4 md:flex-row"
          style={{ display: 'inline-flex' }}>
          {startups?.map((startup) => (
            <StartupCard startup={startup} key={startup._id} />
          ))}
        </div>
      </div>
    </div>
  )
}
