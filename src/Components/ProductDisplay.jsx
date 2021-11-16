import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import Productcard from '../Components/Productcard';
import ToorDaal from '../images/14.png';
function ProductDisplay() {
  return (
    <>
      <div class="products-right">
        <div class="products-right-grid">
          <div class="products-right-grids">
            <div class="sorting">
              <select id="country" onchange="change_country(this.value)" class="frm-field required sect">
                <option value="null">Default sorting</option>
                <option value="null">Sort by popularity</option>
                <option value="null">Sort by average rating</option>
                <option value="null">Sort by price</option>
              </select>
            </div>
            <div class="sorting-left">
              <select id="country1" onchange="change_country(this.value)" class="frm-field required sect">
                <option value="null">Item on page 9</option>
                <option value="null">Item on page 18</option>
                <option value="null">Item on page 32</option>
                <option value="null">All</option>
              </select>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>

        <div class="agile_top_brands_grids">
          <div className="row">
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
            <div className="col-md-4 p-3">
              <Productcard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
