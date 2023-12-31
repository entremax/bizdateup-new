'use client'
import Image from 'next/image'
import { apiUri, cn, formatCustomDate } from '@/lib/utils'
import Link from 'next/link'
import { StartupUpdate } from '@/types/startup'

type Props = {
  component_type: 'page' | 'notification'
  update: StartupUpdate
}
export default function StartupUpdate({ component_type, update }: Props) {
  return (
    <Link
      href={`/startup/updates/update/${update._id}`}
      className={
        component_type === 'page'
          ? 'border_gray flex flex-col rounded-xl px-4 text-black-lighter shadow'
          : ''
      }>
      <div
        className={cn(`flex items-center gap-4 px-2 py-4 text-black-lighter `)}>
        <div className="relative h-16 max-h-[4rem]  w-[4.4rem] overflow-clip  rounded-xl">
          <Image
            alt={'companyImage'}
            src={apiUri().base + 'v1/logo/' + update.logo}
            fill
          />
        </div>
        <div
          className={cn(
            'flex max-w-[16rem] flex-col md:max-w-fit' +
              (component_type === 'page' ? ' flex-grow' : ''),
          )}>
          <h5 className="text-semibold text-lg">{update.title}</h5>
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
      {component_type === 'page' && (
        <p className="pb-4 text-sm">{update.content ?? ''}</p>
      )}
    </Link>
  )
}
