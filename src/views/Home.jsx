import React from 'react';
import Header from '../Components/Header';
import MegaMenu from '../Components/MegaMenu';
import Carousel from '../Components/Carousel';
import BrandsStore from '../Components/BrandsStore';
import Offers from '../Components/Offers';
import Footer from '../Components/Footer';
import Topbrands from '../Components/Topbrands';
import FadeCarousel from '../Components/FadeCarousel';
import Tabs from '../Components/Tabs';

import Imagegrid from '../Components/Imagegrid';
function Home() {
  return (
    <>
      <Header />
      <MegaMenu />
      <Tabs />
      <FadeCarousel />
      <Topbrands />
      <Carousel />
      <Imagegrid />
      <BrandsStore />
      <Offers />
      <Footer />
    </>
  );
}

export default Home;
