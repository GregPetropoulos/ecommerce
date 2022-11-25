import React from 'react'
import { Link } from 'react-router-dom';
import BrandFooter from './BrandFooter';
import NewsletterSignUp from './NewsletterSignUp';


const Register = () => {
  return (
    <div className='bg-primary'>
      <div className='flex flex-col bg-primary  justify-center align-middle  md:flex-row'>
        <form className='form-control p-6 align-center justify-center w-full bg-primary text-primary-content '>
          <div className='flex flex-col w-full justify-center align-middle flex-wrap'>
            <h1 className='text-3xl text-center opacity-60'>
              Personal Information
            </h1>
            <div className='h-1 m-2 bg-primary-content opacity-10'></div>
            
            <div  className='flex-flex-row  justify-center'>

            <p className=' opacity-60'>
              If you have an account, login here
            </p>
            <Link to='/login'>
            <button className='btn btn-xs'>Login</button>
            </Link>
            </div>
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
            placeholder='password1'
            className='input input-bordered w-full input-secondary mt-2 bg-primary max-w-xs'
          />
           <input
            type='text'
            placeholder='password2'
            className='input input-bordered w-full input-secondary mt-2 bg-primary max-w-xs'
          />
         
          <p className='text-error'>* {''}Required Fields</p>
          <Link to='/new/register'>
            <button className='btn  w-full '>Submit</button>
          </Link>
        </form>  
      </div>
      <BrandFooter />
      <NewsletterSignUp />
    </div>
  )
}

export default Register