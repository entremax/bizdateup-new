import Link from 'next/link'
import Image from 'next/image'

export default function NoData() {
  return (
    <div className="flex flex-col px-4 lg:mb-16 lg:px-28">
      <h4 className={'m-4 text-3xl text-primary-dark'}> My Portfolio</h4>
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:border_gray col-span-full m-4 flex h-[35vh] flex-col items-center justify-center rounded-2xl p-4 lg:col-span-9 lg:h-[70vh]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="41"
            viewBox="0 0 64 41"
            className={'fill-primary stroke-primary'}>
            <g fill="none" fillRule="evenodd" transform="translate(0 1)">
              <ellipse cx="32" cy="33" rx="32" ry="7"></ellipse>
              <g fillRule="nonzero">
                <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                <path
                  //fill="#fafafa"
                  d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"></path>
              </g>
            </g>
          </svg>
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <h4 className="text-center text-2xl">
              Your portfolio is waiting for you to make your first investment!
            </h4>
            <Link
              href={'/invest'}
              className="!primary_link my-4  max-w-[10rem]">
              Invest Now
            </Link>
          </div>
        </div>
        <div className={'col-span-full lg:col-span-3'}>
          <div
            className={
              'md:items-left md:justify-left border_gray  my-4 grid items-center justify-center gap-2 rounded-xl p-3  text-center shadow md:text-left'
            }>
            <div className="relative h-[10rem] max-h-[10rem] w-full overflow-clip  rounded-sm">
              <Image
                src={
                  'https://www.figma.com/file/f4SkzM7hfOnqhiBLoZKxms/image/b825596a57cd8a132b7335c9dda94a345cce9eed'
                }
                fill
                alt={'Person Viewing  a paper'}
              />
            </div>
            <div className="grid gap-2">
              <h5 className="!m-0 !p-0 text-lg font-bold">
                Master Startup Investments
              </h5>
              <p
                className={
                  'text-md text-md !m-0 !p-0 text-typography-gray-400'
                }>
                Learn more about our platform offering
              </p>
              <Link
                href={'/learn-more'}
                className={'py-2 text-sm font-bold text-primary'}>
                Learn more {'>'}
              </Link>
            </div>
          </div>
          <div className="border_gray my-4 grid items-center justify-center gap-2 rounded-xl  text-center shadow md:text-left">
            <div className={'flex'}>
              <div className="grow"></div>
              <Image
                src={
                  'https://s3-alpha-sig.figma.com/img/66d5/70b3/9c6441c0a05bd78920817a27b7be7b9a?Expires=1697414400&Signature=MvGmZvjITHtgGcD4TDlGKg2t8XRtDUO~M4I5oUw-aeXWrGQZgW5zfuoZXTWDyFisr3fiSREALs~dMSOQJXPBovZAIGYle~klbeybWxsM~k1ya0AgSZfYE24dSZRi7UU4h6LtSooaQgKir6KLBXNNfcXald8r72spJWdtlyPuANnhTxmgTRvZL0aXAP--ktPh-OOmbSbG4giOdCpp8p-AIK-dTjhq8PrvOEK353QRasfDowi282D6zWqoJUSSY1xIiYq2lPeitSYrYgHklLOp0ga9SEtbdErAel~H3FnxpegsBqS5F0XIm71brrArQCs7ncVitlgeUIV14-pN1Fg1Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                }
                alt={'Person in a rocket'}
                height={140}
                width={130}
                className={'py-5'}
              />
              <div className="grow"></div>
            </div>
            <div
              className={
                'grid justify-center divide-x-0 divide-y divide-solid divide-gray-300 '
              }>
              <div className=" text-center">
                <h5 className="!m-0 !p-0 text-lg font-bold">
                  Become an Accelerator
                </h5>
                <p
                  className={
                    'text-md !m-0 p-0 py-2  pb-4 text-typography-gray-400'
                  }>
                  Join our accelerator program and fuel your entrepreneurial
                  journey
                </p>
              </div>
              <Link
                href={'/learn-more'}
                className={'py-4 text-center  text-base text-primary'}>
                Join now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
