import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import Productcard from '../Components/Productcard';

import ToorDaal from '../images/14.png';
import NavaratanDal from '../images/15.png';
import WhitePeasmatar from '../images/16.png';
import ChannaDal from '../images/17.png';

function ProductDisplay() {
  const data = [
    {
      id: 1,
      productName: 'Milk Caramel',
      originalPrice: 55,
      discountedPrice: 35.99,
      productImage: ToorDaal,
      ratings: 3,
      hasOffer: true
    },
    {
      id: 2,
      productName: 'Apple',
      originalPrice: 120,
      discountedPrice: 110,
      productImage: ToorDaal,
      ratings: 5,
      hasOffer: false
    },
    {
      id: 3,
      productName: 'Navarat-Daal',
      originalPrice: 30.99,
      discountedPrice: 45.99,
      productImage: NavaratanDal,
      ratings: 5,
      hasOffer: true
    },
    {
      id: 4,
      productName: 'White-Peasmatar',
      originalPrice: 80.99,
      discountedPrice: 105.99,
      productImage: WhitePeasmatar,
      ratings: 3,
      hasOffer: true
    },
    {
      id: 5,
      productName: 'Channa-Dal',
      originalPrice: 35.99,
      discountedPrice: 55.99,
      productImage: ChannaDal,
      ratings: 5,
      hasOffer: true
    },
    {
      id: 1,
      productName: 'Milk Caramel',
      originalPrice: 55,
      discountedPrice: 35.99,
      productImage: ToorDaal,
      ratings: 3,
      hasOffer: true
    },
    {
      id: 2,
      productName: 'Apple',
      originalPrice: 120,
      discountedPrice: 110,
      productImage: ToorDaal,
      ratings: 5,
      hasOffer: false
    },
    {
      id: 3,
      productName: 'Navarat-Daal',
      originalPrice: 30.99,
      discountedPrice: 45.99,
      productImage: NavaratanDal,
      ratings: 5,
      hasOffer: true
    },
    {
      id: 4,
      productName: 'White-Peasmatar',
      originalPrice: 80.99,
      discountedPrice: 105.99,
      productImage: WhitePeasmatar,
      ratings: 3,
      hasOffer: true
    }
  ];

  return (
    <>
      <div className="products-right">
        <div className="products-right-grid">
          <div className="products-right-grids">
            <div className="sorting">
              <select id="country" onchange="change_country(this.value)" className="frm-field required sect">
                <option value="null">Default sorting</option>
                <option value="null">Sort by popularity</option>
                <option value="null">Sort by average rating</option>
                <option value="null">Sort by price</option>
              </select>
            </div>
            <div className="sorting-left">
              <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
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
            {data.map(d => (
              <div className="col-md-4 col-sm-6 p-3">
                <Productcard data={d} key={d.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
