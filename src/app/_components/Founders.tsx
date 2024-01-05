import Button from '@/components/LinkButton'

export default function Founders() {
  return (
    <div className="mb-16 mt-0  flex flex-col items-center justify-between px-[19px] lg:flex-row lg:px-[158px]">
      <div className="mb-0 pt-24 lg:w-[593px]">
        <p className="text-center text-[18px] font-semibold text-zinc-700/70 lg:mb-[12px] lg:text-left lg:text-[26px]">
          For Founders
        </p>
        <h6 className="mb-0 mt-0 text-center text-[30px] leading-[36px] lg:text-left lg:text-[46px] lg:leading-tight">
          Raising a round is not easy, but{' '}
          <span className="text-[#8686F5]">Bizdateup</span> has made it easier.
        </h6>
        <p className="mt-[18px] text-center text-[15px] leading-[20px] lg:text-left">
          Whether it&apos;s crowdfunding, raising privately or a discount pool,
          find out how we can accommodate your fundraising needs.
        </p>
        <div className="my-4 flex w-full items-center justify-center lg:items-start lg:justify-start">
          <Button
            href={'/signup'}
            className="grow lg:w-1/4 lg:grow-0"
            title="Register"
          />
        </div>
      </div>
      <div className="lg:[mt-49px] mt-0">
        <picture>
          <img src="/Founder.webp" alt="Founders" width="100%" height="auto" />
        </picture>
      </div>
    </div>
  )
}
