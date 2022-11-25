import React from 'react';

const Login = () => {
  return (
    <div>
      <form className='form-control p-6 align-center justify-center w-full bg-primary text-primary-content '>
        <div className='flex flex-col w-full justify-center align-middle flex-wrap'>
          <h1 className='text-3xl text-center opacity-60'>
            Registered Customers
          </h1>
          <div className='h-1 m-2 bg-primary-content opacity-30'></div>
          <p className='text-center opacity-60'>
            If you have an account, sign in with your email address
          </p>
        </div>
        <label className='label justify-start'>
          <span className='text-error'>*</span>Email{' '}
        </label>
        <input
          type='text'
          placeholder='youremail@gmail.com'
          className='input input-bordered input-secondary mt-2 bg-primary max-w-xs '
        />
        <label className='label justify-start'>
          <span className='text-error'>*</span>Password{' '}
        </label>

        <input
          type='text'
          placeholder='password'
          className='input input-bordered w-full input-secondary mt-2 bg-primary max-w-xs'
        />
        <div className='flex flex-row my-6 justify-between align-middle flex-wrap'>
          <button className='btn  w-full sm:max-w-xs'>Login</button>
          <p className=' w-full mt-2 text-center sm:text-left'>
            Forgot Your Password?
          </p>
        </div>
        <p className='text-error'>* {''}Required Fields</p>
      </form>

      <div className='flex flex-col p-6 align-center justify-center w-full bg-primary text-primary-content '>
        <div className='flex flex-col w-full justify-center align-middle flex-wrap'>
          <h1 className='text-3xl text-center opacity-60'>New Customer</h1>
          <div className='h-1 m-2 bg-primary-content opacity-30'></div>
          <p className='text-center opacity-60'>
            Creating an account has many benefits:checkout faster, keep more
            than one address,track orders and more
          </p>
          <button className='btn  w-full sm:max-w-xs'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;