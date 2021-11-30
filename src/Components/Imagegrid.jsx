import React from 'react';
import { useSelector } from 'react-redux';
// import '../styles/imagegrid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import Products from './Product';

function Imagegrid() {
  const newHomeData = useSelector(state => state.homePage);
  const { products, loading } = newHomeData;
  // console.log(newHomeData);
  // if (!loading) {
  //   products && products[5] && products[5].details && console.log(products[5].details);
  // }
  return (
    <>
      <div className="ban-bottom-w3l">
        <div className="container">
          {!loading && products[5] && products[5].details && (
            <div className="row">
              <div className="col-md-6 ban-bottom p-3">
                <div className="ban-top">
                  <img src={products[5].details[0].images} className="img-responsive" alt="" />
                </div>
              </div>
              <div className="col-md-6 ban-bottom p-3">
                <div className="ban-top">
                  <img src={products[5].details[1].images} className="img-responsive" alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Imagegrid;
