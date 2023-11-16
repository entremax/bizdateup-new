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
  console.log('fileName', fileName)
  return (
    <div
      className={cn(
        'border_gray shadow rounded-xl px-4 lg:px-7 py-4 lg:py-5 ' + className,
      )}
    >
      <div className="flex items-center">
        <h4 className="text-xl lg:text-2xl font-bold reset flex-grow">
          Documents
        </h4>
        <Link
          download={fileName}
          href={apiUri().v1 + '/dueFile/' + fileName}
          target={'_blank'}
          className="reset text-primary font-bold flex items-center gap-2 text-sm lg:text-base"
        >
          <Icons.Download className={'w-6 h-6'} /> Download all
        </Link>
      </div>
      <div className="flex flex-col">
        {startup.dueDiligenceFiles.map((file: DueDiligenceFile) => (
          <div className="flex gap-2 font-medium py-4" key={file._id}>
            <Icons.TextFile />
            {getFileName(file.name)}
          </div>
        ))}
      </div>
    </div>
  )
}
