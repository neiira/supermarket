import React from 'react';
import '../Supermarket.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import carosuselImg1 from '../images/b1.jpg';
import carosuselImg2 from '../images/b3.jpg';
import { Link } from 'react-router-dom';

function Carousel() {
  return (
    <>
      <div id="imageCarouselIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#imageCarouselIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#imageCarouselIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#imageCarouselIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/rice">
              <img src={carosuselImg2} className="d-block w-100" alt="First slide" />
            </Link>
          </div>
          <div className="carousel-item">
            <img src={carosuselImg2} className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={carosuselImg1} className="d-block w-100" alt="Third slide" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
