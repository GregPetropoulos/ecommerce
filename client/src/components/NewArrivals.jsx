import React, { useState, useRef, useEffect } from 'react';
import ArrivalCards from './ArrivalCards';
import {
  mensNewArrivals,
  womensNewArrivals as womansNewArrivals,
  gearNewArrivals,
  trainingNewArrivals,
  bottomsNewArrivals
} from '../data/arrivals';

const NewArrivals = () => {
  //NEED TO FETCH THIS DATA FROM STRAPI/UMBRACO
  const [isClicked, setIsClicked] = useState('');

  const onClick = (e) => {
    setIsClicked((prev) => e.target.value);
  };
  return (
    <>
      <div className='tabs justify-center '>
        <button
          value={'women'}
          onClick={onClick}
          className='tab text-xl'
          alt={''}>
          Women
        </button>
        <button
          value={'men'}
          onClick={onClick}
          className='tab text-xl'
          alt={''}>
          Men
        </button>
        <button
          value={'gear'}
          onClick={onClick}
          className='tab text-xl'
          alt={''}>
          Gear
        </button>
        <button
          value={'training'}
          onClick={onClick}
          className='tab text-xl'
          alt={''}>
          Training
        </button>
        <button
          value={'bottoms'}
          onClick={onClick}
          className='tab text-xl'
          alt={''}>
          Bottoms
        </button>
      </div>

      <div className='flex flex-col justify-center align-middle'>
        <div className='  justify-center align-middle rounded-box scroll-smooth flex-wrap md:justify-center  carousel m-4 md:flex-nowrap'>
          {isClicked === 'women' ? (
            <ArrivalCards data={mensNewArrivals} />
          ) : isClicked === 'men' ? (
            <ArrivalCards data={womansNewArrivals} />
          ) : isClicked === 'gear' ? (
            <ArrivalCards data={gearNewArrivals} />
          ) : isClicked === 'training' ? (
            <ArrivalCards data={trainingNewArrivals} />
          ) : isClicked === 'bottoms' ? (
            <ArrivalCards data={bottomsNewArrivals} />
          ) : (
            <ArrivalCards data={mensNewArrivals} />
          )}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
