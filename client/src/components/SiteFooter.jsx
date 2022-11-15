import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';

//TODO CRRATE A TOGGLE COMPONENT

const SiteFooter = () => {
  const [data, setData] = useState([
    { id: 1, heading: 'contact info', bool: false },
    { id: 2, heading: 'my account', bool: false },
    { id: 3, heading: 'our service', bool: false },
    { id: 4, heading: 'support', bool: false },
    { id: 5, heading: 'opening time', bool: false }
  ]);

  const onClick = (e) => {
    //*Deconstruct id from the event
    const { id } = e.target;

    //*loop through state find id match update bool and return the rest of the untouched state
    setData((prev) =>
      prev.map((item) =>
        item.id === +id ? { ...item, bool: !item.bool } : item
      )
    );

    //Alternative approach commented out----
    // setData((prev) => {
    //   const newState = prev.map((item) =>
    //     item.id === +id ? { ...item, bool: !item.bool } : item
    //   );
    //   return newState
    // });
  };

  return (
    <div>
      <section className='mt-6 mx-6'>
        {data.length > 0 &&
          data !== null &&
          data !== undefined &&
          data.map((item) => (
            <div key={item.heading} className='flex flex-col flex-wrap'>
              <div className='flex flex-row justify-between'>
                <h3 className='capitalize'>{item.heading}</h3>{' '}
                <button
                  type='checkbox'
                  id={item.id}
                  name={item.heading}
                  value={item.bool}
                  onClick={onClick}
                  className=' btn  btn-sm btn-circle text-primary sm:hidden'>
                  {item.bool ? '-' : '+'}{' '}
                </button>
              </div>
              {item.bool && item.id===1 &&(
                    <div className='flex flex-row ml-5 mb-5'>
                      <IoLocation />{' '}
                      <p className='text-xs ml-3 sm:text-sm'>
                        8901 Marmora Road, Glasgow D04 89 GR, New York
                      </p>
                    </div>
                  )}

              <div className='flex flex-col'></div>
            </div>
          ))}
      </section>
      <section></section>
    </div>
  );
};
SiteFooter.propTypes = {
  data: PropTypes.array
};
export default SiteFooter;
