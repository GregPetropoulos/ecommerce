import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LogoutButton from './LogoutButton';

//TODO MAKE THIS A MODAL
const Setting = () => {
  const [isSetting, setIsSetting] = useState(false);
  const { user } = useAuth();

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
            {!user && (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
            <li>
              <Link to='/wishlist'>Wishlist</Link>
            </li>
            <li>
              <Link to='/compare-products'>Product Compare</Link>
            </li>
            <li>{user && <Link to='/myaccount'>My Account</Link>}</li>
            <li>{user && <LogoutButton />}</li>
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
