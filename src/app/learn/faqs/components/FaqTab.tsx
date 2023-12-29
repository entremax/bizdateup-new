import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  searchParams: { type: string | string[] | undefined }
}

export default function FaqTab({ searchParams }: Props) {
  const searchType = searchParams.type
  const faqType = [
    {
      name: null,
      label: 'General',
    },
    {
      name: 'investors',
      label: 'Investors',
    },
    {
      name: 'startups',
      label: 'Startups',
    },
    {
      name: 'accelerators',
      label: 'Accelerators',
    },
  ]
  return (
    <div
      className={
        'md:items-left flex flex-wrap items-center justify-center gap-4 md:justify-start'
      }>
      {faqType.map(({ name, label }) => (
        <Link
          key={name}
          href={{ href: '', query: { type: name } }}
          className={cn(
            searchType === name || (!searchType && name === null)
              ? 'border-0 border-b-4 border-solid  border-primary font-semibold text-primary'
              : 'text-gray-400',
          )}>
          <p className={'p-4'}>{label}</p>
        </Link>
      ))}
    </div>
  )
}
