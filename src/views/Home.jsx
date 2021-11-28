import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { homePage } from '../actions/homeActions';
import Carousel from '../Components/Carousel';
import BrandsStore from '../Components/BrandsStore';
import FadeCarousel from '../Components/FadeCarousel';
import Imagegrid from '../Components/Imagegrid';
import Topbrands from '../Components/Topbrands';
import Category from '../Components/Category';
import Offers from '../Components/Offers';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homePage());
  }, [dispatch]);

  return (
    <>
      <FadeCarousel />
      <Category />
      <Topbrands />
      {/* <Carousel /> */}
      <Imagegrid />
      <BrandsStore />
      <Offers />
    </>
  );
}

export default Home;
