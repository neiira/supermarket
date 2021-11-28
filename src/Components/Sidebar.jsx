import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import '../icon/icon.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div className="products-left">
        <div className="categories">
          <h2>Categories</h2>
          <ul className="cate">
            <li>
              <Link to="/momo">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                MOMO
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/products">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken (Kothe) Momo
                </Link>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken (Steam) Momo
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken (Chilli) Momo
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Veg (Chilli) Momo
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Veg (Kothe) Momo
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Veg (Steam) Momo
                </a>
              </li>
            </ul>
            <li>
              <a href="products.html">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                NOODLES
              </a>
            </li>
            <ul>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Veg Noodles
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken Noodles
                </a>
              </li>
            </ul>
            <li>
              <a href="products.html">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                CHILLI
              </a>
            </li>
            <ul>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken Chilli
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Mushroom Chilli
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Paneer Chilli
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
