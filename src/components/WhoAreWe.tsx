import { Button } from "antd";
import Image from "next/image";

export default function WhoAreWe() {
    return (
        <div className="lg:px-32 mt-12 sm:mt-32 flex flex-col lg:flex-row text-center lg:text-left items-center gap-6 lg:gap-16">
            <div className="sm:hidden">
                <Image
                    src='/who_are_we.png'
                    width={300}
                    height={220}
                    alt="who_are_we"
                />
            </div>
            <div className="hidden sm:block">
                <Image
                    src='/who_are_we.png'
                    width={600}
                    height={400}
                    alt="who_are_we"
                />
            </div>
            <div className="px-6">
                <h2 className="text-3xl sm:text-5xl text-balance">Who are we?</h2>
                <p className="text-sm text-balance">Bizdateup is a Startup Investment platform which enables Investors like you to explore and invest in groundbreaking & Highly-Profitable Indian startup ventures starting at ₹50,000.</p>
                <Button type="primary" className="px-12 mt-6 sm:mt-0 w-[100%] sm:w-min bg-[#8686F5]">Get Started</Button>
            </div>
        </div>
    )
}