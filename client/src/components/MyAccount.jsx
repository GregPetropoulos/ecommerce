import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import BrandFooter from './BrandFooter';
import NewsletterSignUp from './NewsletterSignUp';
// RTK
import { useSendLogoutMutation } from '../features/auth/authApiSlice';

const MyAccount = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();

useEffect(()=>{
    //When user logs out send to public /
if(isSuccess) navigate('/')

},[isSuccess,navigate])

if(isLoading) return <p>Logging Out...</p>
if(isError) return <p>Error:{error.data?.message}</p>

  return (
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
        <button className='btn m-4' onClick={()=>sendLogout()}>Logout</button>
      </div>
      <NewsletterSignUp />
    </>
  );
};

export default MyAccount;
