import { Button } from "antd";

const Reasons = [
    {
        id: 5,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
            <g clipPath="url(#clip0_301_16439)">
                <path d="M20.2266 11.7768H26.7788L23.5027 7.40869L20.2266 11.7768ZM20.2266 16.145H26.7788L23.5027 20.5131L20.2266 16.145Z" fill="#8686F5" fillOpacity="0.47" />
                <path d="M1.66235 0.856445H8.21455V27.0653H1.66235C1.37272 27.0653 1.09496 26.9502 0.890161 26.7454C0.685365 26.5406 0.570312 26.2629 0.570312 25.9732V1.94848C0.570312 1.65885 0.685365 1.38109 0.890161 1.17629C1.09496 0.971498 1.37272 0.856445 1.66235 0.856445Z" fill="#8686F5" />
                <path d="M10.3984 0.856445H16.9506C17.2403 0.856445 17.518 0.971498 17.7228 1.17629C17.9276 1.38109 18.0427 1.65885 18.0427 1.94848V25.9732C18.0427 26.2629 17.9276 26.5406 17.7228 26.7454C17.518 26.9502 17.2403 27.0653 16.9506 27.0653H10.3984V0.856445Z" fill="#8686F5" />
            </g>
            <defs>
                <clipPath id="clip0_301_16439">
                    <rect width="26.2088" height="26.2088" fill="white" transform="translate(0.570312 0.856445)" />
                </clipPath>
            </defs>
        </svg>),
        title: 'Exceptional Return on Investment (ROI)',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 6,
        icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <path id="Vector" d="M4.33203 0.333496H29.6654L25.6654 8.3335H0.332031L4.33203 0.333496Z" fill="#8686F5" />
                <path id="Vector_2" d="M4.33203 11H29.6654L25.6654 19H0.332031L4.33203 11Z" fill="#DBDBFC" />
                <path id="Vector_3" d="M4.33203 21.667H29.6654L25.6654 29.667H0.332031L4.33203 21.667Z" fill="#8686F5" />
            </g>
        </svg>),
        title: 'Portfolio Enhancement and Profitability',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 7,
        icon: (<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <path id="Vector" d="M15.2064 0.175931L0.779694 6.91593C0.682133 6.96067 0.599485 7.0325 0.541588 7.12288C0.483691 7.21325 0.452985 7.31836 0.453125 7.42569C0.453266 7.53302 0.484246 7.63805 0.542379 7.72827C0.600513 7.8185 0.683349 7.89011 0.781027 7.9346L15.321 14.6253C15.7504 14.8226 16.2464 14.8226 16.6757 14.6253L31.2157 7.9346C31.3134 7.89024 31.3964 7.81873 31.4546 7.72859C31.5129 7.63844 31.544 7.53345 31.5443 7.42612C31.5445 7.31879 31.514 7.21364 31.4562 7.12319C31.3984 7.03274 31.3159 6.9608 31.2184 6.91593L16.7904 0.175931C16.5424 0.0600563 16.2721 0 15.9984 0C15.7247 0 15.4543 0.0600563 15.2064 0.175931Z" fill="#8686F5" />
                <path id="Vector_2" opacity="0.64" d="M31.219 15.5679L28.239 14.1759C28.0256 14.0761 27.793 14.0241 27.5575 14.0234C27.3219 14.0228 27.089 14.0734 26.875 14.1719L16.6764 18.8652C16.4639 18.9629 16.2329 19.0135 15.999 19.0135C15.7652 19.0135 15.5341 18.9629 15.3217 18.8652L5.1217 14.1719C4.90788 14.0736 4.67524 14.0231 4.43992 14.0237C4.20461 14.0244 3.97227 14.0763 3.75903 14.1759L0.779029 15.5679C0.681526 15.6127 0.598972 15.6847 0.541193 15.7751C0.483414 15.8656 0.452846 15.9707 0.453127 16.0781C0.453408 16.1854 0.484525 16.2904 0.542777 16.3805C0.601029 16.4707 0.683961 16.5422 0.781697 16.5865L15.3217 23.2759C15.534 23.3741 15.7651 23.4249 15.999 23.4249C16.2329 23.4249 16.4641 23.3741 16.6764 23.2759L31.2164 16.5865C31.3141 16.5422 31.397 16.4707 31.4553 16.3805C31.5135 16.2904 31.5447 16.1854 31.5449 16.0781C31.5452 15.9707 31.5146 15.8656 31.4569 15.7751C31.3991 15.6847 31.3165 15.6127 31.219 15.5679Z" fill="#8686F5" fillOpacity="0.47" />
                <path id="Vector_3" d="M31.2176 24.1441L28.2376 22.7521C28.0242 22.6524 27.7916 22.6004 27.556 22.5997C27.3205 22.599 27.0876 22.6496 26.8736 22.7481L16.6749 27.4401C16.4625 27.5378 16.2314 27.5883 15.9976 27.5883C15.7638 27.5883 15.5327 27.5378 15.3202 27.4401L5.12024 22.7468C4.90643 22.6485 4.67378 22.5979 4.43847 22.5986C4.20316 22.5993 3.97081 22.6512 3.75758 22.7507L0.777577 24.1441C0.68045 24.1891 0.598267 24.261 0.540763 24.3513C0.48326 24.4416 0.452846 24.5465 0.453127 24.6536C0.453408 24.7607 0.484371 24.8654 0.542348 24.9554C0.600324 25.0454 0.682883 25.1169 0.780245 25.1614L15.3202 31.8521C15.7496 32.0494 16.2456 32.0494 16.6749 31.8521L31.2149 25.1614C31.3123 25.1169 31.3948 25.0454 31.4528 24.9554C31.5108 24.8654 31.5417 24.7607 31.542 24.6536C31.5423 24.5465 31.5119 24.4416 31.4544 24.3513C31.3969 24.261 31.3147 24.1891 31.2176 24.1441Z" fill="#8686F5" />
            </g>
        </svg>),
        title: 'Early Investment Means More Money',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
        id: 8,
        icon: (<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <path id="Vector" d="M29.6654 7.00016V1.66683C29.6654 1.31321 29.5249 0.974068 29.2748 0.724019C29.0248 0.473971 28.6857 0.333496 28.332 0.333496H1.66536C1.31174 0.333496 0.972603 0.473971 0.722555 0.724019C0.472506 0.974068 0.332031 1.31321 0.332031 1.66683V7.00016H29.6654Z" fill="#8686F5" />
                <path id="Vector_2" d="M0.332031 9.66699V28.3337C0.332031 28.6873 0.472506 29.0264 0.722555 29.2765C0.972603 29.5265 1.31174 29.667 1.66536 29.667H8.33203V9.66699H0.332031Z" fill="#8686F5" fillOpacity="0.47" />
                <path id="Vector_3" d="M11 29.667H28.3333C28.687 29.667 29.0261 29.5265 29.2761 29.2765C29.5262 29.0264 29.6667 28.6873 29.6667 28.3337V9.66699H11V29.667Z" fill="#8686F5" />
            </g>
        </svg>
        ),
        title: 'Impact Investment - Change World',
        desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
]

export default function ReasonToInvest(){
    return (
        <div className="mt-20 sm:mt-28 md:px-12 px-8 flex flex-col items-center">
            <h3 className="text-3xl sm:text-5xl text-center sm:px-20">Why you should invest in startups now and become an <span className="text-[#8686F5]">Angel Investor.</span> </h3>
            <div className="flex gap-x-2 sm:mt-6 mb-12">
                {Reasons.map((reason) => (
                    <div key={reason.id} className="ring-1 ring-slate-400 rounded-xl p-4 m-2 w-[296px] sm:w-fit">
                        <div>{reason.icon}</div>
                        <p className="text-2xl sm:text-3xl font-bold text-balance">{reason.title}</p>
                        <p className="text-sm">{reason.desc}</p>
                    </div>
                ))}
            </div>
            <Button type="primary" className="px-8 bg-[#8686F5]">Apply now to become an Angel investor</Button>
        </div>
    )
}