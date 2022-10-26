import React from 'react';
import mockLogo from '../assets/images/logo/small-logo.png';
const DividerTitle = ({ title }) => {
  return (
    // <div className='relative '>

    <div className='divider before:bg-opacity-50 after:bg-opacity-50'>
      <h1 className=' text-2xl font-bold'>{title}</h1>
    </div>
    //    <div className=' -bottom-11 left-80 absolute'>
    //     <img
    //       className=' bg-secondary w-full h-full rounded-full'
    //       src={mockLogo}
    //       alt='logo'
    //       />
    //   </div>
    //       </div>
  );
};

export default DividerTitle;
