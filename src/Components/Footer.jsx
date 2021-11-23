import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faDribbble, faVimeo } from '@fortawesome/free-brands-svg-icons';
import footerimg from '../images/card.png';
import '../icon/icon.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="w3_footer_grids">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 w3_footer_grid">
                <h3>Contact</h3>
                <ul className="address">
                  <li>
                    <FontAwesomeIcon icon={faMapMarker} className="address" />
                    1234k Avenue, 4th block, <span>New York City.</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="address" />

                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className="address" />
                    +1234 567 567
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 w3_footer_grid">
                <h3>Information</h3>
                <ul className="info">
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/contact">Short Codes</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/faqs">FAQ's</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <a href="products.html">Special Products</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 w3_footer_grid">
                <h3>Category</h3>
                <ul className="info">
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/groceries">Groceries</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/household">House hold</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/personalcare">Personal Care</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/packagedfood">Packaged Food</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <a href="beverages.html">Beverages</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 w3_footer_grid">
                <h3>Profile</h3>
                <ul className="info">
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/store">Store</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/checkout">Check Out</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />

                    <Link to="/register">Create Account</Link>
                  </li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>

        <div className="footer-copy">
          <div className="container">
            <p>
              © 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-botm">
        <div className="container">
          <div className="w3layouts-foot">
            <ul className="socialBrands">
              <li>
                <a href="#" className="w3_agile_facebook">
                  <FontAwesomeIcon icon={faFacebook} className="" />
                </a>
              </li>
              <li>
                <a href="#" className="agile_twitter">
                  <FontAwesomeIcon icon={faTwitter} className="" />
                </a>
              </li>
              <li>
                <a href="#" className="w3_agile_dribble">
                  <FontAwesomeIcon icon={faDribbble} className="" />
                </a>
              </li>
              <li>
                <a href="#" className="w3_agile_vimeo">
                  <FontAwesomeIcon icon={faVimeo} className="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="payment-w3ls">
            <img src={footerimg} alt=" " className="img-responsive" />
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
