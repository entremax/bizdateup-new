import Button from '@/components/LinkButton'
import Image from 'next/image'
import Background from '../../../../../public/about/backgroud.svg'
import Background_R from '../../../../../public/about/background-r.svg'

export default function TopSection() {
  return (
    <div
      id="top"
      className={
        'flex h-[40vh] flex-col items-center justify-center px-2 sm:px-4 md:h-[60vh] lg:h-[calc(90vh_-_7rem)]'
      }>
      <div
        className={
          'relative flex h-full flex-col items-center justify-center gap-4'
        }>
        <h1
          className={
            'text-center text-3xl font-bold  tracking-tight text-black-lighter md:text-4xl lg:text-5xl'
          }>
          We are the <span className={'text-primary'}>Robinhood</span> of
          India&apos;s
          <br />
          startup ecosystem.
        </h1>
        <p
          className={
            'text-center text-base font-medium leading-snug text-black-lighter'
          }>
          Whether you&apos;re an Investor looking to Grow your fortune or a
          founder thinking about raising funds for <br /> your startup.
          Bizdateup is a one stop platform for all your Investment needs!
        </p>
        <Button
          href={'/signup'}
          className={' my-4 max-w-xs text-sm md:w-fit md:px-12'}>
          Sign up Now
        </Button>
        <Image
          src={Background}
          alt={'Background'}
          sizes={'100vw'}
          className={'h-100% !-left-1/4 !top-8 hidden md:inline'}
          fill
        />
        <Image
          src={Background_R}
          alt={'Background_Right'}
          sizes={'100vw'}
          className={'h-100% !left-1/4 !top-8 hidden md:inline'}
          fill
        />
      </div>
    </div>
  )
}
