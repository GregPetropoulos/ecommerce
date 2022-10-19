import React, { useEffect, useState } from 'react';
import slide1Image from '../assets/images/carousel/snow-mountain.jpg';
import slide2Image from '../assets/images/carousel/valley-mountain.jpg';
import slide3Image from '../assets/images/carousel/night-mountain.jpg';
import slide4Image from '../assets/images/carousel/river.jpg';

const Carousel = () => {
  useEffect(() => {
    console.log('show animation');
    return () => console.log('unmount animation');
  }, []);

  const slideData = [
    {
      id: 1,
      name: 'slide1',
      image: slide1Image
    },
    {
      id: 2,
      name: 'slide2',
      image: slide2Image
    },
    {
      id: 3,
      name: 'slide3',
      image: slide3Image
    },
    {
      id: 4,
      name: 'slide4',
      image: slide4Image
    }
  ];

  return (
    <div className='carousel w-full'>
      {/*Animations */}
      {slideData.map((slide) => (
        <div
          key={slide.id}
          id={slide.name}
          className='carousel-item relative w-full'>
          <img
            src={slide.image}
            alt={slide.name}
            className='w-full mix-blend-luminosity'
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a
              href={`#slide${
                slide.id === 1 || slide.id < 4 ? slide.id + 1 : ''
              }`}
              onClick={() => console.log('test')}
              className='btn btn-circle'>
              ❮
            </a>
            <a
              href={`#slide${
                slide.id === 1 || slide.id < 4 ? slide.id + 1 : ''
              }`}
              className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      ))}

      {/* <div id='slide1' className='carousel-item relative w-full'>
        <img src={slide1} alt={''} className='w-full mix-blend-luminosity' />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a
            href='#slide3'
            onClick={() => console.log('test')}
            className='btn btn-circle'>
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
      </div> */}
    </div>
  );
};
export default Carousel;
