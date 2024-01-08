'use client'
import Image from 'next/image'
import React from 'react'
import footerData from '@/components/footer/data'
import { capitalizeFirstLetter } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ReferFooter from './Refer'

type FooterDataLinksKey =
  | 'platform'
  | 'bizdateup'
  | 'help_&_support'
  | 'quick_links'
  | 'register_office'
//TODO - make this server component
const Footer = () => {
  const pathName = usePathname()
  const linkType: FooterDataLinksKey[] = [
    'platform',
    'bizdateup',
    'help_&_support',
    'quick_links',
    'register_office',
  ]
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const unauthenticated = [
      /\/login/,
      /\/signup/,
      /\/otp.*/,
      /\/social.*/,
      /\/socialLogin.*/,
      /\/profile.*/,
    ]
    const matchPath = (patterns: RegExp[]) =>
      patterns.some((pattern) => pattern.test(pathName))
    if (matchPath(unauthenticated)) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [pathName])
  return (
    <>
      {show && (
        <section className={'my-20 flex flex-col gap-4 lg:mb-0'}>
          {' '}
          <ReferFooter />
          <div className="flex flex-col gap-4 px-4 py-4 md:px-20 lg:px-40">
            <div className="flex w-full flex-col gap-4 px-2  sm:flex-row md:flex-row lg:items-center">
              <div className={'relative h-10 w-40 max-w-[10rem] flex-grow'}>
                <Image
                  alt={'Bizdateup logo'}
                  src={'/logo.webp'}
                  fill
                  sizes={'100%'}
                />
              </div>
              <div className="grow-0 md:grow"></div>
              <div className={'flex items-center gap-4'}>
                <span className="text-md font-medium">Follow Us</span>
                <div className=" flex items-center gap-3">
                  {footerData.media.map((socialLink) => (
                    <Link
                      key={socialLink.name}
                      className="min-h-[1rem] min-w-[1rem]"
                      href={socialLink.link}>
                      {socialLink.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4  lg:my-8 lg:grid-cols-4 lg:justify-center xl:grid-cols-5">
              {linkType.map((value: FooterDataLinksKey) => (
                <div
                  key={value}
                  className={
                    value === 'register_office'
                      ? 'col-span-2 xl:col-span-1'
                      : ''
                  }>
                  <h5 className="py-4 text-lg text-primary-dark">
                    {capitalizeFirstLetter(
                      value.replaceAll('_', ' ').split(' '),
                    )}
                  </h5>
                  <div className="justify-left flex flex-col gap-4">
                    {footerData.links[value].map((linkDetails, index) =>
                      'link' in linkDetails ? (
                        <Link
                          aria-disabled={
                            'disabled' in linkDetails && linkDetails.disabled
                          }
                          href={linkDetails.link}
                          key={index}
                          className="flex items-center gap-3">
                          <span className="text-sm font-medium leading-6 !text-primary-dark">
                            {linkDetails.name}
                          </span>
                          {'tags' in linkDetails && (
                            <span className="flex items-center rounded-full bg-primary px-[0.22rem] py-0 text-xs !text-white">
                              {linkDetails.tags && linkDetails.tags[0] === 'new'
                                ? 'NEW'
                                : 'Coming soon'}
                            </span>
                          )}
                        </Link>
                      ) : (
                        <div
                          key={index}
                          className="col-span-2 flex items-center gap-3 lg:col-span-1">
                          <p className="text-sm font-medium leading-6 !text-primary-dark">
                            {linkDetails.name}
                          </p>
                          {'tags' in linkDetails && (
                            <span className="flex items-center rounded-full bg-primary px-[0.22rem] py-0 text-xs !text-white">
                              {linkDetails.tags && linkDetails.tags === 'new'
                                ? 'NEW'
                                : 'Coming soon'}
                            </span>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="border_gray border-3 grid grid-cols-2 items-center gap-8 !border-x-0 border-b-2 border-t-2 px-4 py-4 md:grid-cols-3 lg:my-8 lg:flex lg:flex-row">
              {footerData.quick_links.map((link) =>
                'type' in link ? (
                  <React.Fragment key={link.name}>
                    <div className="grow-0 md:grow"></div>
                    <p className="col-span-2 flex-wrap items-center justify-center text-sm font-medium leading-6 !text-primary-dark">
                      {link.name}
                    </p>
                  </React.Fragment>
                ) : (
                  <Link
                    key={link.name}
                    href={link.link ?? 'void'}
                    className="!text-primary-dark">
                    {link.name}
                  </Link>
                ),
              )}
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="py-2 text-lg text-primary-dark">Disclaimer :</h5>
              <p className="text-xs text-gray-400">{footerData.disclaimer}</p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Footer
