import React from 'react';
import sassy from '../assets/images/image-grid/sassy.jpg';
import hike from '../assets/images/image-grid/hike.jpg';

const Grid = () => {
  return (
    <div className='container lg:px-32 px-4 py-8 mx-auto items-center'>
      {/* ---------------------------- */}

      <div class='grid overflow-hidden grid-cols-9 grid-rows-5 gap-2'>
        <div class='box row-start-1 row-end-3 col-start-1 col-end-3'>
          <img
            src={
              'https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80'
            }
            //   src={
            //     'https://images.unsplash.com/photo-1523264766116-1e09b3145b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            //   }
            alt={''}
            className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100'
          />
        </div>
        <div class='box row-start-3 row-end-6 col-start-1 col-end-3'>
          <img
            src={sassy}
            alt={''}
            className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100'
          />
        </div>
        <div class='box row-start-1 row-end-4 col-start-3 col-end-12'>
          <img
            //   src={
            //     'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            //   }
            src={hike}
            alt={''}
            className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100'
          />
        </div>
        <div class='box row-start-4 row-end-6 col-start-3 col-end-6'>
          <img
            src={
              'https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fG1vZGVsJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            }
            alt={''}
            className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100'
          />
        </div>
        <div class='box row-start-4 row-end-6 col-start-6 col-end-12'>
          <img
            src={
              'https://images.unsplash.com/photo-1493519823106-602cbf9a280c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAzfHxtb2RlbCUyMG1hbiUyMGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
            }
            alt={''}
            className='inset-0 h-full w-full object-cover object-center rounded opacity-75 hover:opacity-100'
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
