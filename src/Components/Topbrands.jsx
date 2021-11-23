import React from 'react';
// import '../Supermarket.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import OfferHeader from '../Components/OfferHeader';
import Productcard from '../Components/Productcard';
import SectionHeader from '../Components/SectionHeader';
import '../styles/topBrands.css';
import TataSalt from '../images/1.png';
import SunflowerOil from '../images/2.png';
import AashirvadAtta from '../images/3.png';
import SampannToorDaal from '../images/4.png';
import Sugar from '../images/5.png';
import SaffolaGold from '../images/6.png';
import SonaMansooriRice from '../images/7.png';
import MilkymPaneer from '../images/8.png';
import BasmatiRice from '../images/9.png';
import FortuneOil from '../images/10.png';
import NestleASlim from '../images/12.png';
import BreadSandwich from '../images/13.png';

function Topbrands() {
  const weekofferData = [
    {
      id: 1,
      productName: 'Sona-Mansoor-Rice',
      originalPrice: 35.99,
      discountedPrice: 55.99,
      productImage: SonaMansooriRice,
      ratings: 4,
      hasOffer: true
    },
    {
      id: 2,
      productName: 'Milky-Mist-Paneer',
      originalPrice: 30.99,
      discountedPrice: 45.99,
      productImage: MilkymPaneer,
      ratings: 4,
      hasOffer: true
    },
    {
      id: 3,
      productName: 'Basmati Rice',
      originalPrice: 80.99,
      discountedPrice: 105.99,
      productImage: BasmatiRice,
      ratings: 4,
      hasOffer: true
    },
    {
      id: 4,
      productName: 'Fortune-Sunflower-oil ',
      originalPrice: 20.99,
      discountedPrice: 35.99,
      productImage: FortuneOil,
      ratings: 4,
      hasOffer: true
    },
    {
      id: 5,
      productName: 'Nestle-A-Slim',
      originalPrice: 20.99,
      discountedPrice: 35.99,
      productImage: NestleASlim,
      ratings: 4,
      hasOffer: true
    },
    {
      id: 6,
      productName: 'Bread-Sandwich',
      originalPrice: 40.99,
      discountedPrice: 65.99,
      productImage: BreadSandwich,
      ratings: 4,
      hasOffer: true
    }
  ];

  const adOfferData = [
    {
      id: 1,
      productName: 'Tata Salt',
      originalPrice: 20.99,
      discountedPrice: 35.99,
      productImage: TataSalt,
      ratings: 4,
      hasOffer: true
    },
    {
      id: 2,
      productName: 'Fortune-Sunflower Oil',
      originalPrice: 20.99,
      discountedPrice: 35.99,
      productImage: SunflowerOil,
      ratings: 5,
      hasOffer: true
    },
    {
      id: 3,
      productName: 'Aashirvad Atta',
      originalPrice: 40.99,
      discountedPrice: 65.99,
      productImage: AashirvadAtta,
      ratings: 5,
      hasOffer: true
    },
    {
      id: 4,
      productName: 'Sampann Toor-Daal',
      originalPrice: 35.99,
      discountedPrice: 55.99,
      productImage: SampannToorDaal,
      ratings: 3,
      hasOffer: true
    },
    {
      id: 5,
      productName: 'Parryss-sugar',
      originalPrice: 30.99,
      discountedPrice: 45.99,
      productImage: Sugar,
      ratings: 5,
      hasOffer: true
    },
    {
      id: 6,
      productName: 'Saffola-Gold',
      originalPrice: 80.99,
      discountedPrice: 105.99,
      productImage: SaffolaGold,
      ratings: 5,
      hasOffer: true
    }
  ];

  return (
    <>
      <div className="top-brands">
        <div className="container ">
          <SectionHeader sectionTitle="top selling offers" />
          <div className="grid_3 grid_5">
            <div className="toggle-button">
              <ul className="nav nav-tabs" id="pills-tab" role="tablist">
                <li className="active" role="presentation">
                  <a
                    href="abs"
                    className="active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer1"
                    type="button"
                    role="tab"
                    aria-controls="pills-offer1"
                    aria-selected="true"
                  >
                    Advertised Offer
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="las"
                    className=""
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-offer2"
                    type="button"
                    role="tab"
                    aria-controls="pills-offer2"
                    aria-selected="false"
                  >
                    Week Offer
                  </a>
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
                    {adOfferData.map(d => (
                      <div className="col-md-4 col-sm-12 p-3">
                        <Productcard data={d} key={d.id} />
                      </div>
                    ))}
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
                    {weekofferData.map(d => (
                      <div className="col-md-4 col-sm-12 p-3">
                        <Productcard data={d} key={d.id} />
                      </div>
                    ))}
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
