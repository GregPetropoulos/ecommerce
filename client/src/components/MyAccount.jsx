import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

//AUTH
import { useAuth } from '../hooks/useAuth';
import { logOut } from '../features/auth/authSlice';

import NewsletterSignUp from './NewsletterSignUp';
import PageError from './PageError';
import LogoutButton  from './LogoutButton';

const MyAccount = () => {
  const navigate = useNavigate();
  const {user}=useAuth()
  // const { pathname } = useLocation();
  // const [sendLogout, { isLoading, isSuccess, isError, error }] =
  //   useSendLogoutMutation();

  useEffect(() => {
    //When user logs out send to public /
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  // if (isLoading) return <p>Logging Out...</p>;
  // if (isError) return <PageError error={error} />;

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
<           LogoutButton/>
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
