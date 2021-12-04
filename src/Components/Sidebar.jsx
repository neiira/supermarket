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
                <Link to="/products">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken (Steam) Momo
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken (Chilli) Momo
                </Link>
              </li>
              <li>
                <Link to="/productss">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Veg (Chilli) Momo
                </Link>
              </li>
              <li>
                <Link to="/productss">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Veg (Kothe) Momo
                </Link>
              </li>
              <li>
                <Link to="/productss">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Veg (Steam) Momo
                </Link>
              </li>
            </ul>
            <li>
              <Link to="/productss">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                NOODLES
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/productss">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Veg Noodles
                </Link>
              </li>
              <li>
                <Link to="/productss">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken Noodles
                </Link>
              </li>
            </ul>
            <li>
              <Link to="/productss">
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                CHILLI
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/productss">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Chicken Chilli
                </Link>
              </li>
              <li>
                <Link to="/productss">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Mushroom Chilli
                </Link>
              </li>
              <li>
                <Link to="/productss">
                  <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
                  Paneer Chilli
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
