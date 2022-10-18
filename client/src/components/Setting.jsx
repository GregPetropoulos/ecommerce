import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';

const Setting = () => {
  const [isSetting, setIsSetting] = useState(false);

  return (

<>
      {isSetting ? (
          
          <button
          className='btn btn-xs btn-square mx-1'
          onClick={() => setIsSetting(!isSetting)}>
          X
        </button>
          ) :
          
          <FiSettings className='cursor-pointer' size={12} onClick={()=> setIsSetting(!isSetting)} />
        }
        </>
  );
};

export default Setting;
