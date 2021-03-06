import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Loader from '../Components/Loader';
function FadeCarousel() {
  const newHomeData = useSelector(state => state.homePage);
  const { products, loading } = newHomeData;

  return (
    <>
      <Carousel fade interval={3000} pause={false} indicators={false} controls={false}>
        {loading ? (
          <Loader />
        ) : (
          products[0].details.map(value => (
            <Carousel.Item key={value.id}>
              <img className="d-block w-100 opacity-1" src={value.images} height="500" alt="Third slide" />
              <Carousel.Caption>
                <h1 style={{ paddingBottom: '150px' }} className="text-dark text-right">
                  {/* {value.category_search} */}
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        )}
      </Carousel>
    </>
  );
}

export default FadeCarousel;
