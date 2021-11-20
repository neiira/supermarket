import React from 'react';
import '../Supermarket.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../icon/icon.css';
import offer from '../images/offer.png';

function Productcard({ data }) {
  const { productName, originalPrice, discountedPrice, productImage, ratings, hasOffer } = data;

  return (
    <>
      <div className=" top_brand_left">
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            {hasOffer && (
              <div className="agile_top_brand_left_grid_pos">
                <img src={offer} alt=" " className="img-responsive" />
              </div>
            )}
            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    <a href="products.html">
                      <img title=" " alt=" " src={productImage} />
                    </a>
                    <p>{productName}</p>
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
                      {originalPrice}
                      <span>{discountedPrice}</span>
                    </h4>
                  </div>
                  <div className="snipcart-details top_brand_home_details">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input type="hidden" name="item_name" value="Fortune Sunflower Oil" />
                        <input type="hidden" name="amount" value="20.99" />
                        <input type="hidden" name="discount_amount" value="1.00" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
                        <input type="submit" name="submit" value="Add to cart" className="button" />
                      </fieldset>
                    </form>
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
