import React from 'react';
import '../Supermarket.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faDribbble, faVimeo } from '@fortawesome/free-brands-svg-icons';
import footerimg from '../images/card.png';
import '../icon/icon.css';

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="container">
          <div class=" row w3_footer_grids">
            <div class="col-md-3 w3_footer_grid">
              <h3>Contact</h3>

              <ul class="address">
                <li>
                  <FontAwesomeIcon icon={faMapMarker} className="address" />
                  1234k Avenue, 4th block, <span>New York City.</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="address" />

                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="address" size="xs" />
                  +1234 567 567
                </li>
              </ul>
            </div>
            <div class="col-md-3 w3_footer_grid">
              <h3>Information</h3>
              <ul class="info">
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="short-codes.html">Short Codes</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="faq.html">FAQ's</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="products.html">Special Products</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 w3_footer_grid">
              <h3>Category</h3>
              <ul class="info">
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  <a href="groceries.html">Groceries</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  <a href="household.html">Household</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  <a href="personalcare.html">Personal Care</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  <a href="packagedfoods.html">Packaged Foods</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="beverages.html">Beverages</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 w3_footer_grid">
              <h3>Profile</h3>
              <ul class="info">
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="products.html">Store</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="checkout.html">My Cart</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="login.html">Login</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                  <a href="registered.html">Create Account</a>
                </li>
              </ul>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>

        <div class="footer-copy">
          <div class="container">
            <p>
              © 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a>
            </p>
          </div>
        </div>
      </div>
      <div class="footer-botm">
        <div class="container">
          <div class="w3layouts-foot">
            <ul className="socialBrands">
              <li>
                <a href="#" class="w3_agile_facebook">
                  <FontAwesomeIcon icon={faFacebook} className="" />
                </a>
              </li>
              <li>
                <a href="#" class="agile_twitter">
                  <FontAwesomeIcon icon={faTwitter} className="" />
                </a>
              </li>
              <li>
                <a href="#" class="w3_agile_dribble">
                  <FontAwesomeIcon icon={faDribbble} className="" />
                </a>
              </li>
              <li>
                <a href="#" class="w3_agile_vimeo">
                  <FontAwesomeIcon icon={faVimeo} className="" />
                </a>
              </li>
            </ul>
          </div>
          <div class="payment-w3ls">
            <img src={footerimg} alt=" " class="img-responsive" />
          </div>
          <div class="clearfix"> </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
