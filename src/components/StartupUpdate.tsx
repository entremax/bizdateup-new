import Image from 'next/image'
import { cn, formatCustomDate } from '@/lib/utils'

type Props = {
  component_type: 'page' | 'notification'
  logo: string
  title: string
  name: string
  startup: string
  created: string
}
export default function StartupUpdate({
  component_type,
  logo,
  title,
  name,
  startup,
  created,
}: Props) {
  return (
    <div className={'flex items-center gap-4 px-2 py-4 '}>
      <div className="relative h-16 max-h-[4rem]  w-[4.4rem] overflow-clip  rounded-xl">
        <Image
          alt={'companyImage'}
          src={
            'https://s3-alpha-sig.figma.com/img/d092/15c4/9205eb15fb8c5cf4dad2100ab57c5361?Expires=1702252800&Signature=M8Gx6Ugi-rafUWdFEFH26oR6vBtcCFyDOHqR38LtKoD8wrDeB6waxkGMNOgsKfWTD2uEtNP1g7UfmEGPDxalwn0DHIfe~aJRYllzv2TISrobmge8U2yTYtdvWQbrCad7wIaofu7zg95L1RK96rbJ2RqLGlyZQs5pOWTj36GPe5XSQOWxbx4O7Qe-KS04oxOCViS28lxzhSxoIt7CJJOmZa2HZg0aWU~7jCehsGpJrcQ1aVPfSYHjeOYeNi8kCkKXzbO65R-wRL72YCAExNPYshowrMhethp8IKQH9u5NwDq1E7sTLm3eVefAS0Tg1CbCxeu2WBPomrq3nLr0wXnsBA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          }
          fill
        />
      </div>
      <div
        className={cn(
          'flex flex-col' + (component_type === 'page' ? ' flex-grow' : ''),
        )}>
        <h5 className="text-semibold text-lg">
          Community Developer call ipsum dummy cabinet
        </h5>
        <p className={'text-sm font-light'}>
          Start-up:{' '}
          <span className={'font-semibold text-gray-400'}>Bizdateup</span>
        </p>
      </div>
      <div className="flex-start flex flex-col">
        <p className={'font-light'}>{formatCustomDate(created)}</p>
      </div>
    </div>
  )
}
