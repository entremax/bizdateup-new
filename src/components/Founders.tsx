import { Button } from "antd";
import Image from "next/image";

export default function Founders() {
    return (
        <div className="flex flex-col lg:flex-row gap-x-2 lg:items-center px-6 lg:px-32 mt-20 lg:-mt-20">
            <div>
                <p className="text-zinc-700/70 text-xl font-semibold text-center lg:text-left">For Founders</p>
                <h6 className="text-3xl sm:text-5xl -mt-4 text-balance text-center lg:text-left">Raising a round is not easy, but <span className="text-[#8686F5]">Bizdateup</span> has made it easier.</h6>
                <p className="-mt-10 sm:-mt-20 text-center lg:text-left">Whether it&apos;s crowdfunding, raising privately or a discount pool, find out how we can accommodate your fundraising needs.</p>
                <div className="text-center lg:text-left">
                    <Button type="primary" className="px-12 bg-[#8686F5] w-full sm:w-[274px] lg:w-min">Register</Button>
                </div>
            </div>
            <div className="sm:hidden mx-auto -mt-20">
                <Image
                    src='/Founders.png'
                    height={410}
                    width={327}
                    alt="Founders"
                />
            </div>
            <div className="hidden sm:block lg:hidden mx-auto -mt-20">
                <Image
                    src='/Founders.png'
                    height={560}
                    width={477}
                    alt="Founders"
                />
            </div>
            <div className="hidden xl:hidden lg:block">
                <Image
                    src='/Founders.png'
                    height={585}
                    width={427}
                    alt="Founders"
                />
            </div>
            <div className="hidden xl:block">
                <Image
                    src='/Founders.png'
                    height={785}
                    width={627}
                    alt="Founders"
                />
            </div>
        </div>
    )
}