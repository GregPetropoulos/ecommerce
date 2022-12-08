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
      dispatch(logOut());
      // if (isSuccess ) {
      //   dispatch(logOut());
      toast.error(`Deleted ${user.firstName}`);
      // }
    } catch (err) {
      console.error(err);
      console.error(err.originalStatus);
    }
  };
  const hour = new Date().getHours();
  const greeting = {
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening'
  };
  const { morning, evening, afternoon } = greeting;

  if (isLoading) return <p>Logging Out...</p>;
  if (isError) return <PageError error={error} />;
  return (
    <>
      {user ? (
        <>
          <div className='flex flex-col mx-4 align-middle '>
            {/* <div className='flex flex-row w-full justify-center'> */}
            <h2 className='w-full text-center text-4xl'>My Account</h2>
            <h3 className='w-full text-3xl mb-8'>
              {hour < 12
                ? morning
                : hour < 18 && hour > 12
                ? afternoon
                : evening}{' '}
              {user.firstName}
            </h3>
            <div className=' flex flex-row'>
              <div className=' flex flex-col align-middle border-r-2 px-8 mr-6'>
                <button className='btn btn-sm btn-link no-underline hover:no-underline transition duration-500 hover:scale-125 hover:bg-neutral-content btn-primary text-xs m-4'>
                  Status
                </button>
                <button className='btn  btn-sm btn-link no-underline transition duration-500 hover:scale-125 hover:bg-neutral-content hover:no-underline btn-primary text-xs m-4'>
                  Orders
                </button>
                <button className='btn btn-sm btn-link no-underline hover:no-underline transition duration-500 hover:scale-125 hover:bg-neutral-content  btn-primary text-xs m-4 '>
                  Continue Shopping
                </button>
                <button className='btn  btn-sm btn-link  no-underline hover:no-underline transition duration-500 hover:scale-125 hover:bg-neutral-content btn-primary m-4'>
                  Checkout
                </button>
                <LogoutButton style={['btn btn-outline btn-sm btn-error']} />
                <div
                  className=' mt-8 p-0 flex flex-row justify-center tooltip tooltip-right tooltip-error'
                  data-tip='Are you sure you want to delete your account?'>
                  <button
                    className='btn btn-xs btn-outline btn-error m-4'
                    onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
              {/* TODO CART COMPONENT PREVIEW*/}
              <div className='flex flex-col'>
                <div>Go to your cart</div>
                <h4 className='text-2xl'>Your Cart</h4>
                <ul>
                  Saved Items
                  <li>item1</li>
                  <li>item2</li>
                  <li>item3</li>
                  <li>item4</li>...
                </ul>
              </div>
            </div>
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
