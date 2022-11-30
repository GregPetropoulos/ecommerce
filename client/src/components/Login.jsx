import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//RTK
import { setCredentials } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../features/auth/authService';

import BrandFooter from './BrandFooter';
import NewsletterSignUp from './NewsletterSignUp';

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    //sets the focus on the email when the component loads
    userRef.current.focus();
  }, []);

  useEffect(() => {
    //if the email or password changes clear errmsg
    setErrMsg('');
  }, [email, password]);

  const errStyle = errMsg
    ? ' bg-error text-center text-3xl text-primary p-4'
    : 'hidden';

  // if (isLoading) return <p>Loading...</p>;

  // const content=(

  // )
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...userData }, email));
      console.log(userData);
      setEmail('');
      setPassword('');
      navigate('/myaccount');
    } catch (err) {
      if (!err?.originalStatus) {
        setErrMsg('No Server Response');
      } else if (err?.originalStatus === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err?.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed', err.data?.message);
      }
      errRef.current.focus();
    }
  };
  return (
    <>
      {isLoading ? (
        <button className=' btn text-4xl' disabled>
          {' '}
          <svg className='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'></svg>
          Loading......
        </button>
      ) : (
        <div className='bg-primary'>
          <p ref={errRef} className={errStyle} aria-live='assertive'>
            {errMsg}
          </p>
          <div className='flex flex-col bg-primary  justify-center align-middle  md:flex-row'>
            <form
              className='form-control p-6 align-center justify-center w-full bg-primary text-primary-content'
              onSubmit={onSubmit}>
              <div className='flex flex-col w-full justify-center align-middle flex-wrap'>
                <h1 className='text-3xl text-center opacity-60'>
                  Registered Customers
                </h1>
                <div className='h-1 m-2 bg-primary-content opacity-10'></div>
                <p className='text-center opacity-60'>
                  If you have an account, sign in with your email address
                </p>
              </div>
              <label htmlFor='email' className='label justify-start'>
                <span className='text-error mr-2'>*</span>Email{' '}
              </label>
              <input
                type='text'
                id='email'
                ref={userRef}
                value={email}
                onChange={handleEmailInput}
                placeholder='youremail@gmail.com'
                className='input input-bordered input-secondary mt-2 bg-primary max-w-xs '
              />
              <label htmlFor='password' className='label justify-start'>
                <span className='text-error mr-2'>*</span>Password{' '}
              </label>

              <input
                type='text'
                id='password'
                value={password}
                onChange={handlePasswordInput}
                placeholder='password'
                className='input input-bordered w-full input-secondary mt-2 bg-primary max-w-xs'
              />
              <div className='flex flex-row my-6 justify-between align-middle flex-wrap'>
                <button className='btn  w-full sm:max-w-xs' onClick={onSubmit}>
                  Login
                </button>
                <p className=' w-full mt-2 text-center sm:text-left'>
                  Forgot Your Password?
                </p>
              </div>
              <p className='text-error'>* {''}Required Fields</p>
            </form>

            <div className='flex flex-col w-full  text-primary-content p-6 bg-primary align-middle flex-wrap'>
              <h1 className='text-3xl text-center opacity-60'>New Customer</h1>
              <div className='h-1 m-2 bg-primary-content opacity-10'></div>
              <p className='text-center mb-2 opacity-60'>
                Creating an account has many benefits:checkout faster, keep more
                than one address,track orders and more
              </p>
              <Link to='/register' alt={'takes user to register page'}>
                <button className='btn  w-full '>Create An Account</button>
              </Link>
            </div>
          </div>
          <BrandFooter />
          <NewsletterSignUp />
        </div>
      )}
    </>
  );
};

export default Login;
