import React from 'react';
import SecondaryFooter from '../components/SecondaryFooter';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import DividerTitle from '../components/DividerTitle';
import NewArrivals from '../components/NewArrivals';
import Blogs from '../components/Blogs';
import BrandFooter from '../components/BrandFooter';
import NewsletterSignUp from '../components/NewsletterSignUp';

const Home = () => {
  return (
    <div className=' bg-primary'>
      <Carousel />
      <SecondaryFooter />
      <hr className='my-8 p-px ' />
      <Grid />
      <DividerTitle title={'NEW ARRIVALS'} />
      <NewArrivals />
      <DividerTitle title={'RECENT POSTS'} />
      <Blogs />
      <BrandFooter/>
      <NewsletterSignUp/>
    </div>
  );
};

export default Home;
