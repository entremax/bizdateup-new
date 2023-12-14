import StartupUpdate from '@/components/StartupUpdate'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
export const metadata: Metadata = {
  title: 'Updates - Startup | Bizdateup',
  description: 'Your startup updates.',
}

export default function StartupUpdates({ searchParams }: Props) {
  const updateType = searchParams?.type
  console.log(updateType)
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
    <main className="w-full pt-28 ">
      <div className="flex flex-col gap-4 px-4 md:px-12 lg:px-32">
        <h2 className="text-3xl">Startup Updates</h2>
        <div className={'flex items-center gap-4'}>
          {updateRoute.map(({ name, label }) => (
            <Link
              key={'name'}
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
          <StartupUpdate
            component_type={'page'}
            logo={''}
            title={''}
            name={''}
            startup={''}
            created={''}
          />
        </div>
      </div>
    </main>
  )
}
