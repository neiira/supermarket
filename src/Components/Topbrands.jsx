import React from 'react';
// import '../Supermarket.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import OfferHeader from '../Components/OfferHeader';
import Productcard from '../Components/Productcard';

import SectionHeader from '../Components/SectionHeader';
import '../styles/topBrands.css';
function Topbrands() {
  return (
    <>
      <div className="top-brands">
        <div className="container ">
          <SectionHeader sectionTitle="top selling offers" />
          <div className="grid_3 grid_5">
            <div className="toggle-button">
              <ul className="nav nav-tabs" id="pills-tab" role="tablist">
                <li className="active" role="presentation">
                  <a
                    href="abs"
                    className="active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer1"
                    type="button"
                    role="tab"
                    aria-controls="pills-offer1"
                    aria-selected="true"
                  >
                    Advertised Offer
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="las"
                    className=""
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer2"
                    type="button"
                    role="tab"
                    aria-controls="pills-offer2"
                    aria-selected="false"
                  >
                    Week Offer
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-offer1"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div id="advertise-offer ">
                  <OfferHeader
                    title="Advertised this week"
                    offerDescription="We've pulled together all our advertised offers into one place, so you won't miss out on a great deal."
                  />
                  <div className=" row advertised-content d-flex justify-content-between flex-wrap">
                    <div className="col-md-4 col-sm-12">
                      <Productcard />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <Productcard />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <Productcard />
                    </div>
                    <div style={{ paddingTop: '30px' }}></div>
                    <div className="col-md-4 col-sm-12">
                      <Productcard />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <Productcard />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <Productcard />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-offer2" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div id="week-offer">
                  <OfferHeader
                    title="This week"
                    offerDescription="We've pulled together all our advertised offers into one place, so you won't miss out on a great deal."
                  />
                  <div className=" row weak-offer-content d-flex justify-content-between flex-wrap">
                    <div className="col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-md-4">
                      <Productcard />
                    </div>
                    <div style={{ paddingTop: '20px' }}></div>
                    <div className="col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-md-4">
                      <Productcard />
                    </div>
                    <div className="col-md-4">
                      <Productcard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbrands;
