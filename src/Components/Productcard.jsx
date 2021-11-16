import React from 'react';
import '../styles/productcard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../icon/icon.css';
import img1 from '../images/1.png';
import offer from '../images/offer.png';

function Productcard(originalPrice, discountedPrice, productName) {
  return (
    <>
      <div class=" top_brand_left">
        <div class="hover14 column">
          <div class="agile_top_brand_left_grid">
            <div class="agile_top_brand_left_grid_pos">
              <img src={offer} alt=" " class="img-responsive" />
            </div>
            <div class="agile_top_brand_left_grid1">
              <figure>
                <div class="snipcart-item block">
                  <div class="snipcart-thumb">
                    <a href="products.html">
                      <img title=" " alt=" " src={img1} />
                    </a>
                    <p>Tata-salt</p>
                    <div class="stars">
                      <FontAwesomeIcon icon={faStar} className="starBLue" color="skyblue" />
                      <FontAwesomeIcon icon={faStar} className="starBLue" color="skyblue" />
                      <FontAwesomeIcon icon={faStar} className="starBLue" color="skyblue" />
                      <FontAwesomeIcon icon={faStar} className="starBLue" color="skyblue" />
                      <FontAwesomeIcon icon={faStar} className="starGray" color="gray" />
                    </div>
                    <h4>
                      $20.99 <span>$35.00</span>
                    </h4>
                  </div>
                  <div class="snipcart-details top_brand_home_details">
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
                        <input type="submit" name="submit" value="Add to cart" class="button" />
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
