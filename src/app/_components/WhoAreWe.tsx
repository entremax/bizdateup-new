import Button from '@/components/common/LinkButton'

export default function WhoAreWe() {
  return (
    <>
      <div className="my-[80px] items-center gap-x-32 px-6 lg:mt-[132px] lg:flex xl:px-[130px]">
        <div className="">
          <picture>
            <img
              src="/who_are.png"
              alt="who_are_we"
              width="100%"
              height="auto"
            />
          </picture>
        </div>
        <div className="text-center lg:w-[491px] lg:text-left">
          <h2 className="text-xl font-bold leading-[36px] lg:text-5xl lg:leading-[64px] lg:-tracking-[2.16px]">
            Who are we?
          </h2>
          <p className="text-balance text-[15px] font-normal leading-[20px] lg:my-7 lg:text-[18px] lg:leading-[24px]">
            Bizdateup is a Startup Investment platform which enables Investors
            like you to explore and invest in groundbreaking & Highly-Profitable
            Indian startup ventures starting at ₹50,000.
          </p>
          <div className="my-4 mt-8">
            <Button
              href={'/get-started'}
              title="Get Started"
              className={'my-4 px-16 py-4'}
            />
          </div>
        </div>
      </div>
    </>
  )
}
