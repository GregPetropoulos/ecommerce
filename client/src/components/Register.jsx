import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux';

//AUTH
import { useRegisterMutation } from '../features/auth/authService';

import BrandFooter from './BrandFooter';
import NewsletterSignUp from './NewsletterSignUp';
import PropTypes from 'prop-types';

const initialUser = {
  firstName: '',
  lastName: '',
  email: '',
  password1: '',
  password2: ''
};

const Register = () => {
  const [register, { isLoading, isSuccess, isError }] = useRegisterMutation();
  const [newUser, setNewUser] = useState(initialUser);
  const { firstName, lastName, email, password1, password2 } = newUser;
  const navigate = useNavigate();

  useEffect(() => {
    //* If register successful return login page

    if (isSuccess) {
      return navigate('/login');
    }
  }, [isSuccess, navigate]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      alert(`passwords don't match`);
      setNewUser({ ...newUser, password2: '' });
    } else {
      const user = await register({ ...newUser }).unwrap();
      setNewUser(initialUser);
    }
  };

  return (
    <div className='flex flex-col justify-center align-middle bg-primary text-center'>
      <h1 className='font-bolder text-center mt-4 text-5xl'>
        Create New Customer Account
      </h1>
      <div className='flex flex-row bg-primary  justify-center align-middle '>
        <form
          onSubmit={onSubmit}
          className='form-control p-6 align-middle justify-center w-full lg:w-1/2 bg-primary text-primary-content'>
          <div className='flex flex-col w-full justify-center align-middle flex-wrap'>
            <h1 className='text-3xl text-center opacity-60'>
              Personal Information
            </h1>
            <div className='h-1 m-2 bg-primary-content opacity-10'></div>

            <div className='flex-flex-row'>
              <p className=' opacity-60'>
                If you have an account, login {''}
                <Link to='/login' alt={'takes user to login page'}>
                  <span className='text-secondary font-bold hover:text-accent'>
                    here
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <label className='label justify-start'>
            <span className='text-error mr-2'>*</span>First Name
          </label>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            name='firstName'
            onChange={onChange}
            className='input input-bordered input-secondary mt-2 bg-primary'
          />
          <label className='label justify-start'>
            <span className='text-error mr-2'>*</span>Last Name
          </label>
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            name='lastName'
            onChange={onChange}
            className='input input-bordered input-secondary mt-2 bg-primary  '
          />
          <label className='label justify-start'>
            <span className='text-error mr-2'>*</span>Email
          </label>
          <input
            type='text'
            placeholder='youremail@gmail.com'
            value={email}
            name='email'
            onChange={onChange}
            className='input input-bordered input-secondary mt-2 bg-primary  '
          />
          <label className='label justify-start'>
            <span className='text-error mr-2'>*</span>Password{' '}
          </label>

          <input
            type='text'
            placeholder='password 1'
            value={password1}
            name='password1'
            onChange={onChange}
            className='input input-bordered w-full input-secondary mt-2 bg-primary '
          />
          <label className='label justify-start'>
            <span className='text-error mr-2'>*</span>Confirm Password{' '}
          </label>
          <input
            type='text'
            placeholder='password 2'
            value={password2}
            name='password2'
            onChange={onChange}
            className='input input-bordered w-full input-secondary mt-2 bg-primary'
          />

          <p className='text-error my-4'>* {''}Required Fields</p>
          {/* <Link to='/new/register'> */}
          <button className='btn  w-full '>Submit</button>
          {/* </Link> */}
        </form>
      </div>
      <BrandFooter />
      <NewsletterSignUp />
    </div>
    // <div>
  );
};

Register.propTypes = {
  // register: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool
};
export default Register;
