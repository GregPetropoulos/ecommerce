import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Setting = () => {
  const [isSetting, setIsSetting] = useState(false);
  let isAuth = false;
  return (
    <>
      {isSetting ? (
        <>
          <button
            className='btn btn-xs btn-square mx-1'
            onClick={() => setIsSetting(!isSetting)}>
            X
          </button>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/wishlist'>Wishlist</Link>
            </li>
            <li>
              <Link to='/compare-products'>Product Compare</Link>
            </li>
            <li>{isAuth && <Link to='/myaccount'>My Account</Link>}</li>
          </ul>
        </>
      ) : (
        <FiSettings
          className='cursor-pointer'
          size={12}
          onClick={() => setIsSetting(!isSetting)}
        />
      )}
    </>
  );
};

export default Setting;
