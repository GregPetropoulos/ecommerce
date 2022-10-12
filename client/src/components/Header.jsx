import React from 'react';

// These values should come from json cms
const first = 'Treats For Cheaps';
const second = 'Summer Blowout';
const third = 'Enjoy Free Shipping On $200 Or More';

const Header = () => {
  // const onClick = (e) => {};

  return (
    <>
      {/* ORIGINAL ATTEMPT */}
      <div className='flex justify-center p-5 align-top text-center  bg-transparent  z-10 hover:bg-primary hover:opacity-60'>
        {/* buttons not functional yet
        {/* <button
          onClick={onClick}
          className='btn btn-xs bg-inherit border-0 mt-1'>
          &#8592;
        </button>  */}
        <ul className='deal-container text-[9px] bg-primary flex  justify-center w-full relative text-center hover:bg-transparent hover:transparent'>
          <li className='weekly-text-deal absolute  ease-in opacity-0 '>{first}</li>
          <li className='weekly-text-deal absolute  ease-in opacity-0'>{second}</li>
          <li className='weekly-text-deal absolute  ease-in opacity-0'>{third}</li>
        </ul>
        {/* <button
          onClick={onClick}
          className='btn btn-xs bg-inherit border-0 mt-1'>
          &#8594;
        </button> */}
      </div>
      <hr className='  h-px bg-accent border-0 dark:bg-gray-700' />
    </>
  );
};

export default Header;
