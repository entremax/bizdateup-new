import Button from "./Button"

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
            <div className="mt-[50px] lg:mt-[80px] xl:px-[130px] flex flex-col-reverse items-center lg:flex-row justify-between">
                <div className="mx-[24px] lg:px-0 flex items-center flex-col sm:text-center lg:text-left">
                    <h1 className="mt-10 text-[28px] lg:text-[56px] leading-[33.976px] lg:leading-tight lg:-tracking-[2.16px] font-bold static lg:absolute min-w-[319px] max-w-[824px] max-h-[128px] z-50 lg:start-[2rem] xl:start-[10rem]">Invest in Top 1% Indian Startups & Become a <span className="text-[#8686F5]">Super Angel!</span>
                    </h1>
                    <div className="lg:mt-[200px]">
                        <p className="max-w-[554px] text-[16px] lg:text-[20px] leading-[20px] lg:leading-7 text-balance font-normal">We are an Investment platform which enables Investors like you to explore and invest in groundbreaking & Highly-Profitable Indian startup ventures starting at ₹50,000.</p>
                    </div>
                    <Button title="Sign up Now" />
                </div>
                <div className="mt-10 lg:mt-32 max-w-[600px] max-h-[500px]">
                    <picture>
                        <img src="/cheerful_women.png" alt="cheerful_women" width='100%' height='auto' />
                    </picture>
                </div>
                <div aria-hidden="true" className="pointer-events-none hidden lg:block absolute z-[10] lg:start-[33rem] xl:start-[45rem] lg:top-[1rem] xl:top-[3rem]">
                    <svg width="734" height="734" viewBox="0 0 734 734" fill="none">
                        <path d="M723.898 465H744.598V485.7H723.898V465Z" fill="#3D97FF" />
                        <path d="M630.898 361.7H651.598V341H630.898V361.7Z" fill="#2EC5CE" />
                        <path d="M434.801 144.7H455.501V124H434.801V144.7Z" fill="#F56FB7" />
                        <path d="M155.801 113.7H176.501V93H155.801V113.7Z" fill="#804EDA" />
                    </svg>
                </div>
            </div>
            <div className="bg-[#F3F3FA] mt-16 md:mt-0 px-[40px] py-[38px] max-h-[211px] min-h-[169px] grid grid-cols-2 justify-center md:flex gap-4 items-center md:justify-between xl:px-[200px]">
                {Stats.map((data) => (
                    <div key={data.id} className="flex flex-col sm:items-center gap-y-2 w-[211px] max-w-[265px]">
                        <span className="text-[#1D1D1F] text-[26.779px] md:text-[36px] font-bold tracking-[-0.278px] md:tracking-[-3px]">{data.title}</span>
                        <span className="text-[#9B9BAB] text-[13.39px] md:text-[18px] font-bold tracking-[-0.278px] md:tracking-[-0.4px]">{data.desc}</span>
                    </div>
                ))}
            </div>
        </>
    )
}