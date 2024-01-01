import Image from "next/image";
import Link from "next/link";

const Links = [
    {
        id: 20,
        title: 'Platform',
        link: {
            a: {
                name: 'Invest',
                href: '/Invest'
            },
            b: {
                name: 'Raise fund',
                href: '/Raisefund'
            },
            c: {
                name: 'Steps to Invest',
                href: '/StepstoInvest'
            },
            d: {
                name: 'How to raise',
                href: '/Howtoraise'
            },
            e: {
                name: 'How to raise',
                href: '/Howtoraise'
            },
            f: {
                name: 'Membership',
                href: '/Membership'
            },
        }
    },
    {
        id: 21,
        title: 'Bizdateup',
        link: {
            a: {
                name: 'About us',
                href: '/Aboutus'
            },
            b: {
                name: 'Contact us',
                href: '/Contactus'
            },
            c: {
                name: 'Learn',
                href: '/Learn'
            },
            d: {
                name: 'FAQs',
                href: '/FAQs'
            },
            e: {
                name: 'Media & Press',
                href: '/MediaPress'
            },
            f: {
                name: 'Careers',
                href: '/Careers'
            },
        }
    },
    {
        id: 22,
        title: 'Quick links',
        link: {
            a: {
                name: 'Calculators',
                href: '/Calculators'
            },
            b: {
                name: 'Blogs',
                href: '/Blogs'
            },
            c: {
                name: 'In News',
                href: '/InNews'
            },
            d: {
                name: 'Upcoming Demos',
                href: '/UpcomingDemos'
            },
            e: {
                name: 'Join Community',
                href: '/JoinCommunity'
            },
            f: {
                name: 'Book One-to-one',
                href: '/BookOne-to-one'
            },
        }
    },
]

export default function Footer() {
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-between lg:px-20 p-4">
                <div className="flex">
                    <Image
                        src='/logo.png'
                        height={50}
                        width={200}
                        alt="Logo"
                        className="bg-white"
                    />
                </div>
                <div className="flex gap-x-6 mt-4 sm:mt-0">
                    <Link href='https://instagram.com' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                            <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.5 19.5C0.5 8.73045 9.23045 0 20 0C30.7696 0 39.5 8.73045 39.5 19.5C39.5 30.2696 30.7696 39 20 39C9.23045 39 0.5 30.2696 0.5 19.5Z" fill="#8686F5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.0025 9.1001C17.178 9.1001 16.8236 9.11245 15.7142 9.16293C14.607 9.21363 13.8513 9.38892 13.19 9.6461C12.506 9.91174 11.9258 10.2671 11.3477 10.8454C10.7692 11.4234 10.4139 12.0037 10.1474 12.6875C9.88952 13.349 9.71401 14.1049 9.66418 15.2117C9.61456 16.321 9.60156 16.6757 9.60156 19.5002C9.60156 22.3247 9.61413 22.6781 9.6644 23.7874C9.71531 24.8946 9.8906 25.6504 10.1476 26.3116C10.4134 26.9957 10.7688 27.5759 11.347 28.154C11.9249 28.7325 12.5051 29.0887 13.1887 29.3543C13.8504 29.6115 14.6064 29.7868 15.7134 29.8375C16.8227 29.888 17.177 29.9003 20.0012 29.9003C22.826 29.9003 23.1793 29.888 24.2887 29.8375C25.3959 29.7868 26.1525 29.6115 26.8142 29.3543C27.498 29.0887 28.0774 28.7325 28.6552 28.154C29.2337 27.5759 29.5891 26.9957 29.8556 26.3118C30.1112 25.6504 30.2867 24.8944 30.3387 23.7877C30.3886 22.6783 30.4016 22.3247 30.4016 19.5002C30.4016 16.6757 30.3886 16.3212 30.3387 15.2119C30.2867 14.1047 30.1112 13.349 29.8556 12.6877C29.5891 12.0037 29.2337 11.4234 28.6552 10.8454C28.0767 10.2669 27.4982 9.91152 26.8135 9.6461C26.1505 9.38892 25.3943 9.21363 24.2872 9.16293C23.1778 9.11245 22.8247 9.1001 19.9993 9.1001H20.0025ZM19.0695 10.9743C19.3464 10.9738 19.6554 10.9743 20.0025 10.9743C22.7793 10.9743 23.1084 10.9842 24.205 11.0341C25.219 11.0804 25.7694 11.2499 26.136 11.3922C26.6213 11.5807 26.9673 11.806 27.3311 12.1701C27.6951 12.5341 27.9204 12.8807 28.1094 13.3661C28.2517 13.7322 28.4214 14.2826 28.4675 15.2966C28.5174 16.3929 28.5282 16.7223 28.5282 19.4978C28.5282 22.2733 28.5174 22.6027 28.4675 23.699C28.4212 24.713 28.2517 25.2634 28.1094 25.6295C27.9209 26.1149 27.6951 26.4605 27.3311 26.8242C26.9671 27.1882 26.6215 27.4136 26.136 27.6021C25.7698 27.7451 25.219 27.9141 24.205 27.9605C23.1087 28.0103 22.7793 28.0211 20.0025 28.0211C17.2254 28.0211 16.8963 28.0103 15.8 27.9605C14.786 27.9137 14.2356 27.7442 13.8688 27.6019C13.3835 27.4134 13.0368 27.188 12.6728 26.824C12.3088 26.46 12.0835 26.1142 11.8945 25.6287C11.7522 25.2625 11.5825 24.7122 11.5364 23.6981C11.4865 22.6018 11.4766 22.2725 11.4766 19.4952C11.4766 16.7179 11.4865 16.3903 11.5364 15.294C11.5827 14.28 11.7522 13.7296 11.8945 13.363C12.083 12.8777 12.3088 12.531 12.6728 12.167C13.0368 11.803 13.3835 11.5777 13.8688 11.3887C14.2354 11.2457 14.786 11.0767 15.8 11.0302C16.7594 10.9868 17.1312 10.9738 19.0695 10.9717V10.9743ZM25.554 12.7011C24.865 12.7011 24.306 13.2595 24.306 13.9487C24.306 14.6377 24.865 15.1967 25.554 15.1967C26.243 15.1967 26.802 14.6377 26.802 13.9487C26.802 13.2597 26.243 12.7011 25.554 12.7011ZM20.0026 14.1593C17.053 14.1593 14.6617 16.5507 14.6617 19.5002C14.6617 22.4497 17.053 24.84 20.0026 24.84C22.9521 24.84 25.3426 22.4497 25.3426 19.5002C25.3426 16.5507 22.9521 14.1593 20.0026 14.1593ZM20.0025 16.0335C21.917 16.0335 23.4692 17.5855 23.4692 19.5002C23.4692 21.4147 21.917 22.9669 20.0025 22.9669C18.0878 22.9669 16.5358 21.4147 16.5358 19.5002C16.5358 17.5855 18.0878 16.0335 20.0025 16.0335Z" fill="#8686F5" />
                        </svg></Link>
                    <Link href='https://instagram.com' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                            <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.5 19.5C0.5 8.73045 9.23045 0 20 0C30.7696 0 39.5 8.73045 39.5 19.5C39.5 30.2696 30.7696 39 20 39C9.23045 39 0.5 30.2696 0.5 19.5Z" fill="#8686F5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M30.4016 19.4857C30.4016 20.189 30.33 20.8914 30.1893 21.576C30.0522 22.2444 29.8491 22.9006 29.583 23.5278C29.323 24.144 29.0005 24.7378 28.6237 25.2915C28.2525 25.8418 27.8248 26.358 27.3551 26.8286C26.8843 27.2971 26.3663 27.7236 25.8163 28.0964C25.2608 28.4706 24.6661 28.7926 24.0496 29.0538C23.4214 29.3185 22.7637 29.5213 22.0959 29.6582C21.4104 29.7992 20.7054 29.8712 20.0011 29.8712C19.2962 29.8712 18.5913 29.7992 17.9068 29.6582C17.238 29.5213 16.5803 29.3185 15.9526 29.0538C15.3361 28.7926 14.7409 28.4706 14.1853 28.0964C13.6353 27.7236 13.1174 27.2971 12.6476 26.8286C12.1774 26.358 11.7497 25.8418 11.378 25.2915C11.0032 24.7378 10.6802 24.144 10.4192 23.5278C10.1531 22.9006 9.94944 22.2443 9.81181 21.576C9.67268 20.8914 9.60156 20.189 9.60156 19.4857C9.60156 18.7818 9.67264 18.078 9.81185 17.3948C9.94948 16.7265 10.1531 16.0693 10.4192 15.443C10.6802 14.8264 11.0033 14.2321 11.378 13.6783C11.7498 13.1276 12.1774 12.6123 12.6476 12.1412C13.1174 11.6726 13.6354 11.2472 14.1854 10.875C14.7409 10.4992 15.3362 10.1772 15.9527 9.91554C16.5804 9.65027 17.238 9.44695 17.9068 9.31106C18.5914 9.17111 19.2963 9.1001 20.0011 9.1001C20.7055 9.1001 21.4104 9.17111 22.0959 9.31106C22.7637 9.44699 23.4214 9.65031 24.0496 9.91554C24.6661 10.1772 25.2608 10.4992 25.8164 10.875C26.3664 11.2472 26.8844 11.6726 27.3551 12.1412C27.8249 12.6123 28.2525 13.1276 28.6237 13.6783C29.0005 14.2321 29.323 14.8264 29.583 15.443C29.8491 16.0693 30.0522 16.7265 30.1893 17.3948C30.33 18.078 30.4016 18.7818 30.4016 19.4857ZM16.2116 11.4637C13.7348 12.6316 11.8863 14.9105 11.3099 17.657C11.544 17.6591 15.2451 17.7057 19.5094 16.5743C17.9722 13.8471 16.3299 11.6215 16.2116 11.4637ZM20.2453 17.94C15.6722 19.3071 11.284 19.2088 11.1266 19.2027C11.124 19.298 11.1194 19.3903 11.1194 19.4857C11.1194 21.7641 11.9802 23.8412 13.3951 25.4117C13.392 25.4071 15.8226 21.1013 20.6155 19.5536C20.7313 19.5151 20.8491 19.4806 20.9659 19.4471C20.743 18.9431 20.4997 18.438 20.2453 17.94ZM25.8666 12.8294C24.3029 11.4525 22.2498 10.6174 20.0011 10.6174C19.2794 10.6174 18.5791 10.7046 17.9083 10.8659C18.0413 11.0444 19.7096 13.2543 21.2285 16.0393C24.5797 14.7848 25.8447 12.8618 25.8666 12.8294ZM21.5713 20.9167C21.5516 20.9233 21.5318 20.9289 21.5124 20.936C16.2721 22.7602 14.5608 26.4365 14.5423 26.4766C16.0501 27.6475 17.9413 28.354 20.0011 28.354C21.2311 28.354 22.4027 28.1039 23.4686 27.6511C23.3371 26.8762 22.8211 24.1602 21.5713 20.9167ZM24.9642 26.8408C26.9584 25.4969 28.3748 23.363 28.7699 20.8913C28.5871 20.8325 26.1022 20.047 23.2354 20.5059C24.4004 23.7028 24.8738 26.3063 24.9642 26.8408ZM21.9121 17.3609C22.1183 17.7838 22.3179 18.2143 22.5022 18.6469C22.5677 18.8021 22.6317 18.9542 22.6942 19.1063C25.7453 18.723 28.7512 19.368 28.8797 19.3943C28.8594 17.2919 28.1062 15.3623 26.86 13.8517C26.8432 13.8755 25.4188 15.9308 21.9121 17.3609Z" fill="#8686F5" />
                        </svg></Link>
                    <Link href='https://instagram.com' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                            <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.5 19.5C0.5 8.73045 9.23045 0 20 0C30.7696 0 39.5 8.73045 39.5 19.5C39.5 30.2696 30.7696 39 20 39C9.23045 39 0.5 30.2696 0.5 19.5Z" fill="#8686F5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.416 15.8498L19.4569 16.5245L18.7749 16.4419C16.2925 16.1252 14.1237 15.0511 12.2823 13.2472L11.3821 12.3521L11.1502 13.0131C10.6592 14.4865 10.9729 16.0426 11.9959 17.0891C12.5415 17.6675 12.4187 17.7501 11.4776 17.4058C11.1502 17.2957 10.8638 17.2131 10.8365 17.2544C10.741 17.3508 11.0684 18.6039 11.3275 19.0996C11.6822 19.7881 12.4051 20.4628 13.1962 20.8622L13.8646 21.1789L13.0734 21.1927C12.3096 21.1927 12.2823 21.2064 12.3642 21.4956C12.637 22.3907 13.7145 23.3408 14.9148 23.7539L15.7605 24.0431L15.0239 24.4838C13.9328 25.1172 12.6506 25.4752 11.3685 25.5028C10.7547 25.5165 10.25 25.5716 10.25 25.6129C10.25 25.7506 11.9141 26.5218 12.8825 26.8247C15.7878 27.7198 19.2387 27.3342 21.8302 25.8057C23.6716 24.7179 25.513 22.5559 26.3723 20.4628C26.8361 19.3474 27.2998 17.3094 27.2998 16.3318C27.2998 15.6983 27.3407 15.6157 28.1046 14.8583C28.5547 14.4177 28.9775 13.9357 29.0593 13.798C29.1957 13.5364 29.1821 13.5364 28.4865 13.7705C27.3271 14.1836 27.1634 14.1285 27.7363 13.5088C28.1591 13.0682 28.6638 12.2695 28.6638 12.0354C28.6638 11.9941 28.4592 12.063 28.2273 12.1869C27.9818 12.3246 27.4362 12.5312 27.027 12.6551L26.2905 12.8892L25.6221 12.4348C25.2538 12.1869 24.7355 11.9115 24.4627 11.8289C23.7671 11.6361 22.7032 11.6636 22.0757 11.884C20.3708 12.5036 19.2932 14.101 19.416 15.8498Z" fill="#8686F5" />
                        </svg></Link>
                    <Link href='https://instagram.com' target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="39" viewBox="0 0 40 39" fill="none">
                            <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.5 19.5C0.5 8.73045 9.23045 0 20 0C30.7696 0 39.5 8.73045 39.5 19.5C39.5 30.2696 30.7696 39 20 39C9.23045 39 0.5 30.2696 0.5 19.5Z" fill="#8686F5" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M28.1279 12.7964C29.0229 13.042 29.7277 13.7656 29.9669 14.6846C30.4016 16.3501 30.4016 19.8251 30.4016 19.8251C30.4016 19.8251 30.4016 23.3 29.9669 24.9656C29.7277 25.8846 29.0229 26.6082 28.1279 26.8539C26.5059 27.3001 20.0016 27.3001 20.0016 27.3001C20.0016 27.3001 13.4972 27.3001 11.8751 26.8539C10.9802 26.6082 10.2753 25.8846 10.0361 24.9656C9.60156 23.3 9.60156 19.8251 9.60156 19.8251C9.60156 19.8251 9.60156 16.3501 10.0361 14.6846C10.2753 13.7656 10.9802 13.042 11.8751 12.7964C13.4972 12.3501 20.0016 12.3501 20.0016 12.3501C20.0016 12.3501 26.5059 12.3501 28.1279 12.7964ZM18.0516 16.9V23.4L23.2516 20.1502L18.0516 16.9Z" fill="#8686F5" />
                        </svg></Link>
                </div>
            </div>
            <div className="lg:px-20 p-4">
                <div className="flex flex-col lg:flex-row justify-between gap-x-32">
                    <div className="flex gap-x-8 flex-col sm:flex-row lg:flex-col">
                        <div className="max-w-[383px]">
                            <h6 className="text-xl mb-0">Registered office</h6>
                            <p className="text-xs text-[#6E6E73]">G2, Empire Business Centre, Empire Complex, 414 Senapati Bapat Marg, Delisle Rd, near shreeniwas mill, Lower Parel, Mumbai, Maharashtra, 400013 </p>
                            <p className="text-xs text-[#6E6E73]">CIN U72900MH2022379408</p>
                        </div>
                        <div>
                            <h6 className="text-xl mb-0">Contact</h6>
                            <p className="text-xs text-[#8686F5]"><a href="mailto:support@bizdateup.com">support@bizdateup.com</a></p>
                            <p className="text-xs"><a href="tel:+91-9587566666">+91-9587566666</a></p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between grow">
                        {Links.map((data) => (
                            <div key={data.id} className="flex flex-col gap-y-4">
                                <h6 className="text-xl mb-0">{data.title}</h6>
                                {Object.values(data.link).map((items, index) => (
                                    <Link key={index} href={items.href} className="text-xs text-[#6E6E73]">{items.name}</Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 mb-0 flex flex-col md:flex-row gap-8 lg:items-center justify-between text-xs text-[#6E6E73]">
                    <div className="grid grid-cols-2 lg:grid-cols-5 justify-between gap-8">
                        <Link href='/' target="_blank">Privacy Policy</Link>
                        <Link href='/' target="_blank">Risk of Investment</Link>
                        <Link href='/' target="_blank">Terms of Use</Link>
                        <Link href='/' target="_blank">Refund Policy</Link>
                        <Link href='/' target="_blank">Cancellation Policy</Link>
                    </div>
                    <div>
                        <p className="text-[#260F53]">Bizdateup Pvt Ltd • 2023 All Rights Reserved</p>
                    </div>
                </div>

                <div className="text-center lg:text-left">
                    <h6 className="text-xl mb-0">Disclaimer</h6>
                    <p className="text-xs text-[#6E6E73]">All trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely being used for informational purposes. Information provided herein has been gathered from public sources. Bizdateup Technologies Pvt Ltd disclaims any and all responsibility in connection with veracity of this data. Information presented on this website is for educational purposes only and should not be treated as legal, financial , or any other form of advice. Bizdateup Technologies Pvt Ltd is not liable for financial or any other form of loss incurred by the user or any affiliated party on the basis of information provided herein. Bizdateup Technologies Pvt Ltd is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. Bizdateup Technologies Pvt Ltd is not authorized by the capital markets regulator to solicit investments. The securities traded on these platforms are not traded on any regulated exchange. Bizdateup also provides that it does not facilitate any online or offline buying, selling, or trading of securities.<br /> <br />This Site will be updated on a regular basis.</p>
                </div>
            </div>
        </>

    )
}