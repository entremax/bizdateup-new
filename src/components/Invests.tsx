import Button from "./Button"

const Invest = [
    {
        id: 9,
        icon: (<svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <path id="Vector" d="M28.5 36H15C14.6022 36 14.2206 35.842 13.9393 35.5607C13.658 35.2794 13.5 34.8978 13.5 34.5V31.5C13.5 31.1022 13.658 30.7206 13.9393 30.4393C14.2206 30.158 14.6022 30 15 30H28.5C28.8978 30 29.2794 30.158 29.5607 30.4393C29.842 30.7206 30 31.1022 30 31.5V34.5C30 34.8978 29.842 35.2794 29.5607 35.5607C29.2794 35.842 28.8978 36 28.5 36Z" fill="#B3B3F9" />
                <path id="Vector_2" d="M28.5 0H1.5C1.10218 0 0.720643 0.158034 0.439339 0.439339C0.158034 0.720643 0 1.10218 0 1.5V4.5C0 4.89782 0.158034 5.27936 0.439339 5.56066C0.720643 5.84197 1.10218 6 1.5 6H28.5C28.8978 6 29.2794 5.84197 29.5607 5.56066C29.842 5.27936 30 4.89782 30 4.5V1.5C30 1.10218 29.842 0.720643 29.5607 0.439339C29.2794 0.158034 28.8978 0 28.5 0Z" fill="#B3B3F9" />
                <path id="Vector_3" d="M28.5 9H1.5C1.10218 9 0.720643 9.15803 0.439339 9.43934C0.158034 9.72064 0 10.1022 0 10.5V25.5C0 25.8978 0.158034 26.2794 0.439339 26.5607C0.720643 26.842 1.10218 27 1.5 27H28.5C28.8978 27 29.2794 26.842 29.5607 26.5607C29.842 26.2794 30 25.8978 30 25.5V10.5C30 10.1022 29.842 9.72064 29.5607 9.43934C29.2794 9.15803 28.8978 9 28.5 9Z" fill="#8686F5" />
            </g>
        </svg>
        ),
        title: 'Start with just ₹50,000',
        desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
    },
    {
        id: 10,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M13.5 15H3C2.60218 15 2.22064 14.842 1.93934 14.5607C1.65803 14.2794 1.5 13.8978 1.5 13.5V3C1.5 2.60218 1.65803 2.22064 1.93934 1.93934C2.22064 1.65803 2.60218 1.5 3 1.5H13.5C13.8978 1.5 14.2794 1.65803 14.5607 1.93934C14.842 2.22064 15 2.60218 15 3V13.5C15 13.8978 14.842 14.2794 14.5607 14.5607C14.2794 14.842 13.8978 15 13.5 15Z" fill="#8686F5" />
            <path d="M13.5 34.5H3C2.60218 34.5 2.22064 34.342 1.93934 34.0607C1.65803 33.7794 1.5 33.3978 1.5 33V22.5C1.5 22.1022 1.65803 21.7206 1.93934 21.4393C2.22064 21.158 2.60218 21 3 21H13.5C13.8978 21 14.2794 21.158 14.5607 21.4393C14.842 21.7206 15 22.1022 15 22.5V33C15 33.3978 14.842 33.7794 14.5607 34.0607C14.2794 34.342 13.8978 34.5 13.5 34.5Z" fill="#8686F5" />
            <path d="M19.5 3H34.5V6H19.5V3Z" fill="#B3B3F9" />
            <path d="M34.5 22.5H19.5V25.5H34.5V22.5Z" fill="#B3B3F9" />
            <path d="M34.5 30H19.5V33H34.5V30Z" fill="#8686F5" />
            <path d="M34.5 10.5H19.5V13.5H34.5V10.5Z" fill="#8686F5" />
        </svg>),
        title: 'Easy to use',
        desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
    },
    {
        id: 11,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M7.5 1.5H3C2.60218 1.5 2.22064 1.65803 1.93934 1.93934C1.65803 2.22064 1.5 2.60218 1.5 3V33C1.5 33.3978 1.65803 33.7794 1.93934 34.0607C2.22064 34.342 2.60218 34.5 3 34.5H7.5V1.5Z" fill="#B3B3F9" />
            <path d="M10.5 34.5H25.5V1.5H10.5V34.5ZM18 28.5C17.6022 28.5 17.2206 28.342 16.9393 28.0607C16.658 27.7794 16.5 27.3978 16.5 27C16.5 26.6022 16.658 26.2206 16.9393 25.9393C17.2206 25.658 17.6022 25.5 18 25.5C18.3978 25.5 18.7794 25.658 19.0607 25.9393C19.342 26.2206 19.5 26.6022 19.5 27C19.5 27.3978 19.342 27.7794 19.0607 28.0607C18.7794 28.342 18.3978 28.5 18 28.5ZM18 7.5C18.3978 7.5 18.7794 7.65803 19.0607 7.93934C19.342 8.22064 19.5 8.60218 19.5 9C19.5 9.39782 19.342 9.77936 19.0607 10.0607C18.7794 10.342 18.3978 10.5 18 10.5C17.6022 10.5 17.2206 10.342 16.9393 10.0607C16.658 9.77936 16.5 9.39782 16.5 9C16.5 8.60218 16.658 8.22064 16.9393 7.93934C17.2206 7.65803 17.6022 7.5 18 7.5ZM18 16.5C18.3978 16.5 18.7794 16.658 19.0607 16.9393C19.342 17.2206 19.5 17.6022 19.5 18C19.5 18.3978 19.342 18.7794 19.0607 19.0607C18.7794 19.342 18.3978 19.5 18 19.5C17.6022 19.5 17.2206 19.342 16.9393 19.0607C16.658 18.7794 16.5 18.3978 16.5 18C16.5 17.6022 16.658 17.2206 16.9393 16.9393C17.2206 16.658 17.6022 16.5 18 16.5Z" fill="#8686F5" />
            <rect x="15" y="15" width="7" height="5" fill="#8686F5" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.5368 20C17.3817 20 17.225 19.9416 17.1064 19.8239L15.1785 17.9242C14.9405 17.6896 14.9405 17.3102 15.1785 17.0756C15.4164 16.8411 15.8014 16.8411 16.0393 17.0756L17.5368 18.5502L20.9607 15.1759C21.1986 14.9414 21.5836 14.9414 21.8215 15.1759C22.0595 15.4105 22.0595 15.7899 21.8215 16.0245L17.9673 19.8239C17.8487 19.9416 17.6928 20 17.5368 20Z" fill="white" />
            <path d="M33 1.5H28.5V34.5H33C33.3978 34.5 33.7794 34.342 34.0607 34.0607C34.342 33.7794 34.5 33.3978 34.5 33V3C34.5 2.60218 34.342 2.22064 34.0607 1.93934C33.7794 1.65803 33.3978 1.5 33 1.5Z" fill="#B3B3F9" />
        </svg>
        ),
        title: 'Genuine deals',
        desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
    },
    {
        id: 12,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="38" viewBox="0 0 36 38" fill="none">
            <circle cx="18.7052" cy="9.52941" r="9.52941" fill="#B3B3F9" />
            <path d="M36 20C36 24.7739 34.1036 29.3523 30.7279 32.7279C27.3523 36.1036 22.7739 38 18 38C13.2261 38 8.64773 36.1036 5.27208 32.7279C1.89642 29.3523 7.20839e-07 24.7739 0 20L18 20H36Z" fill="#8686F5" />
        </svg>
        ),
        title: 'Flexibility at its best',
        desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
    },
    {
        id: 13,
        icon: (<svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group">
                <path id="Vector" d="M35.4 0.800001C35.1 0.500001 34.5 0.5 34.05 0.5L25.5 3.05V33.2L34.95 30.5C35.55 30.35 36 29.75 36 29V2C36 1.55 35.85 1.1 35.4 0.800001Z" fill="#8686F5" />
                <path id="Vector_2" d="M22.5 3.05005L13.5 0.800049V30.95L22.5 33.2V3.05005Z" fill="#B3B3F9" />
                <path id="Vector_3" d="M10.5 0.800049L1.05 3.50005C0.450001 3.80005 0 4.40005 0 5.00005V32C0 32.45 0.149999 32.9 0.599999 33.2C0.899999 33.35 1.2 33.5 1.5 33.5H1.95L10.5 30.95V0.800049Z" fill="#8686F5" />
            </g>
        </svg>

        ),
        title: 'High growth deals',
        desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
    },
    {
        id: 14,
        icon: (<svg xmlns="http://www.w3.org/2000/svg" width="47" height="31" viewBox="0 0 47 31" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.1776 0C39.4019 0 46.3551 15.5 46.3551 15.5C46.3551 15.5 39.4019 31 23.1776 31C6.95327 31 0 15.5 0 15.5C0 15.5 6.95327 0 23.1776 0ZM23.1776 8.71875C18.6974 8.71875 15.0654 11.7549 15.0654 15.5C15.0654 19.2451 18.6974 22.2812 23.1776 22.2812C27.6577 22.2812 31.2897 19.2451 31.2897 15.5C31.2897 11.7549 27.6577 8.71875 23.1776 8.71875ZM23.1776 18.4062C21.2606 18.4062 19.7009 17.1025 19.7009 15.5C19.7009 13.8975 21.2606 12.5938 23.1776 12.5938C25.0946 12.5938 26.6542 13.8975 26.6542 15.5C26.6542 17.1025 25.0946 18.4062 23.1776 18.4062Z" fill="#8686F5" />
        </svg>
        ),
        title: 'Transparent & Trustworthy',
        desc: 'The minimum investment starts from just ₹50000 which is 100 times lower than typical angel investments enabling you to invest in more companies, just like the pros.'
    },
]

export default function Invests() {
    return (
        <div className="px-[20px] mt-[131px]">
            <h6 className="text-[30px] lg:text-[46px] text-center font-bold leading-[36px] lg:leading-[52px] lg:px-[250px] xl:px-[414px]">But, Why should you Invest through <span className="text-[#8686F5]">Bizdateup?</span></h6>
            <div className="mt-[40px] flex gap-[12px] flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[22px] lg:px-[80px]">
                {Invest.map((reason) => (
                    <div key={reason.id} className="ring-1 ring-[#EAE9E8] rounded-[17.734px] pt-[27px] lg:pt-[33px] px-[16px] lg:px-[21px] pb-[17px]">
                        <div>{reason.icon}</div>
                        <p className="text-[22px] font-bold tracking-[-0.368px]">{reason.title}</p>
                        <p className="text-[13px] text-[#6E6E73]">{reason.desc}</p>
                    </div>
                ))}
            </div>
            <Button className="md:w-fit text-[15px] mt-[52px] lg:mt-[41px] mb-[71px] lg:mb-[112px] lg:px-[40px] mx-auto" title="Apply now to become an Angel investor" />
        </div>
    )
}