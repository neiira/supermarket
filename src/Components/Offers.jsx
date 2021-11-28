import React from 'react';
// import '../styles/offers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import Productcard from '../Components/Productcard';
import SectionHeader from '../Components/SectionHeader';
import { useSelector } from 'react-redux';
function Offers() {
  const newHomeData = useSelector(state => state.homePage);
  const { products, loading } = newHomeData;
  // console.log(newHomeData);
  // if (!loading) {
  //   console.log(products);
  // }
  return (
    <>
      <div className="newproducts-w3agile">
        <SectionHeader sectionTitle="love chicken ?" />
        <div className="container offer-container">
          <div className=" agile_top_brands_grids">
            <div className="row">
              {!loading &&
                products &&
                products[4] &&
                products[4].sectionDetails &&
                products[4].sectionDetails.products.map(d => (
                  <div className="col-md-4 col-sm-12 p-3">
                    <Productcard products={d} key={d.id} />
                  </div>
                ))}
              {/* {data.map(d => (
                <div className="col-md-6 col-lg-3 col-sm-6 p-3">
                  <Productcard data={d} key={d.id} />
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
