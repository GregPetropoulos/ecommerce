import React from 'react';

//TODO LINK IMAGES TO ACTUAL BRAND ONCE ESTABLISHED
//TODO REFACTOR INTO MAP LOOP

const BrandFooter = () => {
  return (
    <>
      <div className='h-1 m-2 bg-primary-content opacity-10'></div>
      <div className='carousel justify-evenly align-middle my-10 '>
        <div className='carousel-item opacity-30 hover:opacity-100'>
          <img
            src={
              'http://plazathemes.com/demo/facon/pub/media/Plazathemes/brandslider/images/b/r/brand2.jpg'
            }
            alt=''
          />
        </div>
        <div className='carousel-item opacity-30 hover:opacity-100'>
          <img
            src={
              'http://plazathemes.com/demo/facon/pub/media/Plazathemes/brandslider/images/b/r/brand3.jpg'
            }
            alt=''
          />
        </div>
        <div className='carousel-item opacity-30 hover:opacity-100'>
          <img
            src={
              'http://plazathemes.com/demo/facon/pub/media/Plazathemes/brandslider/images/b/r/brand4_1.jpg'
            }
            alt=''
          />
        </div>{' '}
        <div className='carousel-item opacity-30 hover:opacity-100'>
          <img
            src={
              'http://plazathemes.com/demo/facon/pub/media/Plazathemes/brandslider/images/b/r/brand5.jpg'
            }
            alt=''
          />
        </div>{' '}
        <div className='carousel-item opacity-30 hover:opacity-100'>
          <img
            src={
              'http://plazathemes.com/demo/facon/pub/media/Plazathemes/brandslider/images/b/r/brand1.jpg'
            }
            alt=''
          />
        </div>{' '}
        <div className='carousel-item opacity-30 hover:opacity-100'>
          <img
            src={
              'http://plazathemes.com/demo/facon/pub/media/Plazathemes/brandslider/images/b/r/brand3.jpg'
            }
            alt=''
          />
        </div>
      </div>
    </>
  );
};

export default BrandFooter;
