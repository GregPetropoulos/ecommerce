import React from 'react'

 const Search = () => {
  return (
<div className='form-control fixed bg-transparent z-10 py-10 sm:hidden  '>
        <div className='flex justify-center pt-3 bg-transparent'>
          <input
            type='text'
            placeholder='Search'
            className='input input-xs input-bordered'
          />
        </div>
      </div>
  )
}
export default Search;