import React from 'react'

const PageError = ({error}) => {
    const {originalStatus,status}=error;

  return (
    <div className='flex flex-col justify-center align-middle bg-error text-base-300 text-opacity-70'>
        <h1 className='text-3xl text-center m-4'>Well this is embarrassing</h1>
        {originalStatus&& <h2 className='text-2xl text-center my-2'>Status Code : {originalStatus}</h2>}
        {status&&<p className='text-xl text-center my-2' >Status : {status}</p>}
        {error.error&&<p className='text-xl text-center mt-2 mb-6'>Error : {error.error}</p>}
    </div>
  )
}

export default PageError