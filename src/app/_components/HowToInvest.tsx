import HowToSteps from '@/app/_components/Steps'

export default function HowItWorks() {
  return (
    <div className="my-32 flex flex-col items-center px-[19px]">
      <div>
        <p className="text-center text-[13px] font-semibold text-zinc-700/70 lg:text-[20px]">
          HOW IT WORKS
        </p>
        <h6 className="mt-0 text-center text-[30px] leading-[36px] lg:mb-0 lg:px-[150px] lg:text-[48px] lg:leading-[64px] xl:px-[300px]">
          Here&apos;s How Your Seamless Investment Journey Looks with us!
        </h6>
      </div>
      <div className="lg:justfy-between flex flex-col items-center gap-x-[76px] lg:mt-[84px] lg:flex-row">
        <picture>
          <img
            src="/Investment_Processes.png"
            alt="Investment_Process"
            width="100%"
            height="auto"
          />
        </picture>
        <div className="flex max-w-[491px] flex-col gap-y-8 pt-[33px] lg:pt-16">
          <HowToSteps />
        </div>
      </div>
    </div>
  )
}
