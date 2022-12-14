import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Settings from './Setting';
import SearchBar from './SearchBar';
import Header from './Header';
import menuWoman from '../assets/images/women/menu-woman.jpg';
import logo from '../assets/images/logo/moda-logo.png';
import mockLogo from '../assets/images/logo/mock-logo.png';

//AUTH
import { useAuth } from '../hooks/useAuth';

import {
  shopAllLinks,
  aboutUsLinks,
  menTopsLink,
  menBottomsLink,
  womenBottomsLink,
  womenTopsLink,
  womenDressesLink
} from '../data/links';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      {/* <Header/> */}
      <div className='navbar z-[100] p-10 bg-primary-content relative text-primary'>
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
                <Link to='/women' className='font-bold'>
                  WOMEN
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
                      <Link to={item.route} key={idx}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li tabIndex={0}>
                <Link to='/men' className='font-bold'>
                  MEN
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
                  {aboutUsLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.route}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link to='/gear' className='font-bold'>
                  GEAR
                </Link>
              </li>

              <li>
                <Link to='/sale' className='font-bold'>
                  SALE
                </Link>
              </li>
              <li>
                <Link to='/aboutus' className='font-bold'>
                  ABOUT US
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to='/'
            // className='btn btn-ghost normal-case  font-bold text-2xl text-red-700 tracking-widest rounded-full'>
            className='btn btn-ghost btn-2xl'>
            <img className='w-full h-full' src={mockLogo} alt='logo' />
          </Link>
        </div>
        <div className='navbar-center hidden md:flex'>
          {/* DESKTOP  */}
          <ul className='menu menu-horizontal p-0'>
            <li tabIndex={0} className=''>
              <Link to='women' className='font-bold text-lg'>
                WOMEN
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
              <ul className='p-2 bg-primary-content'>
                <div className='tabs flex-row justify-center'>
                  <Link
                    to='/women/tops'
                    className='text-base tab tab-bordered hover:tab-active mb-3'>
                    TOPS
                  </Link>
                  {womenTopsLink.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.route} className='text-sm flex flex-col'>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  <Link
                    to='/women/bottoms'
                    className='tab tab-bordered hover:tab-active text-base mb-3'>
                    BOTTOMS
                  </Link>
                  {womenBottomsLink.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.route} className='text-sm flex flex-col'>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  <Link
                    to='/women/dresses'
                    className='tab tab-bordered hover:tab-active text-base mb-3'>
                    DRESSES
                  </Link>
                  {womenDressesLink.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.route} className='text-sm flex flex-col'>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </div>
                <img
                  src={
                    'https://images.unsplash.com/photo-1550928323-31789f5b5d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' ||
                    menuWoman
                  }
                  className='mix-blend-luminosity'
                  alt={''}
                />
              </ul>
            </li>
            <li tabIndex={0}>
              <Link to='/men' className='font-bold text-lg'>
                MEN
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
              <ul className='p-2 bg-primary-content'>
                <div className='tabs flex-row justify-center'>
                  <Link
                    to='/men/tops'
                    className='tab tab-bordered hover:tab-active text-base mb-3'>
                    TOPS
                  </Link>
                  {menTopsLink.map((item, idx) => (
                    <li key={idx}>
                      <Link to={item.route} className='text-sm flex flex-col'>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                  <Link
                    to='/men/bottoms'
                    className='tab tab-bordered hover:tab-active text-base mb-3'>
                    BOTTOMS
                  </Link>
                </div>
                {menBottomsLink.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.route} className='text-sm flex flex-col'>
                      {item.text}
                    </Link>
                  </li>
                ))}
                <img
                  src={
                    'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  }
                  className='mix-blend-luminosity'
                  alt={''}
                />
              </ul>
            </li>
            <li>
              <Link to='/gear' className='font-bold text-lg'>
                GEAR
              </Link>
            </li>

            <li>
              <Link to='/sale' className='font-bold text-lg'>
                SALE
              </Link>
            </li>
            {/* <li>
              <Link to='/aboutus' className='font-bold text-lg'>
                ABOUT US
              </Link>
            </li> */}
            <li tabIndex={0}>
              <Link to='/aboutus' className='font-bold text-lg'>
                ABOUT US
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
              <ul className='p-2 bg-primary-content text-center'>
                <div className='tabs flex flex-col align-middle justify-center'>
                  {aboutUsLinks.map((item, idx) => (
                    <li key={idx} className=''>
                      <Link
                        to={item.route}
                        className='text-sm flex flex-row justify-center'>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </div>
              </ul>
            </li>
          </ul>
        </div>

        {/* SHOPPING CART AND SEARCH */}
        <div className='navbar-end'>
          <div className=' flex justify-center border-l-2 px-2 text-xsm'>
            <SearchBar />
          </div>

          <div className='flex flex-row justify-evenly align-middle'>
            <div className='dropdown dropdown-end '>
              <label
                tabIndex={0}
                className='btn btn-xs  btn-ghost btn-circle sm:btn-md'>
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
                  <span className='badge badge-sm indicator-item indicator-start'>
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow '>
                <div className='card-body'>
                  <span className='font-bold '>8 Items</span>
                  <span className='text-info'>Subtotal: $999</span>
                  <div className='card-actions'>
                    {user ? (
                      <Link to='/cart' className='btn btn-primary btn-block'>
                        View cart
                      </Link>
                    ) : (
                      <Link
                        to='/login'
                        className='tooltip tooltip-accent btn btn-primary btn-block p-4 text-center'
                        data-tip='Login to see your cart'>
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=' flex justify-center border-l-2 px-2 text-xsm'>
            <Settings />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
