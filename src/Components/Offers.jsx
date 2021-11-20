import React from 'react';
// import '../styles/offers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import SectionHeader from '../Components/SectionHeader';
import Productcard from '../Components/Productcard';

function Offers() {
  return (
    <>
      <div className="newproducts-w3agile">
        <SectionHeader sectionTitle="new offers" />
        <div className="container offer-container">
          <div className=" agile_top_brands_grids">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <Productcard />
              </div>
              <div className="col-md-3 col-sm-6">
                <Productcard />
              </div>
              <div className="col-md-3 col-sm-6">
                <Productcard />
              </div>
              <div className="col-md-3 col-sm-6">
                <Productcard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
