import Image from 'next/image'
import Button from '@/components/LinkButton'

const stats = [
  {
    id: 1,
    title: '12+',
    desc: 'Startups Funded',
  },
  {
    id: 2,
    title: '4000+',
    desc: 'Strong Community',
  },
  {
    id: 3,
    title: '500+',
    desc: 'Active Investors',
  },
  {
    id: 4,
    title: '10CR+',
    desc: 'Total Funding',
  },
]

export default function TopSection() {
  return (
    <>
      <div className="relative flex flex-col-reverse items-center justify-between lg:flex-row">
        <div className=" mx-4 flex flex-col items-center sm:text-center lg:my-20 lg:items-start lg:text-left  xl:px-32">
          <h1 className="static z-50 my-4 mt-10 max-h-[128px] min-w-[319px] max-w-[824px] text-[28px] font-bold leading-[33.976px] lg:absolute lg:start-[2rem] lg:text-[56px] lg:leading-tight lg:-tracking-[2.16px] xl:start-[10rem]">
            Invest in Top 1% Indian Startups & Become a{' '}
            <span className="text-[#8686F5]">Super Angel!</span>
          </h1>
          <div className="my-4 lg:mx-4 lg:mt-52">
            <p className="text-balance max-w-[554px] text-lg font-normal leading-6 lg:text-[20px] lg:leading-7">
              We are an Investment platform which enables Investors like you to
              explore and invest in groundbreaking & Highly-Profitable Indian
              startup ventures starting at ₹50,000.
            </p>
          </div>
          <div className="mx-4 my-4 w-full lg:w-2/4">
            <Button href={'/signup'} className={'py-4'}>
              Signup Now
            </Button>
          </div>
        </div>
        <div className="lg:top-6rem relative h-[24rem] w-[25rem] md:w-[31rem] md:max-w-[31rem] lg:right-[8rem] lg:top-[4rem] lg:h-[26rem]">
          <picture>
            <Image
              src={'/cheerful_women.webp'}
              alt="cheerful_women"
              className={'mr-8'}
              fill
              priority
              sizes="((min-width: 50em) and (max-width: 60em)) 70em,
              ((min-width: 30em) and (max-width: 50em)) 40em,
                (max-width: 30em) 30em"
            />
          </picture>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 hidden lg:inline">
          <svg width="734" height="734" viewBox="0 0 734 734" fill="none">
            <path d="M723.898 465H744.598V485.7H723.898V465Z" fill="#3D97FF" />
            <path
              d="M630.898 361.7H651.598V341H630.898V361.7Z"
              fill="#2EC5CE"
            />
            <path
              d="M434.801 144.7H455.501V124H434.801V144.7Z"
              fill="#F56FB7"
            />
            <path d="M155.801 113.7H176.501V93H155.801V113.7Z" fill="#804EDA" />
          </svg>
        </div>
      </div>
      <div className="mt-16 grid max-h-[211px] min-h-[169px] grid-cols-2 items-center justify-center gap-4 bg-[#F3F3FA] px-[40px] py-4 md:mt-0 md:flex md:justify-between xl:px-[200px]">
        {stats.map((data) => (
          <div
            key={data.id}
            className="flex w-[211px] max-w-[265px] flex-col gap-y-2 sm:items-center">
            <span className="text-[26.779px] font-bold tracking-[-0.278px] text-[#1D1D1F] md:text-[36px] md:tracking-[-3px]">
              {data.title}
            </span>
            <span className="text-[13.39px] font-bold tracking-[-0.278px] text-[#9B9BAB] md:text-[18px] md:tracking-[-0.4px]">
              {data.desc}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}
