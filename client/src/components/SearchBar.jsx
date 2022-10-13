import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [isSearch, setIsSearch] = useState(false);

  const textRef = useRef();
  const onChange = (e) => {
    //use context api here later ex: ItLogger--from actions searchLogs(textRef.current.value)
    console.log(textRef.current.value);
  };

  return (
    <>
      {isSearch ? (
        <div className='flex justify-center z-10'>
          <input
            className='input input-xs input-bordered text-neutral-content'
            // type='text'
            type='search'
            id='search'
            placeholder='Search entire store...'
            ref={textRef}
            onChange={onChange}
          />
          <button
            className='btn btn-xs btn-square mx-1'
            onClick={() => setIsSearch(!isSearch)}>
            X
          </button>
        </div>
      ) : (
        <FiSearch onClick={() => setIsSearch(!isSearch)} />
      )}
    </>
  );
};

export default SearchBar;
