import React from 'react';
import { useSelector } from 'react-redux';
// import '../styles/imagegrid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';

function Imagegrid() {
  const newHomeData = useSelector(state => state.homePage);
  const { products, loading } = newHomeData;

  // if (!loading) {
  //   console.log(products[6].details[0].images);
  // }
  return (
    <>
      <div className="ban-bottom-w3l">
        <div className="container">
          {!loading && (
            <div className="row">
              <div className="col-md-6 ban-bottom">
                <div className="ban-top">
                  <img src={products[6].details[0].images} className="img-responsive" alt="" />
                </div>
              </div>
              <div className="col-md-6 ban-bottom">
                <div className="ban-top">
                  <img src={products[6].details[1].images} className="img-responsive" alt="" />
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
