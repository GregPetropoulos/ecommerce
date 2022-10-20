import React from 'react';
import mock from '../assets/images/mockphoto.jpg';
import SecondaryFooter from '../components/SecondaryFooter';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className='bg-primary'>
      <Carousel />
      <SecondaryFooter />
      <hr className='my-8 p-px bg-primary-content' />
      <div>Grid</div>
      <div>New Arrivals</div>
      <div>Feature</div>
      <div>Recent Posts</div>
    </div>
  );
};

export default Home;
