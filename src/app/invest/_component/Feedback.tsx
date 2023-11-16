import { StartupData } from '@/app/invest/_type'
import Image from 'next/image'
import { Button } from 'antd'

export default function StartupFeedback({ startup }: { startup: StartupData }) {
  return (
    <div className="grid gap-4 md:hidden bg-primary-dark border_gray shadow rounded-xl px-4 lg:px-7 py-4 lg:py-5">
      <Image
        height={'100'}
        width={'100'}
        src={'/rocket_invest.png'}
        alt={'rocket image'}
      />
      <h4 className="reset text-white font-bold text-2xl">
        Are you interested in this start up?
      </h4>
      <p className={'p-0 m-0 text-sm text-gray-200 pb-4'}>
        Get all updates Get daily updates regarding Investments
      </p>
      <div className="grid grid-cols-3 gap-4">
        <Button className={''} size={'large'} ghost>
          Yes
        </Button>
        <Button className={''} size={'large'} ghost>
          No
        </Button>
        <Button className={''} size={'large'} ghost>
          Maybe
        </Button>
      </div>
    </div>
  )
}
