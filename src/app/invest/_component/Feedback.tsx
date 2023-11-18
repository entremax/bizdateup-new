import { StartupData } from '@/app/invest/_type'
import Image from 'next/image'
import { Button } from 'antd'

export default function StartupFeedback({ startup }: { startup: StartupData }) {
  return (
    <div className="border_gray grid gap-4 rounded-xl bg-primary-dark px-4 py-4 shadow md:hidden lg:px-7 lg:py-5">
      <Image
        height={'100'}
        width={'100'}
        src={'/rocket_invest.png'}
        alt={'rocket image'}
      />
      <h4 className="reset text-2xl font-bold text-white">
        Are you interested in this start up?
      </h4>
      <p className={'m-0 p-0 pb-4 text-sm text-gray-200'}>
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
