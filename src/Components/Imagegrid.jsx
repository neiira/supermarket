import React from 'react';
// import '../styles/imagegrid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import gridImg1 from '../images/p2.jpg';
import gridImg2 from '../images/p3.jpg';
import gridImg3 from '../images/p4.jpg';
import gridImg4 from '../images/111.jpg';

function Imagegrid() {
  return (
    <>
      <div className="ban-bottom-w3l">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ban-bottom3">
              <div className="ban-top">
                <img src={gridImg1} className="img-responsive" alt="" />
              </div>
              <div className="ban-img">
                <div className=" ban-bottom1">
                  <div className="ban-top">
                    <img src={gridImg2} className="img-responsive" alt="" />
                  </div>
                </div>
                <div className="ban-bottom2">
                  <div className="ban-top">
                    <img src={gridImg3} className="img-responsive" alt="" />
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div className="col-md-6 ban-bottom">
              <div className="ban-top">
                <img src={gridImg4} className="img-responsive" alt="" />
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
}

export default Imagegrid;
