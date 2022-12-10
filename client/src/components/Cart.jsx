import React from 'react';

//TODO MAKE CART CARD A COMPONENT AND LOOP OVER FOR MULTIPLE PRODUCTS

const Cart = () => {
  return (
    <div className='flex flex-row flex-wrap  bg-red-500 w-full justify-center  sm:flex-nowrap sm:flex-row-reverse'>
      {/* // summary top and right side */}
      <div className='flex flex-col px-6  w-full max-w-md  bg-gray-700'>
        <h1 className='text-center'>Summary</h1>
        <div className='divider'></div>
        <div className=' flex flex-row  align-middle justify-between'>
          <p className='text-left'>Estimate Shipping and Tax</p>
          <p className='text-right'>$50.00</p>
        </div>
        <div className='divider'></div>
        <div className='flex flex-row  justify-between'>
          <p className='text-left'>subtotal</p>
          <p className='text-right'>$100.00</p>
        </div>
        <div className='divider'></div>
        <div className=' flex flex-row  align-middle justify-between'>
          <p className='text-left'>Tax</p>
          <p className='text-right'>$8.00</p>
        </div>
        <div className='divider'></div>
        <p>Apply Discount Code</p>
        <input className='input input-sm max-w-sm my-3'></input>
        <p className='mb-4'>$ -10.00</p>
        <div className='flex flex-row  justify-between'>
          <p className='text-left'>Order Total</p>
          <p className='text-right'>$158.00</p>
        </div>
        <div className='divider'></div>
        <button className='btn btn-block max-w-sm'>Proceed to Checkout</button>
      </div>
      {/* left side card */}
      <div className='flex flex-row w-full sm:flex sm:flex-col '>
        <div className='card sm:card-side bg-base-100 shadow-xl'>
          <figure className=''>
            <img
              className=' object-cover w-full h-full'
              src={
                'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
              }
              alt={''}
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className='card-actions justify-end'>
              <button className='btn btn-primary'>Keep Shopping</button>
              <button className='btn btn-primary'>Clear Cart</button>
            </div>
          </div>
          <select className='select w-full max-w-xs'>
            <option disabled={true} value={''}>
              Sizes
            </option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>XXL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Cart;
