import Link from 'next/link'
import Button from '@/components/LinkButton'

export default function ConnectWithUs() {
  const contactData = [
    {
      name: 'phone-no',
      value: '9856785577',
      link: 'tel:9856785577',
      icon: ({ ...props }) => (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.09027 9.91334C12.5807 13.4028 13.3726 9.36588 15.5949 11.5867C17.7375 13.7287 18.9689 14.1578 16.2543 16.8716C15.9143 17.1449 13.7539 20.4325 6.16153 12.8422C-1.43179 5.251 1.85389 3.08839 2.12722 2.74846C4.84838 0.027115 5.27013 1.26571 7.41268 3.40766C9.63507 5.62943 5.59983 6.42386 9.09027 9.91334Z"
            stroke="#8686F5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: 'email',
      value: 'jadhavonkar449@gmail.com',
      link: 'mailto:jadhavonkar449@gmail.com',
      icon: ({ ...props }) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <path
            d="M14.9139 7.37598L11.2112 10.3868C10.5116 10.9418 9.52732 10.9418 8.82774 10.3868L5.09375 7.37598"
            stroke="#8686F5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0881 17.5C16.6226 17.507 18.3307 15.4246 18.3307 12.8653V7.14168C18.3307 4.58235 16.6226 2.5 14.0881 2.5H5.90668C3.37222 2.5 1.66406 4.58235 1.66406 7.14168V12.8653C1.66406 15.4246 3.37222 17.507 5.90668 17.5H14.0881Z"
            stroke="#8686F5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: 'address',
      value:
        'G2, Empire Business Centre, Empire Complex, 414 Senapati Bapat Marg, Delisle Rd, near shreeniwas mill, Lower Parel, Mumbai, Maharashtra, 400013',
      icon: ({ ...props }) => (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2943 9.62563C13.2943 8.35946 12.2683 7.3335 11.0031 7.3335C9.7369 7.3335 8.71094 8.35946 8.71094 9.62563C8.71094 10.8909 9.7369 11.9168 11.0031 11.9168C12.2683 11.9168 13.2943 10.8909 13.2943 9.62563Z"
            stroke="#8686F5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9996 19.25C9.90095 19.25 4.125 14.5735 4.125 9.68302C4.125 5.85442 7.20234 2.75 10.9996 2.75C14.7968 2.75 17.875 5.85442 17.875 9.68302C17.875 14.5735 12.0982 19.25 10.9996 19.25Z"
            stroke="#8686F5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]
  return (
    <div className="flex flex-col gap-8 p-4">
      <h4 className="text-4xl text-primary-dark">Connect With Bizdateup</h4>
      <p className="text-[#828F99]">
        Curious about BizDateUp? Feel free to get in touch with us via our
        social media handles or drop us a message via the contact form.
      </p>
      <div className="flex flex-col gap-4">
        {contactData.map((data, index) =>
          data.link ? (
            <Link
              key={data.name}
              className={'flex items-center gap-3 text-lg'}
              href={data.link}>
              <span className="flex-shrink">
                <data.icon />
              </span>
              <span className="text-base text-black-lighter">{data.value}</span>
            </Link>
          ) : (
            <p key={data.name} className="flex items-start  gap-3 text-lg">
              <span className="flex-shrink">
                <data.icon />
              </span>
              <span className="text-wrap text-base ">{data.value}</span>
            </p>
          ),
        )}
      </div>
      <div className="relative m-auto h-fit w-fit">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1886.2292536623208!2d72.827288!3d18.9995072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf949b1a99a3%3A0xcefb581268658c0c!2sBizDateUp%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1703833175618!5m2!1sen!2sin"
          width="600"
          height="250"
          style={{ border: 0, borderRadius: 20, position: 'relative' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Button
          className={'absolute right-1/3 top-28 w-fit rounded-xl px-4  py-2'}
          href={
            'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1886.2292536623208!2d72.827288!3d18.9995072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf949b1a99a3%3A0xcefb581268658c0c!2sBizDateUp%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1703833175618!5m2!1sen!2sin'
          }>
          Locate on maps
        </Button>
      </div>
    </div>
  )
}
