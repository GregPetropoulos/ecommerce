import React from 'react';

  const first = 'Treats For Cheaps'
  const second = 'Summer Blowout'
  const third ='Enjoy Free Shipping On $200 Or More'
const onClick=(e)=>{

}
const Header = () => {
  return (
    <>
    {/* ORIGINAL ATTEMPT */}
    <div className='flex mx-2 align-middle text-center'>

        <button onClick={onClick} className='btn btn-xs bg-inherit border-0 mt-1'>&#8592;</button>
    <div className='deal-container text-[9px]'>
        <span className='weekly-text-deal'>{first}</span>
        <span className='weekly-text-deal'>{second}</span>
        <span className='weekly-text-deal'>{third}</span>
    </div>
        <button onClick={onClick} className='btn btn-xs bg-inherit border-0 mt-1'>&#8594;</button>
    </div>
      <hr className='my-8 h-px bg-gray-200 border-0 dark:bg-gray-700' />
    </>
  );
};

export default Header;
