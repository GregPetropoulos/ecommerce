import React, { useState, useRef } from 'react';
import ArrivalCards from './ArrivalCards';

const mensNewArrivals = [
  {
    name: 'Sweater',
    img: 'https://images.unsplash.com/photo-1519804270019-39e929a7afb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    newPrice: 20,
    oldPrice: 30
  },
  {
    name: 'Tees',
    img: 'https://images.unsplash.com/photo-1531891570158-e71b35a485bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
    newPrice: 40,
    oldPrice: 30
  },
  {
    name: 'Shorts',
    img: 'https://images.unsplash.com/photo-1545922996-cb0da7a16c2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    newPrice: 44,
    oldPrice: 33
  },
  {
    name: 'Sweater',
    img: 'https://images.unsplash.com/photo-1519804270019-39e929a7afb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    newPrice: 20,
    oldPrice: 30
  },
  {
    name: 'Tees',
    img: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=627&q=80',
    newPrice: 40,
    oldPrice: 30
  },
  {
    name: 'Shorts',
    img: 'https://images.unsplash.com/photo-1545922996-cb0da7a16c2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    newPrice: 44,
    oldPrice: 33
  }
];

const NewArrivals = () => {
  const [isClicked, setIsClicked] = useState('');
  const [newArrivalData, setNewArrivalData] = useState(mensNewArrivals);

  const onClick = (e) => {
    setIsClicked((prev) => e.target.value);
  };

  console.log('isclicked', isClicked);
  return (
    <>
      <div className='tabs justify-center '>
        <button value={'women'} onClick={onClick} className='tab' alt={''}>
          Women
        </button>
        <button value={'men'} onClick={onClick} className='tab ' alt={''}>
          Men
        </button>
        <button value={'gear'} onClick={onClick} className='tab' alt={''}>
          Gear
        </button>
        <button value={'training'} onClick={onClick} className='tab' alt={''}>
          Training
        </button>
        <button value={'bottoms'} onClick={onClick} className='tab' alt={''}>
          Bottoms
        </button>
      </div>
      {/* carousel of product cards */}
      <div className='flex flex-row w-full justify-evenly align-middle'>
        {/* Row of cards */}
        {isClicked === 'women' ? (
          <ArrivalCards newArrivalData={newArrivalData} />
        ) : isClicked === 'men' ? (
          <ArrivalCards newArrivalData={newArrivalData} />
        ) : isClicked === 'gear' ? (
          <ArrivalCards newArrivalData={newArrivalData} />
        ) : isClicked === 'training' ? (
          <ArrivalCards newArrivalData={newArrivalData} />
        ) : isClicked === 'bottoms' ? (
          <ArrivalCards newArrivalData={newArrivalData} />
        ) : (
          <ArrivalCards newArrivalData={newArrivalData} />
        )}
      </div>
    </>
  );
};

export default NewArrivals;
