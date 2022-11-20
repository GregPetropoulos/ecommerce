import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { FaPhoneAlt, FaFax } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import paymentCardImage from '../assets/images/payment/payment-images.png';

//TODO CREATE A TOGGLE COMPONENT
//TODO REFACTOR DATA WITH JSON BODY RATHER THAN HARDCODE CONTENT VALUES

const SiteFooter = () => {
  const [data, setData] = useState([
    { id: 1, heading: 'contact info', bool: false },
    { id: 2, heading: 'my account', bool: false },
    { id: 3, heading: 'our service', bool: false },
    { id: 4, heading: 'support', bool: false },
    { id: 5, heading: 'opening time', bool: false }
  ]);
  const today = new Date();
  const currentYear = today.getFullYear();

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
    <footer>
      <section className='flex flex-col sm:flex sm:flex-row sm:justify-evenly sm:flex-wrap m-3 justify-center align-middle '>
        {data.length > 0 &&
          data !== null &&
          data !== undefined &&
          data.map((item) => (
            <div
              key={item.id}
              className='flex flex-col align-middle mx-2 flex-wrap'>
              <div className='flex flex-row  align-top justify-between sm:mb-6 sm:justify-start'>
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
              {/* TELEPHONE */}
              {/* EMAIL */}
              {/* DESKTOP */}
              {item.id === 1 && (
                <>
                  <div className='hidden sm:flex sm:flex-row '>
                    <IoLocation />{' '}
                    <p className='text-xs  ml-2 mb-2'>
                      1234 Maryland Pkwy, Las Vegas, NV 89154
                    </p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row '>
                    <FaPhoneAlt />{' '}
                    <p className='text-xs  ml-2 mb-2 '>
                      Telephones: (+1) 866-540-3229
                    </p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row '>
                    <FaFax size={10} />
                    <p className='text-xs ml-2 mb-2'>Fax: (+1) 866-540-3229</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row '>
                    <AiOutlineMail />{' '}
                    <p className='text-xs  ml-2 mb-2'>
                      Email: support@iliosthemes.com
                    </p>
                  </div>
                </>
              )}

              {/* ADDRESS */}
              {/* MOBILE */}
              {item.bool && item.id === 1 && (
                <div className='flex flex-row w-1/2 sm:hidden'>
                  <IoLocation size={20} />{' '}
                  <p className='text-xs ml-2 mb-2 sm:text-sm'>
                    7777 Maryland Pkwy, Las Vegas, NV 89154
                  </p>
                </div>
              )}

              {/* TELEPHONE */}
              {/* MOBILE */}
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
              {/* MOBILE */}
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
              {/* DESKTOP */}
              {item.id === 2 && (
                <>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 w-full'>My Account</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 w-full'>Login</p>{' '}
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 w-full'>My Cart</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 w-full'>My Wishlist</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 w-full'>Checkout</p>
                  </div>
                </>
              )}
              {/* MOBILE */}
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
              {/* DESKTOP */}
              {item.id === 3 && (
                <>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>Contact us</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>Discount</p>{' '}
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>Site map</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>About us</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>Customer Service</p>
                  </div>
                </>
              )}

              {/* MOBILE */}
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
              {/* DESKTOP */}
              {item.id === 4 && (
                <>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>About us</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>Delivery information</p>{' '}
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>Privacy Policy</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2 '>Terms & Conditions</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row'>
                    <p className='text-xs ml-2 mb-2'>Support 24/7</p>
                  </div>
                </>
              )}
              {/* MOBILE */}
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
              {/* DESKTOP */}
              {item.id === 5 && (
                <>
                  <div className='hidden sm:flex sm:flex-row sm:justify-between'>
                    <p className='text-xs mx-3 '>M-F</p>
                    <p className='text-xs '>9:00 AM - 11:00 PM</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row sm:justify-between'>
                    <p className='text-xs mx-3'>Saturday</p>
                    <p className='text-xs '>10:00 AM - 12:00 PM</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row sm:justify-between'>
                    <p className='text-xs mx-3'>Sunday</p>
                    <p className='text-xs '>12:00 AM - 12:00 PM</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row sm:justify-between'>
                    <p className='text-xs mx-3 '>Thursday</p>
                    <p className='text-xs'>Free Shipping</p>
                  </div>
                  <div className='hidden sm:flex sm:flex-row sm:justify-between'>
                    <p className='text-xs mx-3'>Friday</p>
                    <p className='text-xs'>30% Off Sale</p>
                  </div>
                </>
              )}
              {/* MOBILE */}
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
            </div>
          ))}
      </section>
      <section className='flex flex-col align-middle  justify-center mx-3 mt-6'>
        <div className='flex flex-row justify-center flex-wrap sm:justify-between align-middle'>
          <small className='text-center'>
            Copyright © 2020-{currentYear} Iliosthemes. All Rights Reserved.
          </small>
          <div className='mt-3 sm:m-0'>
            <img src={paymentCardImage} alt='' />
          </div>
        </div>
      </section>
    </footer>
  );
};
SiteFooter.propTypes = {
  data: PropTypes.array
};
export default SiteFooter;
