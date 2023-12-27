import Button from '@/components/LinkButton'
import BackgroundSvg from '@/app/_components/BackgroundSvg'

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
    <div className="max-w-screen relative my-16 flex flex-col items-center justify-center overflow-clip bg-[#2b2c57] p-4 py-16">
      {backgroundStyle.map(({ className }, index) => (
        <div key={className + index} aria-hidden="true" className={className}>
          <BackgroundSvg />
        </div>
      ))}
      <h4
        className={
          'relative z-[10] my-4 flex flex-col gap-3 text-center text-3xl font-semibold xl:flex-row'
        }>
        <span className="text-white">Ready to Join the Top</span>
        <span className="text-primary">1% Investor's club?</span>
      </h4>
      <p className="relative z-[10] m-auto text-center font-normal leading-[1.27544rem] text-white lg:w-3/4">
        With Bizdateup you get a Strong Community of Top 1% Investors who live &
        Breathe Angel Investing! To top it up Signing up takes hardly 5 mins of
        your time. So, Join the Community Now!
      </p>
      <div className="relative z-[10] m-auto my-8 flex w-full flex-col gap-4 lg:w-2/4 lg:flex-row">
        <Button href={'/register'} className={'w-full py-4 text-white lg:px-8'}>
          Register
        </Button>
        <Button
          href={'/login'}
          className={'w-full !bg-white py-4 !text-primary lg:px-8'}>
          Login
        </Button>
      </div>
    </div>
  )
}
