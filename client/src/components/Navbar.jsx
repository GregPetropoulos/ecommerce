import React from 'react';
import { Link } from 'react-router-dom';
import { shopAllLinks, bundleSaveAllLinks } from '../data/links';
import Header  from './Header';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <>
    <Header/>
      <div className='form-control m-3 sm:hidden'>
        <div className='flex justify-center '>
          <input
            type='text'
            placeholder='Search'
            className='input input-xs input-bordered'
          />
        </div>
      </div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li tabIndex={0}>
                <Link to='/shopall'>
                  Shop All
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'>
                    <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                  </svg>
                </Link>

                {/* MOBILE NESTED DROPDOWN */}
                <ul className='p-2 invisible sm:visible'>
                  {shopAllLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.route}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li tabIndex={0}>
                <Link to='/bundlesave'>
                  Bundle & Save
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'>
                    <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                  </svg>
                </Link>

                {/* MOBILE NESTED DROPDOWN */}
                <ul className='p-2 invisible sm:visible'>
                  {bundleSaveAllLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.route}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to='/aboutus'>About Us</Link>
              </li>

              <li>
                <Link to='/rewards'>Rewards</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul>
          </div>
          <Link
            to='/'
            className='btn btn-xs btn-ghost normal-case text-sm  sm:text-xl'>
            HouseGoods
          </Link>
        </div>
        <div className='navbar-center hidden md:flex'>
          {/* DESKTOP  */}
          <ul className='menu menu-horizontal p-0'>
            <li tabIndex={0}>
              <Link to='/shopall'>
                Shop All
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </Link>
              {/* DESKTOP NESTED DROPDOWN */}
              <ul className='p-2'>
                {shopAllLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.route}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li tabIndex={0}>
              <Link to='/bundlesave'>
                Bundle & Save
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </Link>

              {/* DESKTOP NESTED DROPDOWN */}
              <ul className='p-2'>
                {bundleSaveAllLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.route}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to='/aboutus'>About Us</Link>
            </li>

            <li>
              <Link to='/rewards'>Rewards</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>

        {/* SHOPPING CART AND SEARCH */}
        <div className='navbar-end'>
          <div className='flex flex-row justify-center'>
            <div className='hidden sm:form-control sm:mt-3'>
              <SearchBar />
              {/* {isSearch ? (
                <div className='flex justify-center z-10'>
                  <input
                    className='input input-xs input-bordered'
                    // type='text'
                    type='search'
                    id='search'
                    placeholder='Search...'
                    ref={textRef}
                    onChange={onChange}
                  />
                  <button
                    className='btn btn-xs btn-square mx-1'
                    onClick={() => setIsSearch(!isSearch)}>
                    X
                  </button>
                </div>
              ) : (
                <FiSearch onClick={() => setIsSearch(!isSearch)} />
              )} */}
            </div>
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle'>
                <div className='indicator'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  <span className='badge badge-sm indicator-item'>8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'>
                <div className='card-body'>
                  <span className='font-bold text-lg'>8 Items</span>
                  <span className='text-info'>Subtotal: $999</span>
                  <div className='card-actions'>
                    <button className='btn btn-primary btn-block'>
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
