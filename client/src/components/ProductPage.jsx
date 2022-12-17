import React, { useState } from 'react';
import Accordion from './Accordion';

const ProductPage = () => {


  return (
    <div className='flex flex-row flex-wrap bg-primary align-middle justify-center'>
      <h1 className='text-4xl text-center text-neutral w-full'>Women</h1>
      
        <Accordion/>
    </div>
  );
};

export default ProductPage;
