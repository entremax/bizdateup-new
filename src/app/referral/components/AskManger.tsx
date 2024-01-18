import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/LinkButton'

export default function AskManager() {
  return (
    <div className="border_gray mx-3 flex flex-col items-center gap-3 rounded-xl p-4 shadow-sm md:mx-14 md:flex-row lg:mx-32">
      <div className="relative h-[10rem] w-[-webkit-fill-available] min-w-fit overflow-clip rounded-xl md:h-20 md:w-24">
        <Image
          src={'/ask-manager.webp'}
          alt={'ask manager'}
          sizes={'100%'}
          fill
        />
      </div>
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6 lg:gap-8">
        <div className={'flex  flex-col gap-2 '}>
          <h5 className="text-lg font-semibold leading-4">
            Ask Wealth Manager{' '}
          </h5>
          <span className={'text-sm text-[#6E6E73]'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nis
          </span>
        </div>
        <div className="md:grow" />
        <div className="w-full  md:flex md:w-auto">
          <Button
            href={'/contact-us'}
            className={
              'primary_link w-auto  !rounded-md !border-[0.1rem] border-solid bg-gray-50 !px-4 !text-primary md:w-fit md:min-w-[10rem]'
            }>
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  )
}
