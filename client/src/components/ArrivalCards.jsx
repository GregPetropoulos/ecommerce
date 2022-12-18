import React from 'react';
import { FaHeart } from 'react-icons/fa';
import StarRating from './StarRating';
//Future improvements =Star Rating, buttons, close view of image

const ArrivalCards = ({ data }) => {
  const dataArr = data;

  return (
    <>
      {dataArr.map((item, idx) => (
        <div
          key={idx}
          className='carousel-item mx-2 my-8  scroll-smooth justify-center align-middle '>
          <div className=' card  bg-primary shadow-xl'>
            <h2 className='card-title mb-2 justify-center'>
              {item.category}
              <div className='badge badge-secondary absolute top-10 -left-1 rotate-90'>
                -
                {Math.ceil(
                  ((item.oldPrice - item.newPrice) / item.oldPrice) * 100
                )}
                %
              </div>
            </h2>
            <div className='w-full'>
              <img
                className='object-contain w-full h-60 '
                src={item.img}
                alt={item.name}
              />
            </div>
            <div className='card-body flex-0'>
              <div className=''>
                <p>{item.name}</p>
                <p>${item.newPrice}</p>
                <StarRating value={item.rating} text={`${item.numReviews} reviews`} />
              </div>
            </div>
            <div className=' flex flex-col justify-center m-4'>
              <button className='btn btn-sm sm:btn-lg lg:btn-xlg mb-1'>
                Add to Cart
              </button>
              <button className='btn btn-sm mb-1'>
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArrivalCards;
