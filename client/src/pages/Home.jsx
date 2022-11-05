import React from 'react';
import SecondaryFooter from '../components/SecondaryFooter';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import DividerTitle from '../components/DividerTitle';
import NewArrivals from '../components/NewArrivals';
import Blogs from '../components/Blogs';

const Home = () => {
  return (
    <div className=' bg-primary'>
      <Carousel />
      <SecondaryFooter />
      <hr className='my-8 p-px ' />
      <Grid />
      <DividerTitle title={'NEW ARRIVALS'} />
      <NewArrivals />
      <div>Feature</div>
      <div>Recent Posts</div>
      <DividerTitle title={'RECENT POSTS'} />
      <Blogs />
    </div>
  );
};

export default Home;
