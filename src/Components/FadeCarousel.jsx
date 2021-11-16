import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img11 from '../images/11.jpg';

import img22 from '../images/22.jpg';
import img44 from '../images/44.jpg';
function FadeCarousel() {
  return (
    <>
      <Carousel fade interval={3000} pause={false} indicators={false} controls={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img11} alt="First slide" />
          <Carousel.Caption>
            <h1>BUY RICE PRODUCTS ARE NOW ON LINE WITH US</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img22} alt="Second slide" />

          <Carousel.Caption>
            <h1>WHOLE SPICES PRODUCTS ARE NOW ON LINE WITH US</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img44} alt="Third slide" />

          <Carousel.Caption>
            <h1>WHOLE SPICES PRODUCTS ARE NOW ON LINE WITH US</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default FadeCarousel;
