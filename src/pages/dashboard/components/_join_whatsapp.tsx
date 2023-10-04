import Image from 'next/image'
import {Button} from 'antd';
import {cn} from "@/lib/utils";

const JoinWhatsApp = ({className, hidden}: { className?: string, hidden: boolean }) => {
  return <>
    <div
      className={cn('border-gray bg-white md:grid justify-center items-center p-5 py-2 rounded-2xl grid-cols-6' + ' ' + className + (hidden ? " hidden" : ''))}
      style={{backgroundColor: 'rgba(36, 37, 82, 0.1)'}}
    >
      <div
        className={'sm:hidden flex md:flex md:col-span-1 items-center justify-center md:relative md:w-[8rem] md:h-[3rem] pt-2'}>
        <Image
          src='/people_whatsapp.svg'
          height={93}
          width={120}
          className={'w-42 md:absolute  md:-top-[40%]'}
          alt={'Whatsapp'}
        />
      </div>
      <div className={'grid md:col-span-3 gap-2 grow justify-center items-center text-center md:text-left'}>
        <h4 className={'text-xl md:text-2xl font-bold m-0 p-0'}>
          Join our whatsapp investor community
        </h4>
        <p className={'text-sm text-gray-lighter m-0 p-0'}>
          Get all updates Get daily updates regarding Investments on
          WhatsApp
        </p>
      </div>
      <div className={"col-span-2 px-4"}>
        <Button
          type={'default'}
          className={
            'bg-green-500 justify-self-center flex px-4 mt-2 md:py-2 md:px-6 gap-2 items-center justify-center !text-white font-bold'
          }
          size='large'
          block
        >
          <Image
            src={'/whatsapp.svg'}
            height={24}
            width={24}
            alt='whatsapp'
            className={'hidden md:inline rounded-xl'}
          />
          Join on whatsapp
        </Button>
      </div>
    </div>
  </>;
};
export default JoinWhatsApp