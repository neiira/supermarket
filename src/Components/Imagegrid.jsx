import React from 'react';
import '../styles/imagegrid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import gridImg1 from '../images/p2.jpg';
import gridImg2 from '../images/p3.jpg';
import gridImg3 from '../images/p4.jpg';
import gridImg4 from '../images/111.jpg';

function Imagegrid() {
  return (
    <>
      <div class="ban-bottom-w3l">
        <div class="container">
          <div className="row">
            <div class="col-md-6 ban-bottom3">
              <div class="ban-top">
                <img src={gridImg1} class="img-responsive" alt="" />
              </div>
              <div class="ban-img">
                <div class=" ban-bottom1">
                  <div class="ban-top">
                    <img src={gridImg2} class="img-responsive" alt="" />
                  </div>
                </div>
                <div class="ban-bottom2">
                  <div class="ban-top">
                    <img src={gridImg3} class="img-responsive" alt="" />
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
            <div class="col-md-6 ban-bottom">
              <div class="ban-top">
                <img src={gridImg4} class="img-responsive" alt="" />
              </div>
            </div>
          </div>

          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}

export default Imagegrid;
