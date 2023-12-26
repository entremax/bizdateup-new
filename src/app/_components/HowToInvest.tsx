import Button from '@/components/LinkButton'

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
          <div className="flex items-center gap-x-6">
            <span className="rounded-md bg-[#E2E2E2] px-4 py-2 text-[15.036px]">
              1
            </span>
            <span className="text-[20px] font-bold">
              Register with email or social logins
            </span>
          </div>
          <div className="flex items-center gap-x-6">
            <span className="rounded-md bg-[#8686F5] px-4 py-2 text-[15.036px] text-white">
              2
            </span>
            <div>
              <span className="text-[20px] font-bold text-[#8686F5]">
                Complete KYC & Bank details
              </span>
              <p className="text-[14px] font-normal text-[#6E6E73]">
                Get on a Quick 15 mins Zoom Call with our Experts to understand
                the Process & Terms for Selections & Investment.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <span className="rounded-md bg-[#E2E2E2] px-4 py-2 text-[15.036px]">
              3
            </span>
            <span className="text-[20px] font-bold">
              Start investing in start ups
            </span>
          </div>
          <div className="flex w-full">
            <Button
              href={'/signup'}
              className="w-fit grow px-4 lg:grow-0"
              title="Fill out the application now"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
