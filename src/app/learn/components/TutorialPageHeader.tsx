import Button from '@/components/LinkButton'
import Image from 'next/image'

export default function TutorialHeader() {
  return (
    <div className="relative flex flex-col-reverse items-center justify-between lg:flex-row">
      <div className=" mx-4 mr-32 flex flex-col items-center sm:text-center lg:my-20 lg:items-start  lg:text-left xl:px-32">
        <h1 className="static z-50 my-4 mt-10 flex max-h-[128px] min-w-[319px] max-w-[44rem] flex-col text-[28px] font-bold leading-[33.976px] lg:absolute lg:start-[2rem] lg:text-[56px] lg:leading-tight lg:-tracking-[2.16px] xl:start-[10rem]">
          Be a Part of the
          <span>Next Big Thing Invest in</span>
          <span className="text-[#8686F5]">Innovative Startups</span>
        </h1>
        <div className="my-4 lg:mx-4 lg:mt-64">
          <p className="text-balance max-w-[554px] text-lg font-normal leading-6 lg:text-[20px] lg:leading-7">
            Investing in Indian startups has never been easier or more
            profitable. Join Bizdateup today and start seeing real returns on
            your investments
          </p>
        </div>
        <div className="mx-4 my-4 w-full lg:w-2/4">
          <Button href={'/signup'} className={'py-4'}>
            Sign up Now
          </Button>
        </div>
      </div>
      <div className="lg:top-6rem relative z-10 h-[24rem] w-[25rem] md:w-[31rem] md:max-w-[31rem] lg:right-[8rem] lg:top-[4rem] lg:h-[26rem]">
        <div className="absolute ">
          <div className={'relative w-[24rem] '}>
            <Image
              src={'/tutorial/happy-women-working.png'}
              alt="cheerful_women"
              className={'z-20 mr-8'}
              fill
              sizes="((minWidth: 50em) and (max-width: 60em)) 70em,
              ((minWidth: 30em) and (max-width: 50em)) 40em,
                (max-width: 30em) 30em"
            />
          </div>
        </div>
        <div className="z-5 absolute right-[0rem] top-[3rem]  h-[24rem] w-[25rem] md:w-[31rem] md:max-w-[31rem] lg:h-[26rem]">
          <picture>
            <svg
              width="395"
              height="345"
              viewBox="0 0 395 345"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.48"
                d="M5.9031 127.276C-10.5163 90.3972 11.449 47.8002 51.0151 39.7908L239.475 1.64028C265.859 -3.70063 292.725 8.28925 306.369 31.494L385.644 166.317C404.726 198.77 391.316 240.606 356.923 255.918L169.402 339.408C137.575 353.579 100.287 339.265 86.1165 307.438L5.9031 127.276Z"
                fill="#8686F5"
                fillOpacity="0.38"
              />
            </svg>
          </picture>
        </div>
        <div className="absolute bottom-8 right-8 flex gap-4 rounded-xl bg-white p-4 py-3 shadow-lg">
          <div className="group:animate-bounce rounded-xl bg-[#FAF9ED] p-4">
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              className={
                'cursor-pointer stroke-black-lighter transition-colors delay-200 hover:stroke-primary group-hover:animate-pulse'
              }
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_404_3205)">
                <path
                  d="M9.64453 9.80802C9.64453 9.27342 9.83577 8.75645 10.1837 8.35055L15.5484 2.09176C16.0272 1.53312 16.8248 1.37205 17.4829 1.7011C18.1254 2.02236 18.4339 2.76718 18.2067 3.44867L16.3631 8.97956H21.518C21.6524 8.97956 21.7865 8.99165 21.9186 9.01569C23.1356 9.23694 23.9427 10.4028 23.7214 11.6197L22.2963 19.4581C22.1027 20.5229 21.1752 21.297 20.0929 21.297H11.8841C10.6472 21.297 9.64453 20.2943 9.64453 19.0574V9.80802Z"
                  // stroke="black"
                  strokeWidth="1.57704"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.16797 20.1775V10.0996"
                  // stroke="black"
                  strokeWidth="1.57704"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_404_3205">
                  <rect
                    width="26.8743"
                    height="26.8743"
                    fill="white"
                    transform="translate(0.6875 0.0219727)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="font-semibold">How to be a startup investor?</p>
            <div className="flex items-center">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9037 14.7732C11.7986 14.7737 11.695 14.7489 11.6014 14.701L8.25022 12.9465L4.89901 14.701C4.79019 14.7582 4.6675 14.7837 4.54489 14.7747C4.42227 14.7656 4.30465 14.7224 4.2054 14.6498C4.10614 14.5773 4.02924 14.4783 3.98342 14.3642C3.9376 14.2501 3.92472 14.1255 3.94622 14.0044L4.60332 10.305L1.89607 7.67656C1.8116 7.59227 1.75169 7.48657 1.72274 7.37081C1.6938 7.25505 1.69693 7.13358 1.73179 7.01946C1.76988 6.90268 1.83994 6.79891 1.93402 6.71993C2.0281 6.64095 2.14243 6.58992 2.26405 6.57264L6.00951 6.02724L7.65883 2.65632C7.71264 2.54522 7.79665 2.45153 7.90125 2.38597C8.00584 2.32042 8.12678 2.28564 8.25022 2.28564C8.37366 2.28564 8.49461 2.32042 8.5992 2.38597C8.70379 2.45153 8.78781 2.54522 8.84161 2.65632L10.5106 6.02067L14.2561 6.56606C14.3777 6.58335 14.4921 6.63438 14.5861 6.71336C14.6802 6.79234 14.7503 6.89611 14.7884 7.01289C14.8232 7.12701 14.8264 7.24847 14.7974 7.36424C14.7685 7.48 14.7086 7.5857 14.6241 7.66999L11.9168 10.2984L12.5739 13.9979C12.5974 14.1211 12.5851 14.2484 12.5385 14.3648C12.492 14.4813 12.413 14.5819 12.3111 14.655C12.1921 14.7383 12.0488 14.7799 11.9037 14.7732Z"
                  fill="#FFC81A"
                />
              </svg>
              <span className="text-sm font-semibold">4.8 </span>
              <span className="text-sm">(1,089)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
