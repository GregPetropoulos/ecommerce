import React, { useState } from 'react';
import Accordion from './Accordion';
import { products } from '../data/products';

const ProductPage = () => {
  return (
    <div className='flex flex-col w-full bg-primary align-middle justify-center'>
      <h1 className='text-4xl text-center text-neutral w-full'>Women</h1>
      <Accordion />
      <div className='flex flex-row justify-center align-middle flex-wrap'>
        {products.map((product) => (
          <div className='card card-compact w-96 bg-base-100 shadow-xl m-3'>
            <figure>
              <img src={product.img} alt={product.name} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{product.name}</h2>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>Price ${product.newPrice}</p>
              <p>In stock {product.countInStock}</p>
              <div className='card-actions justify-center'>
                <button className='btn btn-xs btn-primary'>Buy Now</button>
                <button className='btn  btn-xs btn-primary'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
