import React from 'react';
import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom';
import LogoutButton from './LogoutButton';

//AUTH
import { useAuth } from '../hooks/useAuth';
import { logOut } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useDeleteUserMutation } from '../features/auth/authService';

import NewsletterSignUp from './NewsletterSignUp';
import PageError from './PageError';
import { toast } from 'react-toastify';

const MyAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [deleteUser, { isSuccess, isError, isLoading, error }] =
    useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      deleteUser(await user._id).unwrap();
      dispatch(logOut())
      // if (isSuccess ) {
      //   dispatch(logOut());
        toast.error(`Deleted ${user.firstName}`);
      // }
    } catch (err) {
      console.error(err)
      console.error(err.originalStatus)
    }
  };

  if (isLoading) return <p>Logging Out...</p>;
  if (isError) return <PageError error={error} />;
  return (
    <>
      {user ? (
        <>
          <div className='flex flex-col align-middle '>
            <h2 className='text-4xl'>My Account</h2>
            <h3 className='text-3xl'>Hi User</h3>
            <div className=''>
              <h4 className='text-2xl'>Your Cart</h4>
              <ul>
                Saved Items
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item4</li>...
              </ul>
            </div>
            <div>Go to your cart</div>

            <button className='btn m-4'>Checkout</button>
            <button className='btn m-4'>Continue Shopping</button>
            <button className='btn m-4 ' onClick={handleDelete}>
              Delete User Account
            </button>
            <LogoutButton />
          </div>
          <NewsletterSignUp />
        </>
      ) : (
        logOut()
      )}
    </>
  );
};

export default MyAccount;
