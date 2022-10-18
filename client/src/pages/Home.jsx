import React from 'react';
import mock from '../assets/images/mockphoto.jpg';
import SecondaryFooter from '../components/SecondaryFooter';
import  Carousel  from '../components/Carousel';

// This needs to be a carousel
const Home = () => {
  return (
    <>
    <Carousel/>
    <div>Customer Support</div>
    <div className='divider'></div>
    <div>Grid</div>
    <div>New Arrivals</div>
    <div>Feature</div>
    <div>Recent Posts</div>
    </>
      );
};

export default Home;
