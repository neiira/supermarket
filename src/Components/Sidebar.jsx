import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Supermarket.css';
import '../icon/icon.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <>
      <div className="products-left">
        <div className="categories">
          <h2>Categories</h2>
          <ul className="cate">
            <li>
              <a href="products.html">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                Fruits And Vegetables
              </a>
            </li>
            <ul>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Cuts & Sprouts
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Flowers
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Fresh Herbs & Seasonings
                </a>
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Fresh Vegetables
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  International Vegetables
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Organic Fruits & Vegetables
                </a>
              </li>
            </ul>
            <li>
              <a href="products.html">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                Grocery & Staples
              </a>
            </li>
            <ul>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Dals & Pulses
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Dry Fruits
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Edible Oils & Ghee
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Flours & Sooji
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Masalas & Spices
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Organic Staples
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Rice & Rice Products
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Salt, Sugar & Jaggery
                </a>
              </li>
            </ul>
            <li>
              <a href="products.html">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                PersonalCare
              </a>
            </li>
            <ul>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Baby Care
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Cosmetics
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Deos & Perfumes
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Skin Care
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Sanitary Needs
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Oral Care
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Personal Hygiene
                </a>{' '}
              </li>
              <li>
                <a href="products.html">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Shaving Needs
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
