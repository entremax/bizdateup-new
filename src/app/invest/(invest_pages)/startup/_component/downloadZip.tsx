'use client'
import { Icons } from '@/components/icons/icon'
import { DueDiligenceFile, StartupData } from '@/types/invest'
import { apiUri, cn, getFileName } from '@/lib/utils'
import React, { useState } from 'react'
import JSZip from 'jszip'
import { Button } from 'antd'

interface DownloadFilesProps {
  startup: StartupData
  className?: string
}

export default function DownloadFiles({
  startup,
  className = '',
}: DownloadFilesProps) {
  const [loading, setLoading] = useState(false)
  const [zipFile, setZipFile] = useState<JSZip | null>(null)

  const handleDownloadAll = async () => {
    const zip = new JSZip()
    setLoading(true)
    // Add files to the zip
    await Promise.all(
      startup.dueDiligenceFiles.map(async (file: DueDiligenceFile) => {
        // Fetch file content
        const response = await fetch(apiUri().v1 + '/dueFile/' + file.name)
        const blob = await response.blob()

        // Add file to zip
        //@ts-ignore
        zip.file(getFileName(file.name), blob as Blob | string | ArrayBuffer)
      }),
    )

    // Generate the zip file
    zip.generateAsync({ type: 'blob' }).then((content) => {
      // Save the zip file
      const blob = new Blob([content])
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'DueDiligenceFiles.zip'
      link.click()
    })

    setLoading(false)
  }

  return (
    <div
      className={cn(
        'border_gray rounded-xl px-4 py-4 shadow lg:px-7 lg:py-5 ' + className,
      )}>
      <div className="flex items-center">
        <h4 className="reset flex-grow text-xl font-bold lg:text-2xl">
          Documents
        </h4>

        <Button
          loading={loading}
          type={'text'}
          className={'!bg-transparent font-medium !text-primary'}
          onClick={handleDownloadAll}
          icon={<Icons.Download width={'16px'} height={'16px'} />}
          ghost>
          Download all
        </Button>
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
