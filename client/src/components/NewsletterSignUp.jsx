import React, { useState } from 'react';

  //TODO CHECK IF EMAIL ALREADY EXIST
  //TODO BUTTON OVERFLOW ISSUE

const NewsletterSignUp = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');

  //Email check against normal standards
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  console.log(email);

  const onSubmit = (e) => {
    e.preventDefault();
    const validateEmail = () => {
      if (!isEmail(email)) {
        setErrors('Wrong Email Format');
        setTimeout(() => {
          setErrors('');
        }, 5000);
        setEmail('');
        console.log('not valid');
      } else {
        console.log('passed validation', email);
        console.log('EMAIL GOOD SEND A POST REQ SOMEWHERE', email);
      }
    };
    validateEmail();
  };

  return (
    <>
      {errors.length > 0 && (
        <div className='alert alert-warning shadow-lg'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current flex-shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
            <span>Warning: {errors} or Invalid email address!</span>
          </div>
        </div>
      )}
        <div className='flex flex-row py-28 justify-center align-middle  px-10 bg-slate-50  flex-wrap sm:flex-nowrap'>
          <div className='flex flex-col justify-center align-middle w-full mr-3'>
            <h1 className='text-2xl font-bold text-center'>
              SIGN UP{' '}
              <span className='text-secondary'>FOR SPECIAL PROMOTIONS</span>
            </h1>
            <p className='text-center'>
              Get exclusive deals you wont find anywhere else straight to your
              inbox!
            </p>
          </div>
          <div className='flex flex-col justify-center align-middle w-full ml-3 my-10 sm:my-0'>
            <form
              onSubmit={onSubmit}
              className='border-4 border-secondary/[.25] rounded justify-between'>
              <input
                type='text'
                value={email}
                onChange={onChange}
                required
                className='input text-secondary bg-primary border-0 w-3/4 rounded-none border-r-2 border-r-secondary/[.25] px-4 placeholder:text-neutral-content'
                placeholder='Enter your email address'
              />

              <button className='btn btn-sm text-sm w-1/4 text-secondary font-bold rounded-none bg-primary  border-0  hover:bg-primary '>
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
    </>
  );
};

export default NewsletterSignUp;
