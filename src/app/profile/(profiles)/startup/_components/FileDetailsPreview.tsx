import { cn, removeDateFromFilename } from '@/lib/utils'
import { FileIcons } from '@/icons/FileIcon'
import Link from 'next/link'
import { ReactNode } from 'react'
interface Props {
  fileName: string
  link?: string
  remove?: ReactNode
  className?: string
}
export default function FilePreview({
  fileName,
  link,
  remove,
  className,
}: Props) {
  return (
    <Link
      href={link ?? ''}
      className={cn(
        `border_gray flex items-center gap-3 rounded-xl p-4 shadow ${className}`,
      )}>
      <FileIcons.Pdf />
      <span className="text-md font-semibold !text-primary-dark">
        {removeDateFromFilename(fileName)}
      </span>
      {remove}
    </Link>
  )
}
