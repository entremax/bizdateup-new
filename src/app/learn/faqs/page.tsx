import { Metadata } from 'next'
import FaqTab from '@/components/learn/FaqTab'
import FrequentlyAsked from '@/components/faq'

type Props = {
  searchParams: { type: string | string[] | undefined }
}

export const metadata: Metadata = {
  title: ' FAQs | Bizdateup',
  description:
    'This pages holds your frequently asked question about our company.',
}
export default function FaqsPage({ searchParams }: Props) {
  return (
    <div className="flex flex-col gap-4 py-12 lg:px-32 xl:px-36">
      <h4 className="text-4xl">Frequently Asked Questions</h4>
      <FaqTab searchParams={searchParams} />
      <FrequentlyAsked className={'faq-page mt-0'} all />
    </div>
  )
}
