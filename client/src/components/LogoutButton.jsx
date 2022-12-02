import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../features/auth/authSlice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className='btn btn-outline bg-secondary mt-4'
      onClick={() => dispatch(logOut())}>
      Logout
    </button>
  );
};
export default LogoutButton;
