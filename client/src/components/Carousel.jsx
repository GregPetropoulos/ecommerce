import React, { useEffect, useState } from 'react';
import { slides } from '../data/slides';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  console.log('current', current);

  useEffect(() => {
    console.log('show animation');
    return () => console.log('unmount animation');
  }, []);
  const length = slides.length;
  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className='relative'>
      {slides.map((slide, idx) => {
        return (
          <div key={idx} className='carousel-item relative w-full'>
            {idx === current && (
              <img
                src={slide.image}
                alt={slide.name}
                className={'w-full mix-blend-luminosity'}
              />
            )}
          </div>
        );
      })}
            <div className='absolute flex justify-between transform -translate-y-1/2 left-10 right-10 top-1/2'>
              <FaChevronLeft
                className='left-arrow btn btn-circle w-20 h-20 p-2'
                onClick={prevSlide}
              />
              <FaChevronRight
                className='right-arrow btn btn-circle w-20 h-20 p-2'
                onClick={nextSlide}
              />
            </div>
    </div>
  );
};
export default Carousel;
