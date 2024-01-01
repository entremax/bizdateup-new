import Image from "next/image";
import Button from "./Button";

export default function Founders() {
    return (
        <div className="mt-[60px] px-[19px] flex flex-col justify-between lg:px-[158px] lg:flex-row">
            <div className="mb-0 lg:w-[593px] pt-24">
                <p className="text-zinc-700/70 text-[18px] lg:text-[26px] font-semibold text-center lg:text-left lg:mb-[12px]">For Founders</p>
                <h6 className="text-[30px] lg:text-[46px] text-center lg:text-left mt-0 leading-[36px] lg:leading-tight mb-0">Raising a round is not easy, but <span className="text-[#8686F5]">Bizdateup</span> has made it easier.</h6>
                <p className="text-[15px] leading-[20px] text-center lg:text-left mt-[18px]">Whether it&apos;s crowdfunding, raising privately or a discount pool, find out how we can accommodate your fundraising needs.</p>
                <Button className="md:w-fit text-[16px] md:px-[100px] mb-0" title="Register" />
            </div>
            <div className="mt-0 lg:[mt-49px]">
                <picture>
                    <img src="/Founder.png" alt="Founders" width='100%' height='auto' />
                </picture>
            </div>
        </div>
    )
}