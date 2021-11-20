import React from 'react';
import Carousel from '../Components/Carousel';
import BrandsStore from '../Components/BrandsStore';
import Offers from '../Components/Offers';
import Topbrands from '../Components/Topbrands';
import FadeCarousel from '../Components/FadeCarousel';
import Imagegrid from '../Components/Imagegrid';
function Home() {
  return (
    <>
      <FadeCarousel />
      <Topbrands />
      <Carousel />
      <Imagegrid />
      <BrandsStore />
      <Offers />
    </>
  );
}

export default Home;
