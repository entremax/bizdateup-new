import Button from "./Button";

export default function WhoAreWe() {
    return (
        <div className="my-[80px] lg:mt-[132px] xl:px-[130px] px-6 lg:flex gap-x-32 items-center">
            <div className="">
                <picture>
                    <img src="/who_are.png" alt="who_are_we" width='100%' height='auto' />
                </picture>
            </div>
            <div className="text-center lg:text-left lg:w-[491px]">
                <h2 className="text-[30px] lg:text-[48px] leading-[36px] lg:leading-[64px] lg:-tracking-[2.16px] font-bold">Who are we?</h2>
                <p className="text-[15px] lg:text-[18px] leading-[20px] lg:mt-[29px] lg:leading-[24px] text-balance font-normal">Bizdateup is a Startup Investment platform which enables Investors like you to explore and invest in groundbreaking & Highly-Profitable Indian startup ventures starting at ₹50,000.</p>
                <Button title="Get Started" />
            </div>
        </div>
    )
}