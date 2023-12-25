import BackgroundSvg from '@/app/_components/BackgroundSvg'
import Button from '@/components/LinkButton'

export default function ReadyToJoin() {
  const backgroundStyle = [
    {
      className:
        'pointer-events-none h-[400px] absolute z-[9] -start-[10rem] lg:start-[39rem] top-0',
    },
    {
      className:
        'pointer-events-none h-[400px] absolute z-[9] -start-[30rem] lg:start-[39rem] top-[0]',
    },
    {
      className:
        'pointer-events-none h-[400px] absolute z-[9] -start-[15rem] top-[0]',
    },
    {
      className:
        'pointer-events-none h-[400px] absolute z-[9] -start-[34rem] top-0',
    },
    {
      className:
        'pointer-events-none h-[400px] absolute z-[9] -start-[34rem] top-0',
    },
  ]
  return (
    <div className="relative mt-[129px] flex max-h-[460px] flex-col items-center justify-center overflow-hidden px-2 py-[95px] pt-0 text-center lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 z-[9] h-[550px] w-screen bg-[#2b2c57]"
      />
      {backgroundStyle.map(({ className }, index) => (
        <div key={className + index} aria-hidden="true" className={className}>
          <BackgroundSvg />
        </div>
      ))}
      <h6 className="z-[10] mb-0 pt-[61px] text-[30px] font-bold text-white lg:px-[256px] lg:text-[46px]">
        Ready to Join the Top{' '}
        <span className="text-[#8686F5]">1% Investor&apos;s</span> Club?
      </h6>
      <p className="z-[10] mt-[31px] max-w-[739px] text-[15px] leading-[28px] text-white/60 lg:text-[20px]">
        With Bizdateup you get a Strong Community of Top 1% Investors who live &
        Breathe Angel Investing! To top it up Signing up takes hardly 5 mins of
        your time. So, Join the Community Now!
      </p>
      <div className="z-[10] mx-2 flex w-full flex-col-reverse gap-x-[16px] pb-[69px] md:w-fit md:flex-row">
        <Button
          href={'/login'}
          className="w-inherit bg-white !text-primary hover:bg-white"
          title="Login"
        />
        <Button href={'/signup'} className="w-inherit " title="Register" />
      </div>
    </div>
  )
}
