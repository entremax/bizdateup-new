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
          'border-gray bg-white md:grid justify-center items-center p-5 py-2 rounded-2xl grid-cols-7' +
            ' ' +
            className +
            (hidden ? ' hidden' : ''),
        )}
        style={{ backgroundColor: 'rgba(36, 37, 82, 0.1)' }}
      >
        <div
          className={
            'sm:hidden flex xl:flex xl:col-span-1 items-center justify-center lg:relative lg:w-[8rem] lg:h-[3rem] pt-2'
          }
        >
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
            'grid md:col-span-5 xl:col-span-4 gap-2 grow justify-center items-center text-center xl:text-left py-4'
          }
        >
          <h4 className={'text-xl xl:text-2xl font-bold m-0 p-0'}>
            Join our whatsapp investor community
          </h4>
          <p className={'text-sm text-gray-lighter m-0 p-0'}>
            Get all updates Get daily updates regarding Investments on WhatsApp
          </p>
        </div>
        <div className={'col-span-2 px-4'}>
          <Link
            className={
              'bg-green-500 justify-self-center flex text-center  px-16 py-3 mt-2 my-4 md:my-0 md:py-2 md:px-2 gap-2 items-center justify-center !text-white font-bold rounded'
            }
            href={'https://wa.me'}
          >
            <Image
              src={'/whatsapp.svg'}
              height={24}
              width={24}
              alt="whatsapp"
              className={'hidden xl:inline rounded-xl'}
            />
            Join on whatsapp
          </Link>
        </div>
      </div>
    </>
  )
}
export default JoinWhatsApp
