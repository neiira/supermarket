import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import Productcard from '../Components/Productcard';
import SectionHeader from '../Components/SectionHeader';
import { useSelector } from 'react-redux';
import Loader from '../Components/Loader';
function Offers() {
  const newHomeData = useSelector(state => state.homePage);
  const { products, loading } = newHomeData;

  return (
    <>
      <div className="newproducts-w3agile">
        <SectionHeader sectionTitle="love chicken ?" />
        <div className="container offer-container">
          <div className=" agile_top_brands_grids">
            <div className="row">
              {loading ? (
                <Loader />
              ) : (
                products &&
                products[4] &&
                products[4].sectionDetails &&
                products[4].sectionDetails.products.map(d => (
                  <div className="col-md-4 col-sm-12 p-3" key={d.id}>
                    <Productcard products={d} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
