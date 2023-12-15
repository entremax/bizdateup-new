import Image from 'next/image'
import React from 'react'
import footerData from '@/components/footer/data'
import { capitalizeFirstLetter } from '@/lib/utils'
import {cookies} from 'next/headers'
import Link from 'next/link'
import ReferFooter from './Refer'
type FooterDataLinksKey = 'platform' | 'bizdateup' | 'help_&_support' | 'quick_links' | 'register_office'

const Footer = () => {
  const linkType: FooterDataLinksKey[] = ['platform', 'bizdateup', 'help_&_support', 'quick_links', 'register_office']
  return (
    <section className={'my-20 lg:mb-0 flex flex-col gap-4'}>
      <ReferFooter/>
      <div className="flex flex-col gap-4 px-4 md:px-20 lg:px-40 py-4">
        <div className="flex flex-col gap-4 md:flex-row w-full  lg:items-center px-2 sm:flex-row">
          <div className={'relative h-10 w-40 max-w-[10rem] flex-grow'}>
            <Image alt={'Bizdateup logo'} src={'/logo.png'} fill />
          </div>
          <div className="grow-0 md:grow"></div>
          <div className={'flex gap-4 items-center'}>
            <span className="text-md font-medium">Follow Us</span>
            <div className=" flex gap-3 items-center">
              {footerData.media.map((socialLink) => (
                <Link key={socialLink.name} className='min-h-[1rem] min-w-[1rem]' href={socialLink.link}>
                  {socialLink.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4  lg:justify-center xl:grid-cols-5 lg:my-8 gap-4">
          {linkType.map((value: FooterDataLinksKey) => (
            <div key={value} className={value==="register_office"?'col-span-2 xl:col-span-1':""}>
                <h5 className='text-lg text-primary-dark py-4'>{capitalizeFirstLetter(value.replaceAll('_', " ").split(" "))}</h5>
                <div className="flex flex-col gap-4 justify-left">
                  {footerData.links[value].map((linkDetails, index) => (
                    ('link' in linkDetails?(<Link aria-disabled={'disabled' in linkDetails && linkDetails.disabled} href={linkDetails.link} key={index} className="items-center flex gap-3">
                      <span className="!text-primary-dark font-medium text-sm leading-6">{linkDetails.name}</span>
                      {'tags' in linkDetails &&<span className="!text-white rounded-full flex items-center text-xs px-[0.22rem] py-0 bg-primary">{linkDetails.tags && linkDetails.tags[0]==="new"?"NEW":"Coming soon"}</span>}
                    </Link>):(
                      <div key={index} className="col-span-2 lg:col-span-1 items-center flex gap-3">
                      <p className="!text-primary-dark font-medium text-sm leading-6">{linkDetails.name}</p>
                      {'tags' in linkDetails &&<span className="!text-white rounded-full flex items-center text-xs px-[0.22rem] py-0 bg-primary">{linkDetails.tags && linkDetails.tags==="new"?"NEW":"Coming soon"}</span>}
                    </div>
                    ))
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row lg:my-8 gap-8 px-4 py-4 border_gray border-3 border-t-2 border-b-2 !border-x-0 items-center">
          {footerData.quick_links.map((link)=>(
            'type' in link ?(
              <React.Fragment key={link.name}>
            <div className="grow-0 md:grow"></div>
            <p  className="!text-primary-dark col-span-2 justify-center items-center flex-wrap font-medium text-sm leading-6">{link.name}</p>
</React.Fragment>):(<Link key={link.name} href={link.link??'void'} className="!text-primary-dark">
              {link.name}
            </Link>)
          ))}
        </div>
        <div className="flex flex-col gap-3">
        <h5 className='text-lg text-primary-dark py-2'>Disclaimer :</h5>
          <p className="text-xs text-gray-400">{footerData.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
