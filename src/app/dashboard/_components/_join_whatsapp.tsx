import Image from 'next/image'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const JoinWhatsApp = ({
  className,
  hidden,
}: {
  className?: string
  hidden: boolean
}) => {
  return (
    <>
      <div
        className={cn(
          'grid-cols-7 items-center justify-center rounded-2xl border-gray bg-white p-5 py-2 md:grid' +
            ' ' +
            className +
            (hidden ? ' hidden' : ''),
        )}
        style={{ backgroundColor: 'rgba(36, 37, 82, 0.1)' }}>
        <div
          className={
            'flex items-center justify-center pt-2 sm:hidden lg:relative lg:h-[3rem] lg:w-[8rem] xl:col-span-1 xl:flex'
          }>
          <Image
            src="/tikla_whatsapp.svg"
            height={56}
            width={56}
            className={'w-42 md:absolute md:-left-0  md:-top-[50%]'}
            alt={'chote whatsapp'}
          />
          <Image
            src="/tikla_whatsapp.svg"
            height={22}
            width={22}
            className={'w-42 md:absolute  md:-top-[40%]'}
            alt={'chote whatsapp'}
          />
          <Image
            src="/people_whatsapp.svg"
            height={93}
            width={120}
            className={'w-42 md:absolute md:-left-4  md:-top-[20%]'}
            alt={'Whatsapp'}
          />
        </div>
        <div
          className={
            'grid grow items-center justify-center gap-2 py-4 text-center md:col-span-5 xl:col-span-4 xl:text-left'
          }>
          <h4 className={'m-0 p-0 text-xl font-bold xl:text-2xl'}>
            Join our whatsapp investor community
          </h4>
          <p className={'m-0 p-0 text-sm text-gray-lighter'}>
            Get all updates Get daily updates regarding Investments on WhatsApp
          </p>
        </div>
        <div className={'col-span-2 px-4'}>
          <Link
            className={
              'my-4 mt-2 flex items-center  justify-center gap-2 justify-self-center rounded bg-green-500 px-16 py-3 text-center font-bold !text-white md:my-0 md:px-2 md:py-2'
            }
            href={'https://wa.me'}>
            <Image
              src={'/whatsapp.svg'}
              height={24}
              width={24}
              alt="whatsapp"
              className={'hidden rounded-xl xl:inline'}
            />
            Join on whatsapp
          </Link>
        </div>
      </div>
    </>
  )
}
export default JoinWhatsApp
