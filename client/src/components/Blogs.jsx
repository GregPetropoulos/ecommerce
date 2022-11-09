import React from 'react';
import { Link } from 'react-router-dom';
// TODO REFACTOR TO LOOP THROUGH A BLOG DATA AND PRODUCE THE LATEST TWO BLOGS
// TODO THE BLOG PAGE FOR THE BLOG CLICKED ON NEEDS TO CALLED VIA REST API 3RD PARTY BLOG SERVICES LIKE MEDIUM OR WILL NEED TO BUILD OUT A WHOLE BLOG FEATURE

const Blogs = () => {
  return (
    <div className='block  m-4 sm:flex sm:flex-row sm:justify-center sm:align-middle sm:m-20 gap-6'>
      <div className=' flex flex-col justify-center align-middle'>
        <div className=' flex flex-row min-w-lg'>
          <Link to='/blog1'>
            <img
              className='object-cover'
              src={
                'https://images.unsplash.com/photo-1512358958014-b651a7ee1773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'
              }
              alt={''}
            />
          </Link>
        </div>
        <div className='flex-row mb-10'>
          <h2 className='mt-10 text-3xl'>Blog1</h2>
          <p className='text-center sm:text-left mx-10 my-4 '>
            Description Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptatum recusandae voluptas quisquam neque officiis
            reprehenderit exercitationem est omnis deserunt placeat possimus
            voluptates nemo, quod dolor tenetur explicabo asperiores dicta ad.
            Iure, odio officiis. cupiditate.
          </p>
          <p className='text-right mx-10'>Todays date 11/4/22</p>
        </div>
      </div>
      <div className='flex flex-col justify-center align-middle'>
        <div className='flex flex-row  min-w-lg '>
          <Link to='/blog2'>
            <img
              className='object-cover'
              src={
                'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              }
              alt={''}
            />
          </Link>
        </div>
        <div className='flex-row mb-10'>
          <h2 className='mt-10 text-3xl'>Blog1</h2>
          <p className='text-center sm:text-left mx-10 my-4'>
            Description Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptatum recusandae voluptas quisquam neque officiis
            reprehenderit exercitationem est omnis deserunt placeat possimus
            voluptates nemo, quod dolor tenetur explicabo asperiores dicta ad.
            Iure, odio officiis. Unde alias dolore totam.
          </p>
          <p className='text-right'>Todays date 11/4/22</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
