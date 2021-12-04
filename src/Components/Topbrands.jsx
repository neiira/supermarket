import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/topBrands.css';
import OfferHeader from '../Components/OfferHeader';
import Productcard from '../Components/Productcard';
import SectionHeader from '../Components/SectionHeader';
import Loader from '../Components/Loader';
import { Link } from 'react-router-dom';
function Topbrands() {
  const newHomeData = useSelector(state => state.homePage);
  const { products, loading } = newHomeData;
  console.log(newHomeData);
  if (!loading) {
    newHomeData &&
      products &&
      products[7] &&
      products[7].sectionDetails &&
      products[7].sectionDetails.products.map(product => console.log(product));
  }

  return (
    <>
      <div className="top-brands">
        <div className="container ">
          <SectionHeader sectionTitle="top selling offers" />
          <div className="grid_3 grid_5">
            <div className="toggle-button">
              <ul className="nav nav-tabs" id="pills-tab" role="tablist">
                <li className="active" role="presentation">
                  {loading ? (
                    <Loader />
                  ) : (
                    products &&
                    products[2] && (
                      <Link
                        to="/products"
                        className="active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-offer1"
                        type="button"
                        role="tab"
                        aria-controls="pills-offer1"
                        aria-selected="true"
                      >
                        {products[2].sectionDetails.title}
                      </Link>
                    )
                  )}
                </li>
                <li role="presentation">
                  {loading ? (
                    <Loader />
                  ) : (
                    products &&
                    products[6] && (
                      <Link
                        to="/products"
                        className=""
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-offer2"
                        type="button"
                        role="tab"
                        aria-controls="pills-offer2"
                        aria-selected="false"
                      >
                        {products[6].sectionDetails.title}
                      </Link>
                    )
                  )}
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
                  <div className=" row advertised-content d-flex justify-content-between flex-wrap ">
                    {loading ? (
                      <Loader />
                    ) : (
                      products &&
                      products[2] &&
                      products[2].sectionDetails &&
                      products[2].sectionDetails.products.map(d => (
                        <div className="col-md-4 col-sm-12 p-3" key={d.id}>
                          <Productcard products={d} />
                        </div>
                      ))
                    )}
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
                    {loading ? (
                      <Loader />
                    ) : (
                      products &&
                      products[6] &&
                      products[6].sectionDetails &&
                      products[6].sectionDetails.products.map(d => (
                        <div className="col-md-4 col-sm-12 p-3" key={d.id}>
                          <Productcard products={d} />
                        </div>
                      ))
                    )}
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
