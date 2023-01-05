import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const ProductPage = ({ product }) => {
  return (
    <>
      {/* TODO MAKE THIS A CARD COMPONENT */}
      <div className='flex flex-col  flex-wrap'>
        {!!product && product?.category?.toLowerCase() === 'tops' ? (
          <h2 className='text-4xl text-center'>Tops</h2>
        ) : (
          ''
        )}
        {!!product && product?.category?.toLowerCase() === 'bottoms' ? (
          <h2 className='text-4xl text-center'>Bottoms</h2>
        ) : (
          ''
        )}
        {!!product && product?.category?.toLowerCase() === 'dresses' ? (
          <h2 className='text-4xl text-center'>Dresses</h2>
        ) : (
          ''
        )}
        <div className='card card-compact bg-base-100 shadow-xl m-3'>
          <Link to={`product/${product._id}`} alt=''>
            <figure>
              <img src={product.img} alt={product.name} />
            </figure>
          </Link>
          <div className='card-body'>
            <Link to={`product/${product._id}`} alt={product.name}>
              <h2 className='card-title'>{product.name}</h2>
            </Link>
            <p>{product.description}</p>
            <p>Price ${product.newPrice}</p>
            <StarRating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <p>In stock {product.countInStock}</p>
            <div className='card-actions justify-center'>
              <button className='btn btn-xs btn-primary'>Buy Now</button>
              <button className='btn  btn-xs btn-primary'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ProductPage.propTypes = {
  product: PropTypes.object
};
export default ProductPage;
