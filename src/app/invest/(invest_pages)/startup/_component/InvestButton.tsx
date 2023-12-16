import { Button } from 'antd'
import { Icons } from '@/components/icons/icon'
import ReduxProvider from '@/store/Provider'
import InvestTransactionModal from '@/components/invest/investModal'
import { StartupData } from '@/types/invest'
import { cn, formatIndianValuation } from '@/lib/utils'

type Props = {
  isClosed?: boolean
  startup: StartupData
  intro?: boolean
  sticky?: boolean
}

export default function InvestButton({ isClosed, startup, sticky }: Props) {
  let parentClass =
    'md:static w-inherit flex shadow md:shadow-none flex-col justify-center items-center gap-4 fixed bottom-16 left-0 right-0 bg-white  z-[500] z-[10]  p-4 '
  return (
    <div className={cn(parentClass)}>
      {isClosed ? (
        <Button
          className={
            'flex items-center justify-center gap-2 !bg-[#F5F5F5] px-6 !text-[#858585]'
          }
          disabled
          size="large"
          block>
          <Icons.Locked /> Campaign ended
        </Button>
      ) : (
        <ReduxProvider>
          <InvestTransactionModal startup={startup} />
        </ReduxProvider>
      )}
      {!sticky && (
        <span className={cn('text-center text-sm')}>
          Minimum investment ₹{' '}
          {formatIndianValuation(startup.dealTerms.minimumInvestment)}
        </span>
      )}
    </div>
  )
}
