import { Button } from "antd";
import Image from "next/image";

const Stats = [
    {
        id: 1,
        title: '12+',
        desc: 'Startups Funded'
    },
    {
        id: 2,
        title: '4000+',
        desc: 'Strong Community'
    },
    {
        id: 3,
        title: '500+',
        desc: 'Active Investors'
    },
    {
        id: 4,
        title: '10CR+',
        desc: 'Total Funding'
    },
]

export default function TopSection() {
    return (
        <>
            <div className="mt-20 sm:mt-32 md:px-20 flex flex-col-reverse items-center lg:flex-row">
                <div className="px-6">
                    <h1 className="text-3xl md:text-5xl text-balance max-w-[786px]">Invest in Top 1% Indian Startups & Become a <span className="text-[#8686F5]">Super Angel!</span>
                    </h1>
                    <p className="max-w-[554px] text-sm text-balance">We are an Investment platform which enables Investors like you to explore and invest in groundbreaking & Highly-Profitable Indian startup ventures starting at ₹50,000.</p>
                    <Button type="primary" className="px-12 mt-4 sm:mt-0 w-[100%] sm:w-min bg-[#8686F5]">Sign up Now</Button>
                </div>
                <div className="hidden sm:block xl:hidden pointer-events-none transform-gpu bg-white">
                    <Image
                        src='/cheerful_women.png'
                        width={500}
                        height={400}
                        quality={100}
                        alt="cheerful-women"
                    />
                </div>
                <div className="hidden xl:block pointer-events-none transform-gpu">
                    <Image
                        src='/cheerful_women.png'
                        width={600}
                        height={500}
                        quality={100}
                        alt="cheerful-women"
                    />
                </div>
                <div className="sm:hidden pointer-events-none transform-gpu">
                    <Image
                        src='/cheerful_women.png'
                        width={400}
                        height={300}
                        quality={100}
                        alt="cheerful-women"
                    />
                </div>
            </div>
            <div className="bg-[#F3F3FA] h-[169px] pb-6 sm:pb-0 mt-8 lg:mt-0 md:px-32 grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-4 text-center md:text-left grid-rows-2">
                {Stats.map((data) => (
                    <div key={data.id}>
                        <p className="text-[#1D1D1F] text-2xl sm:text-3xl font-bold leading-3 sm:leading-4">{data.title}</p>
                        <p className="text-[#9B9BAB] font-semibold">{data.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}