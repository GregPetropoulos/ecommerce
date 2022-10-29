import React from 'react';

const ArrivalCards = ({ newArrivalData }) => {
  const data = newArrivalData;
  console.log('data', data);
  return (
    <>
      {data.map((item,idx) => (
        <div key={idx} className='card m-4 bg-primary shadow-xl'>
            <h2 className='card-title justify-center'>
              {item.name}
              <div className='badge badge-secondary'>NEW</div>
            </h2>
          {/* <figure className=''> */}
          <div className=''>

            <img className='' src={item.img} alt={item.name} />
          </div>
          {/* </figure> */}
          <div className='card-body'>
            <div className='flex flex-row align-middle justify-center text-center'>
              <p>${item.newPrice}</p>
              <div className='badge badge-outline'>Rating</div>
            </div>
          </div>
              <button className='btn'>Add to Cart</button>
        </div>
      ))}
    </>
  );
};

export default ArrivalCards;
