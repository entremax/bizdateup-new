import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const links = [
    {
      name: 'Invest',
      to: '/invest',
    },
    {
      name: 'Raise Funds',
      to: '/raise',
    },
    {
      name: 'Dashboard',
      to: '/dashboard',
    },
    {
      name: 'Learn',
      to: '/learn',
    },
  ];
  return (
    <div className='fixed flex px-8 items-center w-full  h-[4.5rem] shadow-[0px_1px_0px_0px_#E5E9F2]'>
      <Link
        href={'/'}
        className=' flex-grow'
      >
        <Image
          className='md:pl-8'
          src={'/logo_full.svg'}
          height={80}
          width={176}
          alt='app logo'
        />
      </Link>
      <div className='flex gap-12 items-center'>
        <div className='hidden md:flex gap-4'>
          {links.map((link, index) => (
            <Link
              href={link.to}
              className={
                'text-gray-400 font-medium text-md px-4 hover:text-gray-600'
              }
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className='hidden md:flex gap-2'>
          <Link href={'/log-in'} className='p-[0.625rem_1.25rem]  cursor-pointer bg-lightShadow outline-none border-0  text-primary rounded-lg'>
            Login
          </Link>
          <Link href={'/get-started'} className='p-[0.625rem_1.25rem] cursor-pointer items-center text-md outline-none border-0 !bg-primary rounded-lg  text-white'>
            Get Started
          </Link>
        </div>
        <div className='flex-shrink md:hidden'>
          <Image
            src={'/burger-menu.svg'}
            height={28}
            width={28}
            alt='Menu'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
