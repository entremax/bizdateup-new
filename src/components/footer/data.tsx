const footerData = {
  media: [
    {
      name: 'facebook',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none">
          <path
            d="M24.1464 12.0732C24.1464 5.40637 18.74 0 12.0732 0C5.40637 0 0 5.40637 0 12.0732C0 18.74 5.40637 24.1463 12.0732 24.1463C12.1441 24.1463 12.2147 24.1449 12.2855 24.1437V14.7452H9.6916V11.7222H12.2855V9.49777C12.2855 6.91791 13.8604 5.51377 16.1616 5.51377C17.2636 5.51377 18.2109 5.59593 18.4871 5.6326V8.32887H16.9002C15.6482 8.32887 15.4057 8.92391 15.4057 9.79692V11.7222H18.3994L18.0092 14.7452H15.4057V23.6799C20.4522 22.2333 24.1464 17.584 24.1464 12.0732Z"
            fill="#CAC5DA"
          />
        </svg>
      ),
      link: 'https://www.facebook.com/Bizdateuptechnologies',
    },
    {
      name: 'instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 12.0967C0 5.41693 5.41693 0 12.0967 0C18.7766 0 24.1936 5.41693 24.1936 12.0967C24.1936 18.7766 18.7766 24.1936 12.0967 24.1936C5.41693 24.1936 0 18.7766 0 12.0967ZM18.6771 16.6466C18.8488 16.2047 18.9663 15.6998 19 14.9604C19.0339 14.2197 19.0419 13.9831 19.0419 12.0966C19.0419 10.2102 19.0339 9.97357 19.0002 9.2328C18.9663 8.49339 18.8489 7.98856 18.6771 7.54667C18.5029 7.08319 18.2293 6.66345 17.8761 6.31643C17.529 5.96296 17.1091 5.68941 16.6457 5.51498C16.2038 5.34351 15.6989 5.22611 14.9595 5.19252C14.2188 5.15855 13.9821 5.15043 12.0957 5.15043C10.2092 5.15043 9.9726 5.15855 9.23189 5.19233C8.49245 5.22611 7.98762 5.34351 7.54573 5.51516C7.08225 5.68959 6.66233 5.96296 6.31549 6.31643C5.96202 6.66327 5.68847 7.08319 5.51404 7.54667C5.34237 7.98856 5.22498 8.49339 5.19138 9.2328C5.15742 9.97357 5.14949 10.2102 5.14949 12.0966C5.14949 13.9831 5.15742 14.2197 5.19158 14.9606C5.22516 15.6998 5.34275 16.2048 5.5144 16.6466C5.68884 17.11 5.9622 17.53 6.31549 17.8768C6.66251 18.2303 7.08225 18.5037 7.54592 18.6781C7.98763 18.8497 8.49264 18.9671 9.23189 19.0009C9.97279 19.0347 10.2092 19.0428 12.0959 19.0428C13.9823 19.0428 14.2189 19.0347 14.9596 19.0009C15.6989 18.9671 16.2039 18.8497 16.6457 18.6781C17.5787 18.3172 18.3162 17.5796 18.6771 16.6466Z"
                fill="#CAC5DA" />
        </svg>
      ),
      link: 'https://www.instagram.com/bizdateup',
    },
    {
      name: 'x',
      link: 'https://www.twitter.com/date_biz',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none">
          <path
            d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM18.2074 9.74617C18.2129 9.86919 18.2156 9.99279 18.2156 10.117C18.2156 13.9082 15.3297 18.28 10.0523 18.2802C8.43201 18.2802 6.92425 17.8053 5.65453 16.9914C5.87902 17.0179 6.10752 17.0311 6.33888 17.0311C7.68318 17.0311 8.92029 16.5726 9.90238 15.803C8.64639 15.7797 7.58743 14.9502 7.22198 13.8102C7.39689 13.8437 7.57675 13.862 7.76119 13.862C8.02307 13.862 8.27675 13.8268 8.51784 13.7609C7.20501 13.4981 6.21605 12.3379 6.21605 10.9486C6.21605 10.9356 6.21605 10.924 6.21643 10.9119C6.60305 11.1269 7.04517 11.2562 7.51591 11.2707C6.74553 10.7567 6.23913 9.87797 6.23913 8.88252C6.23913 8.35686 6.38123 7.86438 6.62766 7.44038C8.04253 9.17645 10.157 10.3182 12.5416 10.4382C12.4924 10.228 12.467 10.009 12.467 9.78394C12.467 8.20007 13.752 6.91509 15.3364 6.91509C16.1617 6.91509 16.9071 7.26395 17.4307 7.82166C18.0843 7.69272 18.6981 7.45392 19.2526 7.12528C19.038 7.79495 18.5833 8.35686 17.9909 8.7122C18.5713 8.64277 19.1244 8.48885 19.6384 8.26035C19.2545 8.83579 18.7675 9.34124 18.2074 9.74617Z"
            fill="#CAC5DA"
          />
        </svg>
      ),
    },
    {
      name: 'linkedin',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 12.0968C0 5.41694 5.41694 0 12.0968 0C18.7766 0 24.1935 5.41694 24.1935 12.0968C24.1935 18.7766 18.7766 24.1936 12.0968 24.1936C5.41694 24.1936 0 18.7766 0 12.0968ZM5.63401 18.2872H8.58013V9.42378H5.63401V18.2872ZM7.10863 8.21317H7.08943C6.10081 8.21317 5.46142 7.53261 5.46142 6.68206C5.46142 5.81231 6.12038 5.15058 7.1282 5.15058C8.13601 5.15058 8.75621 5.81231 8.77541 6.68206C8.77541 7.53261 8.13601 8.21317 7.10863 8.21317ZM16.2589 18.287H19.2047V13.2046C19.2047 10.4822 17.7513 9.21542 15.8129 9.21542C14.2499 9.21542 13.5495 10.0745 13.1579 10.6785V9.42349H10.212C10.2506 10.255 10.212 18.287 10.212 18.287H13.1579V13.3371C13.1579 13.0722 13.177 12.8076 13.2548 12.6182C13.4678 12.0891 13.9525 11.5408 14.7664 11.5408C15.8323 11.5408 16.2589 12.3535 16.2589 13.5452V18.287Z"
            fill="#CAC5DA"
          />
        </svg>
      ),
      link: 'https://www.linkedin.com/company/bizdateup/mycompany/',
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/@bizdateup8281',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 12.0967C0 5.41693 5.41693 0 12.0967 0C18.7767 0 24.1936 5.41693 24.1936 12.0967C24.1936 18.7766 18.7767 24.1936 12.0967 24.1936C5.41693 24.1936 0 18.7766 0 12.0967ZM19.3442 15.7454C19.6554 14.5624 19.6554 12.1091 19.6554 12.1091C19.6554 12.1091 19.668 9.64365 19.3442 8.46069C19.1698 7.81317 18.6592 7.30244 18.0117 7.12819C16.8288 6.80443 12.0967 6.80443 12.0967 6.80443C12.0967 6.80443 7.36482 6.80443 6.18184 7.11583C5.54669 7.29007 5.02358 7.81317 4.84934 8.46069C4.53795 9.64365 4.53795 12.0967 4.53795 12.0967C4.53795 12.0967 4.53795 14.5624 4.84934 15.7329C5.02378 16.3804 5.53432 16.8912 6.18184 17.0654C7.37719 17.3891 12.0967 17.3891 12.0967 17.3891C12.0967 17.3891 16.8288 17.3891 18.0117 17.0777C18.6592 16.9035 19.1698 16.3929 19.3442 15.7454Z"
            fill="#CAC5DA"
          />
        </svg>
      ),
    },
  ],
  links: {
    platform: [
      {
        name: 'Invest',
        link: '/invest',
      },
      {
        name: 'Raise fund',
        link: '/raise-fund',
      },
      {
        name: 'Steps to Invest',
        link: '/steps-to-invest',
      },
      {
        name: 'How to raise',
        link: '/how-to-raise',
      },
      {
        name: 'Membership',
        tags: ['new'],
        link: '/membership',
      },
    ],
    bizdateup: [
      {
        name: 'About us',
        link: '/about',
      },
      {
        name: 'Learn',
        link: '/learn',
      },
      {
        name: 'Media & Press',
        link: '/media',
      },
      {
        name: 'Careers',
        link: '/careers',
      },
    ],
    'help_&_support': [
      {
        name: 'support@bizdateup.com',
        link: 'mailto:support@bizdateup.com',
      },
      {
        name: '+91-9587566666',
        link: 'tel:+919587566666',
      },
      {
        name: 'Contact-us',
        link: '/contact-us',
      },
      {
        name: 'Book One-to-one',
        link: '/book?type=one-to-one',
        tags: ['new'],
      },
    ],
    quick_links: [
      { name: 'Calculators', link: '/calculator' },
      { name: 'Blogs', link: '/blog' },
      { name: 'News', link: '/news', tags: ['coming soon'], disabled: true },
      { name: 'Upcoming Demo days', link: '/demo-days' },
      { name: 'Join Community', link: '/community/join' },
    ],
    register_office: [
      {
        name: 'G2, Empire Business Centre, Empire Complex, 414 Senapati Bapat Marg, Delisle Rd, near shreeniwas mill, Lower Parel, Mumbai, Maharashtra, 400013',
      },
      {
        name: 'CIN U72900MH2022379408',
      },
    ],
  },
  quick_links: [
    { name: 'Privacy Policy', link: '/privacy-policy' },
    { name: 'Risk of Investment', link: '/privacy-policy' },
    { name: 'Terms of Use', link: '/terms' },
    { name: 'Refund Policy', link: '/refund-policy' },
    { name: 'Cancellation Policy', link: '/cancellation-policy' },
    { name: 'Bizdateup Pvt Ltd • 2023 All Rights Reserved', type: 'license' },
  ],
  disclaimer: 'All trademarks and logos or registered trademarks and logos found on this Site or mentioned herein belong to their respective owners and are solely being used for informational purposes. Information provided herein has been gathered from public sources. Bizdateup Technologies Pvt Ltd disclaims any and all responsibility in connection with veracity of this data. Information presented on this website is for educational purposes only and should not be treated as legal, financial , or any other form of advice. Bizdateup Technologies Pvt Ltd is not liable for financial or any other form of loss incurred by the user or any affiliated party on the basis of information provided herein. Bizdateup Technologies Pvt Ltd is neither a stock exchange nor does it intend to get recognized as a stock exchange under the Securities Contracts Regulation Act, 1956. Bizdateup Technologies Pvt Ltd is not authorized by the capital markets regulator to solicit investments. The securities traded on these platforms are not traded on any regulated exchange. Bizdateup also provides that it does not facilitate any online or offline buying, selling, or trading of securities.\n \n ',
}
export default footerData