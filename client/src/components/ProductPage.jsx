import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';
import { products } from '../data/products';

const ProductPage = () => {
  return (
    <div className='flex flex-col w-full bg-primary align-middle justify-center'>
      <h1 className='text-4xl text-center text-neutral w-full'>Women</h1>
      <Accordion />
      {/* TODO MAKE THIS A CARD COMPONENT */}
      <div className='flex flex-row justify-center align-middle flex-wrap'>
        {products.map((product) => (
          <div className='card card-compact w-96 bg-base-100 shadow-xl m-3'>
            <Link to={`/product/${product._id}`} alt=''>
            <figure>
              <img src={product.img} alt={product.name} />
            </figure>
            </Link>
            <div className='card-body'>
              <Link to={`/product/${product._id}`} alt=''>
                <h2 className='card-title'>{product.name}</h2>
              </Link>
              <p>{product.description}</p>
              <p>Price ${product.newPrice}</p>
              {product.rating} from {product.numReviews} Reviews
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
