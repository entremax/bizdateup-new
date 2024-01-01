import Button from "./Button";

export default function HowItWorks() {
    return (
        <div className="mt-[60px] px-[19px] flex flex-col items-center">
            <div>
                <p className="text-zinc-700/70 text-[13px] lg:text-[20px] font-semibold text-center">HOW IT WORKS</p>
                <h6 className="text-[30px] lg:text-[48px] lg:px-[150px] xl:px-[300px] text-center mt-0 leading-[36px] lg:leading-[64px] lg:mb-0">Here&apos;s How Your Seamless Investment Journey Looks with us!</h6>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-[76px] items-center lg:justfy-between lg:mt-[84px]">
                <picture>
                    <img src="/Investment_Processes.png" alt="Investment_Process" width='100%' height='auto' />
                </picture>
                <div className="lg:pt-16 pt-[33px] flex flex-col gap-y-8 max-w-[491px]">
                    <div className="flex gap-x-6 items-center">
                        <span className="px-4 py-2 bg-[#E2E2E2] text-[15.036px] rounded-md">1</span>
                        <span className="text-[20px] font-bold">Register with email or social logins</span>
                    </div>
                    <div className="flex gap-x-6 items-center">
                        <span className="px-4 py-2 rounded-md bg-[#8686F5] text-[15.036px] text-white">2</span>
                        <div>
                            <span className="text-[20px] font-bold text-[#8686F5]">Complete KYC & Bank details</span>
                            <p className="text-[#6E6E73] text-[14px] font-normal">Get on a Quick 15 mins Zoom Call with our Experts to understand the Process & Terms for Selections & Investment.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-6 items-center">
                        <span className="px-4 py-2 bg-[#E2E2E2] text-[15.036px] rounded-md">3</span>
                        <span className="text-[20px] font-bold">Start investing in start ups</span>
                    </div>
                    <Button className="md:w-fit text-[16px] mb-[71px] lg:mb-[112px] md:px-[100px]" title="Fill out the application now" />
                </div>
            </div>
        </div>
    )
}