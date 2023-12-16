import { Button } from "antd";
import Image from "next/image";

export default function HowItWorks() {
    return (
        <div className="flex flex-col items-center lg:px-20 px-8 mt-20 sm:mt-32">
            <div>
                <p className="text-zinc-700/70 text-xl font-semibold text-center">HOW IT WORKS</p>
                <h6 className="text-3xl sm:text-5xl text-center lg:px-32 mt-0 text-balance">Here&apos;s How Your Seamless Investment Journey Looks with us!</h6>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-32 items-center lg:justfy-between">
                <div className="lg:hidden">
                    <Image
                        src='/Investment_Process.png'
                        height={250}
                        width={350}
                        alt="Investment Process"
                    />
                </div>
                <div className="hidden lg:block">
                    <Image
                        src='/Investment_Process.png'
                        height={300}
                        width={420}
                        alt="Investment Process"
                    />
                </div>
                <div className="mt-12 px-2 flex flex-col gap-y-8 max-w-[500px]">
                    <div className="flex gap-x-6 items-center">
                        <span className="p-4 bg-[#E2E2E2] rounded-md">1</span>
                        <span className="text-xl font-semibold">Register with email or social logins</span>
                    </div>
                    <div className="flex gap-x-6 items-center">
                        <span className="p-4 rounded-md bg-[#8686F5] text-white">2</span>
                        <div>
                            <span className="text-xl font-semibold text-[#8686F5]">Complete KYC & Bank details</span>
                            <p className="text-[#6E6E73] text-sm">Get on a Quick 15 mins Zoom Call with our Experts to understand the Process & Terms for Selections & Investment.</p>
                        </div>
                    </div>
                    <div className="flex gap-x-6 items-center">
                        <span className="p-4 bg-[#E2E2E2] rounded-md">3</span>
                        <span className="text-xl font-semibold">Start investing in start ups</span>
                    </div>
                    <Button type="primary" className="px-8 bg-[#8686F5] lg:w-min">Fill out the application now</Button>
                </div>
            </div>
        </div>
    )
}