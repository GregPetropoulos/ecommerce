import React from 'react';
import ProductPage from '../components/ProductPage';
import Accordion from '../components/Accordion';
import { products } from '../data/products';

const Women = () => {
  return (
    <div className='bg-primary border-8 border-green-500 flex flex-row justify-center align-middle flex-wrap'>
      <h1 className='text-5xl py-4 text-center text-neutral w-full'>Women</h1>
      <Accordion />
      {products
        .sort((a, b) => (a.category < b.category ? 1 : -1))
        .map((product) => {
          console.log('product on Women', product);
          return (
            <>
              {product?.womens ? (
                <ProductPage product={product} key={product?._id} />
              ) : null}
            </>
          );
        })}
    </div>
  );
};

export default Women;
