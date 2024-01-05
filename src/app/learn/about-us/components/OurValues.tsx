'use client'
import { useState } from 'react'
import { Button } from 'antd'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const tabs = [
  {
    id: 0,
    name: 'Think Like a founder',
    image: '/about-tab.png',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
  {
    id: 1,
    name: 'Do the right thing',
    image: '/about-tab.png',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
  {
    id: 2,
    name: 'Focus forward',
    image: '/about-tab.png',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
  {
    id: 3,
    name: 'Grow together',
    image: '/about-tab.png',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
  {
    id: 4,
    name: 'Be all in',
    image: '/about-tab.png',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <br/> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
  },
]
export default function OurValues() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const handleClick = (id: number) => {
    setSelectedTab(tabs[id])
  }
  return (
    <section
      id="values"
      className={
        'my-8 flex flex-col items-center justify-center gap-4 lg:my-28 xl:my-32'
      }>
      <h4 className="text-4xl">Our Values</h4>
      <div className="flex gap-4 overflow-auto">
        {tabs.map((tab) => (
          <div key={tab.id} className={'flex flex-col'}>
            <Button
              type={'text'}
              onClick={() => handleClick(tab.id)}
              className={cn(
                `text-md !bg-transparent !font-semibold ${
                  tab.id === selectedTab.id
                    ? '!text-primary '
                    : '!text-[#BABABA]'
                }`,
              )}>
              {tab.name}
            </Button>
            {tab.id === selectedTab.id && (
              <div className="ml-4 w-12 rounded border-2 border-solid border-primary" />
            )}
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 grid min-h-[46vh] w-3/4 items-center justify-center gap-12 px-12 lg:grid-cols-2">
        <div className="relative h-full w-full overflow-clip rounded-3xl">
          <Image
            src={'/about-tab.png'}
            alt={selectedTab.name}
            fill
            sizes={'100%'}
          />
        </div>
        <div className="items-center justify-self-center">
          <h4 className="mb-3 text-4xl">{selectedTab.name}</h4>
          <p className="text-left text-base">{selectedTab.description}</p>
        </div>
      </div>
    </section>
  )
}
