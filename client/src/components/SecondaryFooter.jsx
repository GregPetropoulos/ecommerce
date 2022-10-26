import React from 'react';
import { TbGlobe } from 'react-icons/tb';
import { MdOutlineReplay } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BsGift } from 'react-icons/bs';

const SecondaryFooter = () => {
  return (
    <div className='flex flex-col flex-wrap align-middle justify-center text-primary-content mb-15 mt-10 sm:flex sm:flex-row sm:justify-evenly lg:flex-nowrap'>
      <div className='flex flex-row  text-primary-content m-5 justify-center align-middle '>
        <TbGlobe style={{ transform: 'rotateY(180deg)' }} size={'50px'} />
        <div className='ml-2 w-full text-xs sm:text-base'>
          <p className='text-primary-content font-bold '>FREE SHIPPING</p>
          <p className='text-zinc-500'>Free shipping on all US orders</p>
        </div>
      </div>
      <div className='flex flex-row text-primary-content m-5 justify-center align-middle'>
        <MdOutlineReplay
          style={{ transform: 'rotateY(180deg)' }}
          size={'50px'}
        />
        <div className=' ml-2 text-xs w-full sm:text-base'>
          <p className='text-primary-content font-bold'>FREE EXCHANGE</p>
          <p className='text-zinc-500'>30 days return on all items</p>
        </div>
      </div>
      <div className='flex flex-row text-primary-content m-5 justify-center align-middle'>
        <RiCustomerService2Fill size={'50px'} />
        <div className='ml-2 text-xs  w-full sm:text-base'>
          <p className='text-primary-content font-bold'>PREMIUM SUPPORT</p>
          <p className='text-zinc-500'>We support online 24 hours a day</p>
        </div>
      </div>

      <div className='flex flex-row text-primary-content m-5 justify-center align-middle '>
        <BsGift size={'50px'} />
        <div className='ml-2 text-xs w-full sm:text-base'>
          <p className='text-primary-content font-bold'>BLACK FRIDAY</p>
          <p className='text-zinc-500'>Shocking discount on every Friday</p>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFooter;
