import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import Productcard from '../Components/Productcard';
import Loader from '../Components/Loader';
function ProductDisplay({ products }) {
  return (
    <>
      <div className="products-right">
        <div className="products-right-grid">
          <div className="products-right-grids">
            <div className="sorting">
              <select id="country" className="frm-field required sect">
                <option value="null">Default sorting</option>
                <option value="null">Sort by popularity</option>
                <option value="null">Sort by average rating</option>
                <option value="null">Sort by price</option>
              </select>
            </div>
            <div className="sorting-left">
              <select id="country1" className="frm-field required sect">
                <option value="null">Item on page 9</option>
                <option value="null">Item on page 18</option>
                <option value="null">Item on page 32</option>
                <option value="null">All</option>
              </select>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

        <div className="agile_top_brands_grids">
          <div className="row">
            {products ? (
              products.map(d => (
                <div className="col-md-4 col-sm-6 p-3" key={d.id.toString()}>
                  <Productcard products={d} />
                </div>
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
