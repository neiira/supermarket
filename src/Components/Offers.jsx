import React from 'react';
// import '../styles/offers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import SectionHeader from '../Components/SectionHeader';
import Productcard from '../Components/Productcard';
import friedGram from '../images/14.png';
import NavaratanDal from '../images/15.png';
import WhitePeasmatar from '../images/16.png';
import ChannaDal from '../images/17.png';
function Offers() {
  const data = [
    {
      id: 1,
      productName: 'fried-Gram',
      originalPrice: 35.99,
      discountedPrice: 55.99,
      productImage: friedGram,
      ratings: 3,
      hasOffer: true
    },
    {
      id: 2,
      productName: 'Navarat-Daal',
      originalPrice: 30.99,
      discountedPrice: 45.99,
      productImage: NavaratanDal,
      ratings: 5,
      hasOffer: true
    },
    {
      id: 3,
      productName: 'White-Peasmatar',
      originalPrice: 80.99,
      discountedPrice: 105.99,
      productImage: WhitePeasmatar,
      ratings: 3,
      hasOffer: true
    },
    {
      id: 4,
      productName: 'Channa-Dal',
      originalPrice: 35.99,
      discountedPrice: 55.99,
      productImage: ChannaDal,
      ratings: 5,
      hasOffer: true
    }
  ];

  return (
    <>
      <div className="newproducts-w3agile">
        <SectionHeader sectionTitle="new offers" />
        <div className="container offer-container">
          <div className=" agile_top_brands_grids">
            <div className="row">
              {data.map(d => (
                <div className="col-md-6 col-lg-3 col-sm-6 p-3">
                  <Productcard data={d} key={d.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;
