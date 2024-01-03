import Button from '@/components/LinkButton'

export default function Opportunities() {
  const data = [
    {
      title: 'Investors',
      icon: ({ ...props }) => (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.25 7.5C11.25 6.11929 12.3693 5 13.75 5H26.25C27.6307 5 28.75 6.11929 28.75 7.5H11.25Z"
            fill="#C6C6FA"
          />
          <path
            d="M7.5 11.25C7.5 9.86929 8.61929 8.75 10 8.75H30C31.3807 8.75 32.5 9.86929 32.5 11.25V12.5H7.5V11.25Z"
            fill="#C6C6FA"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25 13.75C4.86929 13.75 3.75 14.8693 3.75 16.25V33.75C3.75 35.1307 4.86929 36.25 6.25 36.25H33.75C35.1307 36.25 36.25 35.1307 36.25 33.75V16.25C36.25 14.8693 35.1307 13.75 33.75 13.75H6.25Z"
            fill="#8686F5"
          />
          <path
            d="M22.3598 23.1829C22.1813 23.88 21.8466 24.4171 21.3556 24.7943C20.8647 25.16 20.318 25.4286 19.7155 25.6L23.7155 31H20.9707L18.159 27.1429C17.8354 26.6971 17.5397 26.3771 17.272 26.1829C17.0153 25.9771 16.742 25.8743 16.4519 25.8743H16.3013V24.4514H17.2887C17.59 24.4514 17.8801 24.44 18.159 24.4171C18.4491 24.3829 18.7113 24.3257 18.9456 24.2457C19.1911 24.1543 19.4031 24.0286 19.5816 23.8686C19.7713 23.6971 19.9107 23.4686 20 23.1829H16L16.5021 21.6571H20.0335C19.9331 21.2686 19.7266 20.9886 19.4142 20.8171C19.1018 20.6457 18.6778 20.5486 18.1423 20.5257H16L16.5021 19H24L23.4979 20.5257H22.092C22.2706 20.8686 22.3877 21.2457 22.4435 21.6571H24L23.4979 23.1829H22.3598Z"
            fill="white"
          />
        </svg>
      ),
      description:
        'On an average, a startup investor earns 5x to 10x returns easily with a successful startup. Be a part of our prosperous ever growing community. Be a part of our prosperous ever growing community.',
      link: '/invest',
      linkTitle: 'Invest Now',
    },
    {
      title: 'Startups',
      icon: ({ ...props }) => (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0762 27.2948L33.8209 17.5793C35.2244 16.1801 35.926 15.4805 36.2955 14.5909C36.6652 13.7013 36.6652 12.7119 36.6652 10.7332V9.78787C36.6652 6.74514 36.6652 5.22377 35.717 4.2785C34.769 3.33325 33.243 3.33325 30.1912 3.33325H29.243C27.2584 3.33325 26.266 3.33325 25.3737 3.70175C24.4814 4.07025 23.7797 4.76983 22.3764 6.16902L12.6315 15.8846C10.9917 17.5194 9.97488 18.5333 9.58113 19.5124C9.45673 19.8218 9.39453 20.1278 9.39453 20.4486C9.39453 21.7854 10.4735 22.8613 12.6315 25.0128L12.9216 25.3019L16.3191 21.8538C16.8037 21.3619 17.595 21.3561 18.0869 21.8406C18.5785 22.3251 18.5844 23.1166 18.0999 23.6084L14.692 27.0671L14.9205 27.2948C17.0785 29.4464 18.1575 30.5221 19.4984 30.5221C19.7945 30.5221 20.078 30.4696 20.3632 30.3646C21.3687 29.9943 22.395 28.9709 24.0762 27.2948ZM28.6542 15.8853C27.39 17.1456 25.3405 17.1456 24.0764 15.8853C22.8122 14.6249 22.8122 12.5815 24.0764 11.3212C25.3405 10.0608 27.39 10.0608 28.6542 11.3212C29.9184 12.5815 29.9184 14.6249 28.6542 15.8853Z"
            fill="#8686F5"
          />
          <path
            d="M15.0559 9.93841L10.8173 14.1643C10.0382 14.941 9.3235 15.6535 8.7591 16.2976C8.39665 16.7112 8.03445 17.164 7.72765 17.6642L7.68635 17.623C7.60795 17.5448 7.56872 17.5057 7.52935 17.4675C6.79263 16.7527 5.92605 16.1844 4.97597 15.7929C4.9252 15.772 4.87367 15.7516 4.7706 15.7107L4.13952 15.4607C3.28458 15.1219 3.05674 14.0213 3.70727 13.3727C5.57429 11.5114 7.8159 9.27656 8.89772 8.8277C9.85178 8.43185 10.8824 8.30013 11.8764 8.44703C12.7872 8.58163 13.6488 9.04946 15.0559 9.93841Z"
            fill="#DBDBFC"
          />
          <path
            d="M22.293 32.1887C22.6345 32.5354 22.8613 32.7802 23.0665 33.0419C23.337 33.3871 23.579 33.7537 23.7898 34.1382C24.0271 34.5711 24.2115 35.0334 24.5801 35.9581C24.8801 36.7109 25.8771 36.9099 26.4561 36.3326L26.5961 36.1929C28.4631 34.3314 30.7046 32.0966 31.1548 31.0181C31.552 30.0667 31.684 29.0392 31.5366 28.0482C31.4016 27.1402 30.9326 26.2814 30.0411 24.8789L25.7885 29.1189C24.9916 29.9132 24.2611 30.6417 23.6005 31.2122C23.2045 31.5542 22.7713 31.8961 22.293 32.1887Z"
            fill="#DBDBFC"
          />
        </svg>
      ),
      description:
        'On an average, a startup investor earns 5x to 10x returns easily with a successful startup. Be a part of our prosperous ever growing community. Be a part of our prosperous ever growing community.',
      link: '/raise-funds',
      linkTitle: 'Raise funds',
    },
    {
      title: 'Accelerators/Incubators',
      icon: ({ ...props }) => (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <path
            d="M4.5 22.5C4.5 21.2574 5.50736 20.25 6.75 20.25H13.5C14.7426 20.25 15.75 21.2574 15.75 22.5V29.25C15.75 30.4926 14.7426 31.5 13.5 31.5H6.75C5.50736 31.5 4.5 30.4926 4.5 29.25V22.5Z"
            fill="#8686F5"
          />
          <path
            d="M3.375 9C3.375 7.75736 4.38236 6.75 5.625 6.75H13.5C14.7426 6.75 15.75 7.75736 15.75 9V16.875C15.75 18.1176 14.7426 19.125 13.5 19.125H5.625C4.38236 19.125 3.375 18.1176 3.375 16.875V9Z"
            fill="#DBDBFC"
          />
          <path
            d="M16.875 22.5C16.875 21.2574 17.8824 20.25 19.125 20.25H27C28.2426 20.25 29.25 21.2574 29.25 22.5V30.375C29.25 31.6176 28.2426 32.625 27 32.625H19.125C17.8824 32.625 16.875 31.6176 16.875 30.375V22.5Z"
            fill="#DBDBFC"
          />
          <path
            d="M16.875 5.625C16.875 4.38236 17.8824 3.375 19.125 3.375H30.375C31.6176 3.375 32.625 4.38236 32.625 5.625V16.875C32.625 18.1176 31.6176 19.125 30.375 19.125H19.125C17.8824 19.125 16.875 18.1176 16.875 16.875V5.625Z"
            fill="#8686F5"
          />
        </svg>
      ),
      description:
        'On an average, a startup investor earns 5x to 10x returns easily with a successful startup. Be a part of our prosperous ever growing community. Be a part of our prosperous ever growing community.',
      link: '/referral',
      linkTitle: 'Join Now',
    },
    {
      title: 'Syndicate Investors',
      icon: ({ ...props }) => (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <path
            d="M18.75 25.625C18.75 28.0412 16.7912 30 14.375 30C11.9588 30 10 28.0412 10 25.625C10 23.2088 11.9588 21.25 14.375 21.25C16.7912 21.25 18.75 23.2088 18.75 25.625Z"
            fill="#DBDBFC"
          />
          <path
            d="M30 25.625C30 28.0412 28.0412 30 25.625 30C23.2088 30 21.25 28.0412 21.25 25.625C21.25 23.2088 23.2088 21.25 25.625 21.25C28.0412 21.25 30 23.2088 30 25.625Z"
            fill="#DBDBFC"
          />
          <path
            d="M2.5 16.875C2.5 15.8395 3.33947 15 4.375 15H35.625C36.6605 15 37.5 15.8395 37.5 16.875C37.5 17.9105 36.6605 18.75 35.625 18.75H4.375C3.33947 18.75 2.5 17.9105 2.5 16.875Z"
            fill="#8686F5"
          />
          <path
            d="M12.5 3.75C11.8096 3.75 11.25 4.30964 11.25 5V13.75H28.75V5C28.75 4.30964 28.1904 3.75 27.5 3.75H12.5Z"
            fill="#8686F5"
          />
          <path
            d="M15 35C15 34.3096 15.5596 33.75 16.25 33.75H23.75C24.4404 33.75 25 34.3096 25 35C25 35.6904 24.4404 36.25 23.75 36.25H16.25C15.5596 36.25 15 35.6904 15 35Z"
            fill="#DBDBFC"
          />
        </svg>
      ),
      link: '/invest',
      description:
        'On an average, a startup investor earns 5x to 10x returns easily with a successful startup. Be a part of our prosperous ever growing community. Be a part of our prosperous ever growing community.',
      linkTitle: 'Invest Now',
    },
  ]
  return (
    <section
      className={'my-28 flex flex-col items-center justify-center xl:my-32'}>
      <h4 className="mx-auto text-center text-4xl xl:w-2/4">
        360 degree Opportunities For the entire Startup Ecosystem.
      </h4>
      <div className="mx-4 my-8 grid w-full grid-cols-2 gap-4 lg:mx-16 lg:w-3/4 xl:mx-32 xl:mt-16 xl:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.title}
            className={
              'border_gray col-span-1 flex min-h-[35vh] flex-col gap-3 rounded-xl p-4'
            }>
            <item.icon />
            <h5 className="text-2xl">{item.title}</h5>
            <p className="text-sm text-[#BABABA]">{item.description}</p>
            <div className="grow" />
            <Button
              href={item.link}
              className={'!bg-light-shadow !text-primary'}>
              {item.linkTitle}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
