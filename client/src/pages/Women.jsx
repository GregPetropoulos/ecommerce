import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ProductPage from '../components/ProductPage';
import Accordion from '../components/Accordion';

const Women = ({ products }) => {
  const { id } = useParams();
  //Womens page showing products unless clicked on then showing the a page of details of that product
  return (
    <>
      {id ? (
        <Outlet />
      ) : (
        <div className='bg-primary flex flex-row justify-center align-middle flex-wrap'>
          <h1 className='text-5xl py-4 text-center text-neutral w-full'>
            Women
          </h1>
          <Accordion />
          {products
            .sort((a, b) => (a.category < b.category ? 1 : -1))
            .map((product) => {
              return (
                <>
                  {product?.womens ? (
                    <ProductPage product={product} key={product._id} />
                  ) : null}
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Women;
