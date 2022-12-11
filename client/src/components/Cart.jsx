import React from 'react';

//TODO MAKE CART CARD A COMPONENT AND LOOP OVER FOR MULTIPLE PRODUCTS

const Cart = () => {
  return (
    <>
      <div className='flex flex-col text-center text-primary py-6 text-4xl bg-secondary'>
        <h2>Users Shopping Cart</h2>
      </div>
      <div className='flex flex-row flex-wrap w-full bg-secondary justify-center  md:flex-nowrap sm:flex-row-reverse'>
        {/* // summary top and right side */}
        <div className='  flex flex-col p-6  rounded-xl sm:my-4 sm:mr-4 w-full max-w-md bg-secondary-focus'>
          <h1 className='text-center text-3xl text-primary'>Summary</h1>
          <div className='divider'></div>
          <div className=' flex flex-row  align-middle justify-between text-primary'>
            <p className='text-left'>Estimate Shipping and Tax</p>
            <p className='text-right'>$50.00</p>
          </div>
          <div className='divider'></div>
          <div className='flex flex-row  justify-between text-primary'>
            <p className='text-left'>Subtotal</p>
            <p className='text-right'>$100.00</p>
          </div>
          <div className='divider'></div>
          <div className=' flex flex-row  align-middle justify-between text-primary'>
            <p className='text-left'>Tax</p>
            <p className='text-right'>$8.00</p>
          </div>
          <div className='divider'></div>
          <p className='text-primary'>Apply Discount Code</p>

          <input
            type='text'
            placeholder='code here'
            className='input input-bordered input-primary my-3 w-full max-w-[150px]'
          />
          <p className='mb-4'>$ -10.00</p>
          <div className='flex flex-row  justify-between text-primary'>
            <p className='text-left'>Order Total</p>
            <p className='text-right'>$158.00</p>
          </div>
          <div className='divider'></div>
          <button className='btn btn-block max-w-sm my-4 text-primary'>
            Proceed to Checkout
          </button>
          <button className='btn btn-block max-w-sm my-4 text-error'>
            Clear Cart
          </button>
        </div>

        {/* left side card1 makes this a cartProduct component card and loop*/}
        <div className='  flex flex-row w-full max-w-xl my-4 sm:mx-4 sm:flex sm:flex-col '>
          <div className='card  md:card-side bg-base-100 shadow-xl '>
            <figure className='h-1/3 md:h-full md:w-[250px]'>
              <img
                className=' object-cover w-full h-full'
                src={
                  'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
                }
                alt={''}
              />
            </figure>
            <div className=' card-body bg-accent'>
              <h4 className='card-title justify-center text-primary text-2xl'>
                Watch
              </h4>
              <div className='input-group my-4 text-primary'>
                <select className='select select-bordered'>
                  <option disabled selected>
                    Colors
                  </option>
                  <option>White</option>
                  <option>Black</option>
                </select>
                <select className='select select-bordered'>
                  <option disabled selected>
                    Sizes
                  </option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XXL</option>
                </select>
                <select className='select select-bordered'>
                  <option disabled selected>
                    Quantity
                  </option>
                  <option>Qty: 1</option>
                  <option>Qty: 2</option>
                  <option>Qty: 3</option>
                  <option>Qty: 10+</option>
                </select>
              </div>
              <div className='flex my-4 text-primary'>
                <p>Price</p>
                <p className='text-right'>$50</p>
              </div>
              <div className='flex text-primary'>
                <p>Subtotal</p>
                <p className='text-right'>$52</p>
              </div>
              <div className='card-actions justify-center mt-10'>
                <button className='btn btn-block btn-xs text-primary '>
                  Keep Shopping
                </button>
                <button className='btn btn-block btn-xs text-primary '>
                  Wishlist
                </button>
                <button className='btn  btn-block btn-xs text-error '>
                  Delete Watch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
