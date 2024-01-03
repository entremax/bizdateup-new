import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import UpdatesWrapper from '@/app/startup/updates/components/UpdatesWrapper'
import { getCookieData } from '@/action/user'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export const metadata: Metadata = {
  title: 'Updates - Startup | Bizdateup',
  description: 'Your startup updates.',
}

export default async function StartupUpdates({ searchParams }: Props) {
  const { token } = await getCookieData()
  const updateType = searchParams?.type

  const updateRoute = [
    {
      name: undefined,
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
      name: 'closed-category',
      label: 'Closed Category',
    },
  ]

  return (
    <main className="w-full">
      <div className=" flex flex-col gap-4 px-4">
        <h2 className="text-3xl">Startup Updates</h2>
        <div className={'hidden items-center gap-4 md:flex'}>
          {updateRoute.map(({ name, label }) => (
            <Link
              key={label}
              href={'/invest/startup/updates' + (!name ? '' : `?type=${name}`)}
              className={cn(
                updateType === name
                  ? 'border-0 border-b-2 border-solid border-primary text-primary'
                  : 'text-gray-400',
              )}>
              <p className={'p-4'}>{label}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <UpdatesWrapper token={token} />
        </div>
      </div>
    </main>
  )
}
