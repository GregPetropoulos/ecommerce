import React from 'react';
import slide1 from '../assets/images/carousel/snow-mountain.jpg';
import slide2 from '../assets/images/carousel/valley-mountain.jpg';
import slide3 from '../assets/images/carousel/night-mountain.jpg';

const Carousel = () => {
  return (
    <div className='carousel w-full'>
      <div id='slide1' className='carousel-item relative w-full'>
        <img src={slide1} alt={''} className='w-full mix-blend-luminosity' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img src={slide2} alt={''} className='w-full mix-blend-luminosity' />

        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img src={slide3} alt={''} className='w-full mix-blend-luminosity' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
