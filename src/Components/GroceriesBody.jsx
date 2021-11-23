import React from 'react';
import Sidebar from '../Components/Sidebar';
import ProductDisplay from '../Components/ProductDisplay';

function GroceriesBody() {
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <Sidebar />
            </div>
            <div className="col-lg-8 col-md-12">
              <ProductDisplay />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroceriesBody;
