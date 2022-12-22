import React from 'react';
import { Link, useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { products } from '../data/products';

const ProductDetailPage = ({}) => {
  const params = useParams();
  //LOCATE THE ID OF THE PRODUCT VIA PARAMS
  const product = products.find((p) => p._id === params.id);
  console.log(product);
//!STOPPED HERE NEED TO BETTER FORMAT UI AND GET THIS TO SHOW UP
  return (
    <>
      <Link to='/' className='btn btn-xs btn-primary my-3'>
        Go Back
      </Link>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
          <figure>
            <img src={product.img} alt={product.name} />
          </figure>
          <ul>
            <li>
              <StarRating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </li>
            <li>Price: ${product.price}</li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        {/* Purchase Card */}
        <div className='flex flex-col'>
          <div className='card w-96 bg-primary text-primary-content'>
            <div className='card-body'>
              <h2 className='card-title'>{product.name}</h2>
              <p>Price: <strong>${product.price}</strong></p>
              <p>Status: <strong>${product.countInStock>0?'In Stock':'Out of Stock'}</strong></p>
              <p>Price: <strong>${product.price}</strong></p>
              <div className='card-actions justify-end'>
                <button type='button'className='btn' disabled={product.countInStock===0}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
