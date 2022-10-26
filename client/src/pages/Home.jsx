import React from 'react';
import mock from '../assets/images/mockphoto.jpg';
import SecondaryFooter from '../components/SecondaryFooter';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import DividerTitle from '../components/DividerTitle';


const Home = () => {
  return (
    <div className=' bg-primary'>
      <Carousel />
      <SecondaryFooter />
      <hr className='my-8 p-px ' />
      <Grid />
<DividerTitle title={'NEW ARRIVALS'}/>
      <div>Feature</div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et consequuntur magnam delectus excepturi velit, quibusdam ipsum esse minus iusto id in fugit impedit suscipit ad perspiciatis. Dolores, error odio!
      Quae aperiam totam asperiores itaque! Voluptatum optio numquam a aspernatur. Fugit aliquid odit sunt blanditiis, ea sed quibusdam magnam veniam in natus id, sequi, a eius laudantium. Esse, totam sint.
      Quas, cumque ducimus! Eos cupiditate doloribus laudantium sunt impedit ab. Nesciunt, sapiente eligendi esse impedit maxime eveniet totam at veniam, quaerat optio officiis, facilis soluta? Laudantium velit veniam in sunt.</p>
      <div>Recent Posts</div>
<DividerTitle title={'RECENT POSTS'}/>
      
    </div>
  );
};

export default Home;
