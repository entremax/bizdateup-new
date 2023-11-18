import { Icons } from '@/icons'
import { DueDiligenceFile, StartupData } from '@/app/invest/_type'
import { apiUri, cn, getFileName } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'

export default function DownloadFiles({
  startup,
  className = '',
}: {
  startup: StartupData
  className?: string
}) {
  const fileName =
    startup?.dueDiligenceFiles[startup?.dueDiligenceFiles?.length - 1]?.name

  return (
    <div
      className={cn(
        'border_gray rounded-xl px-4 py-4 shadow lg:px-7 lg:py-5 ' + className,
      )}>
      <div className="flex items-center">
        <h4 className="reset flex-grow text-xl font-bold lg:text-2xl">
          Documents
        </h4>
        <Link
          download={fileName}
          href={apiUri().v1 + '/dueFile/' + fileName}
          target={'_blank'}
          className="reset flex items-center gap-2 text-sm font-bold text-primary lg:text-base">
          <Icons.Download className={'h-6 w-6'} /> Download all
        </Link>
      </div>
      <div className="flex flex-col">
        {startup.dueDiligenceFiles.map((file: DueDiligenceFile) => (
          <div className="flex gap-2 py-4 font-medium" key={file._id}>
            <Icons.TextFile />
            {getFileName(file.name)}
          </div>
        ))}
      </div>
    </div>
  )
}
