import React from 'react';
import Sidebar from '../Components/Sidebar';
import ProductDisplay from '../Components/ProductDisplay';

function GroceriesBody() {
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Sidebar />
            </div>
            <div className="col-md-8">
              <ProductDisplay />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroceriesBody;
