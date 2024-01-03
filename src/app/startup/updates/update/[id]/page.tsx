import { fetchData } from '@/lib/fetchApi'
import { startupApis } from '@/lib/startup'
import { StartupUpdate } from '@/types/startup'
import { redirect, RedirectType } from 'next/navigation'
import { apiUri, cn, formatCustomDate } from '@/lib/utils'
import Image from 'next/image'

export default async function Update({
  params: { id },
}: {
  params: { id: string }
}) {
  const update = (await fetchData(
    startupApis.fetchUpdateById + id,
  )) as StartupUpdate | null
  if (!update) {
    return redirect('/startup/updates', RedirectType.push)
  }
  return (
    <div className="">
      <div className={'flex flex-col rounded-xl px-4 text-black-lighter'}>
        <div
          className={cn(
            `flex items-center gap-4 px-2 py-4 text-black-lighter `,
          )}>
          <div className="relative h-16 max-h-[4rem]  w-[4.4rem] overflow-clip  rounded-xl">
            <Image
              alt={'companyImage'}
              src={apiUri().base + 'v1/logo/' + update.logo}
              sizes={'100%'}
              fill
            />
          </div>
          <div className={cn('flex  flex-grow flex-col')}>
            <h5 className={`text-semibold text-lg`}>{update.company_name}</h5>
            <p className={'text-sm font-light'}>
              Start-up:{' '}
              <span className={'font-semibold text-gray-400'}>
                {update.company_name}
              </span>
            </p>
          </div>
          <div className="flex-start flex flex-col">
            <p className={'text-xs font-light'}>
              {formatCustomDate(update.created_at)}
            </p>
          </div>
        </div>
        <p className="pb-4 text-sm">{update.content ?? ''}</p>
      </div>
    </div>
  )
}
