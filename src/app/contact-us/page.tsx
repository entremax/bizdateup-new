import ConnectWithUs from '@/app/contact-us/ConnectWithUs'
import ContactUsForm from '@/app/contact-us/ContactUsForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' Contact Us | Bizdateup',
  description:
    'Curious about BizDateUp? Feel free to get in touch with us via our\n' +
    '        social media handles or drop us a message via the contact form.',
}

export default function ContactUs() {
  return (
    <section
      className={
        'grid justify-center gap-8 px-8 pt-28 lg:grid-cols-2 lg:px-16 xl:px-32'
      }>
      <ConnectWithUs />
      <ContactUsForm />
    </section>
  )
}
