import Image from 'next/image'
import Button from '@/components/LinkButton'
import AboutStats from '@/components/AboutStats'

export default function TopSection() {
  return (
    <>
      <div className="grid min-h-[60vh] flex-col-reverse justify-start px-4 md:flex md:flex-row md:items-center md:justify-around md:px-8 lg:px-16 xl:min-h-[80vh] xl:px-32">
        <div className="flex flex-col items-center  justify-center gap-3 lg:items-start ">
          <div className="flex flex-col justify-center lg:gap-4 ">
            <h1 className="flex flex-col pt-3 text-3xl leading-snug lg:text-5xl lg:leading-[3.2rem]">
              Invest in Top 1% Indian <br />
              Startups & Become a
            </h1>
            <h1 className="m-0 p-0 pb-3 text-3xl leading-snug text-primary lg:text-5xl lg:leading-[3.2rem]">
              Super Angel!
            </h1>
            <p className="md:text-md text-xs font-medium tracking-wide lg:text-lg lg:font-normal lg:leading-6">
              We are an Investment platform which enables Investors like{' '}
              <br className={'hidden lg:inline'} /> you to explore and invest in
              groundbreaking & Highly- <br className={'hidden lg:inline'} />
              Profitable Indian startup ventures starting at ₹50,000.
            </p>
          </div>
          <div className="my-4 flex w-full items-start justify-self-start md:w-2/4">
            <Button href={'/signup'} className={'py-3 lg:py-4'}>
              Signup Now
            </Button>
          </div>
        </div>
        <div className=" relative col-start-1 row-start-1 h-full min-h-[12rem] w-3/4 justify-self-center md:max-h-[30rem] md:min-h-[24rem] md:w-full lg:min-h-[30rem] lg:w-2/4 xl:min-h-[36rem]">
          <Image
            src={'/landing.webp'}
            alt="cheerful_women"
            // className={'min-h-[12rem] md:min-h-[24rem] w-full md:max-h-[30rem] xl:min-h-[36rem]'}
            fill
            className={'object-contain'}
            priority
            // sizes="((min-width: 50em) and (max-width: 60em)) 70em,
            // ((min-width: 30em) and (max-width: 50em)) 40em,
            //   (max-width: 30em) 30em"
          />
        </div>
      </div>
      <AboutStats />
    </>
  )
}
