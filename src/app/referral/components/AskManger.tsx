import Image from 'next/image'
import Link from 'next/link'

export default function AskManager() {
  return (
    <div className="border_gray mx-3 flex flex-col items-center gap-3 rounded-xl p-4 shadow-sm md:mx-14 md:flex-row lg:mx-32">
      <div className="relative h-[10rem] w-[-webkit-fill-available] min-w-fit overflow-clip rounded-xl md:h-20 md:w-24">
        <Image src={'/ask-manager.png'} alt={'ask manager'} fill />
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row">
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
        <div className="flex  h-fit items-center">
          <Link
            href={'/contact-us'}
            className={
              'primary_link w-fit min-w-[10rem] !rounded-md !border-[0.1rem] border-solid bg-gray-50 !px-4 text-primary'
            }>
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}
