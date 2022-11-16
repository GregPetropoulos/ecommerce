import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlus, FaPhoneAlt, FaFax } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

//TODO CREATE A TOGGLE COMPONENT
//TODO REFACTOR DATA WITH JSON BODY RATHER THAN HARDCODE CONTENT VALUES
//TODO 

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
      <section className='sm:flex flex-row m-3'>
        {data.length > 0 &&
          data !== null &&
          data !== undefined &&
          data.map((item) => (
            <div key={item.id} className='flex flex-col flex-wrap  '>
              <div className='flex flex-row justify-between  sm:flex-col '>
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
              {/* ADDRESS */}
              <div className='hidden sm:flex sm:flex-row '>
                <IoLocation />{' '}
                <p className='text-xs sm:text-sm'>
                  1234 Maryland Pkwy, Las Vegas, NV 89154
                </p>
              </div>
              {item.bool && item.id === 1 && (
                <div className='flex flex-row w-1/2 sm:hidden'>
                  <IoLocation size={20} />{' '}
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>
                    7777 Maryland Pkwy, Las Vegas, NV 89154
                  </p>
                </div>
              )}
              {/* TELEPHONE */}
              <div className='hidden sm:flex sm:flex-row'>
                <FaPhoneAlt />{' '}
                <p className='text-xs sm:text-sm'>
                  Telephones: (+1) 866-540-3229
                </p>
                <p className='text-xs  sm:text-sm'>Fax: (+1) 866-540-3229</p>
              </div>
              {item.bool && item.id === 1 && (
                <div className='flex flex-col flex-wrap w-1/2  align-middle  sm:hidden'>
                  <div className='flex flex-row align-middle'>
                    <FaPhoneAlt size={15} />{' '}
                    <p className='text-xs ml-2 mb-2 sm:text-sm'>
                      Telephones: (+1) 800-865-4309
                    </p>
                  </div>
                  <div className='flex flex-row  align-middle'>
                    <FaFax size={15} />
                    <p className='text-xs ml-2 mb-2 sm:text-sm'>
                      Fax: (+1) 866-540-3229
                    </p>
                  </div>
                </div>
              )}

              {/* EMAIL */}
              <div className='hidden sm:flex sm:flex-row'>
                <AiOutlineMail />{' '}
                <p className='text-xs sm:text-sm'>
                  Email: support@iliosthemes.com
                </p>
              </div>
              {item.bool && item.id === 1 && (
                <div className='flex flex-col flex-wrap w-1/2  align-middle  sm:hidden'>
                  <div className='flex flex-row justify-center align-middle'>
                    <AiOutlineMail size={17} />{' '}
                    <p className='text-xs ml-2 mb-2 sm:text-sm'>
                      Email: support@plazathemes.com
                    </p>
                  </div>
                </div>
              )}
              {/* MY ACCOUNT */}
              {item.bool && item.id === 2 && (
                <div className='flex flex-col flex-wrap w-1/2  align-middle  sm:hidden'>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>My Account</p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>Login</p>{' '}
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>My Cart</p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>My Wishlist</p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>Checkout</p>
                </div>
              )}
              {/* OUR SERVICE */}
              {item.bool && item.id === 3 && (
                <div className='flex flex-col flex-wrap w-1/2  align-middle  sm:hidden'>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>Contact us</p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>Discount</p>{' '}
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>Site map</p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>About us</p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>
                    Customer Service
                  </p>
                </div>
              )}
              {/* OUR SUPPORT */}
              {item.bool && item.id === 4 && (
                <div className='flex flex-col flex-wrap w-1/2  align-middle  sm:hidden'>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>About us</p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>
                    Delivery information
                  </p>{' '}
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>Privacy Policy</p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>
                    Terms & Conditions
                  </p>
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>Support 24/7</p>
                </div>
              )}
              {/* OPENING TIME */}
              {item.bool && item.id === 5 && (
                <div className='flex flex-col flex-wrap w-full mt-1 align-middle  sm:hidden'>
                  <div className='flex flex-row justify-between'>
                    <p className='text-xs ml-2 mb-2 sm:text-sm'>
                      Monday-Friday
                    </p>
                    <p className='text-xs sm:text-sm'>9:00 AM - 11:00 PM</p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <p className='text-xs ml-2 mb-2 sm:text-sm'>Saturday</p>
                    <p className='text-xs sm:text-sm'>10:00 AM - 12:00 PM</p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <p className='text-xs ml-2 mb-2 sm:text-sm'>Sunday</p>
                    <p className='text-xs sm:text-sm'>12:00 AM - 12:00 PM</p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <p className='text-xs ml-2 mb-2 sm:text-sm'>Thursday</p>
                    <p className='text-xs sm:text-sm'>Free Shipping</p>
                  </div>
                  <div className='flex flex-row justify-between'>
                    <p className='text-xs ml-2 mb-2 sm:text-sm'>Friday</p>
                    <p className='text-xs sm:text-sm'>30% Off Sale</p>
                  </div>
                </div>
              )}

              {/* <div className='flex flex-col'></div> */}
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
