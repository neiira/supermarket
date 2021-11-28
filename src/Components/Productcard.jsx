import React from 'react';
import '../Supermarket.css';
import '../styles/productcard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../icon/icon.css';
import offer from '../images/offer.png';

function Productcard({ products }) {
  const { title, unitPrice, ratings, hasOffer, images } = products;
  const [{ markedPrice, sellingPrice }] = unitPrice;
  const [{ imageName }] = images;

  return (
    <>
      <div className=" top_brand_left">
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            {hasOffer && (
              <div className="agile_top_brand_left_grid_pos">
                <img src={offer} alt=" " className="img-responsive" style={{ verticalAlign: 'top' }} />
              </div>
            )}
            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    <a href="products.html">
                      <img title="" src={imageName} alt="noimage" className="img-responsive" width="200" height="200" />
                    </a>
                    <p>{title}</p>
                    <div className="stars">
                      {
                        <FontAwesomeIcon
                          icon={faStar}
                          className={ratings >= 1 ? 'starBLue' : 'starGray'}
                          color={ratings >= 1 ? 'skyblue' : 'gray'}
                        />
                      }
                      {
                        <FontAwesomeIcon
                          icon={faStar}
                          className={ratings >= 2 ? 'starBLue' : 'starGray'}
                          color={ratings >= 2 ? 'skyblue' : 'gray'}
                        />
                      }
                      {
                        <FontAwesomeIcon
                          icon={faStar}
                          className={ratings >= 3 ? 'starBLue' : 'starGray'}
                          color={ratings >= 3 ? 'skyblue' : 'gray'}
                        />
                      }
                      {
                        <FontAwesomeIcon
                          icon={faStar}
                          className={ratings >= 4 ? 'starBLue' : 'starGray'}
                          color={ratings >= 4 ? 'skyblue' : 'gray'}
                        />
                      }
                      {
                        <FontAwesomeIcon
                          icon={faStar}
                          className={ratings >= 5 ? 'starBLue' : 'starGray'}
                          color={ratings >= 5 ? 'skyblue' : 'gray'}
                        />
                      }
                    </div>
                    <h4>
                      {`$${markedPrice}`}
                      <span>{`$${sellingPrice}`}</span>
                    </h4>
                  </div>
                  <div className="snipcart-details top_brand_home_details">
                    <button className="add-to-cart-button">Add to cart</button>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Productcard;
