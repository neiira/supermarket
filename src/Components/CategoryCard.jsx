import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/category.css';
import { Link } from 'react-router-dom';
function CategoryCard({ categories }) {
  const { title, icon, productCount } = categories;
  return (
    <>
      <div className="category-item">
        <div className="row align-items-center">
          <Link to={`/${title}`} className="category-link-one">
            <img src={icon} alt="category" className="img-fluid category-img" width="445" />
          </Link>

          <div className="description">
            <h4 className="category-title">{title}</h4>
            <span className="productCount">{`${productCount} products`}</span>
            <br />
            <Link to={`/${title}`} className="category-link">
              Shop now
              <FontAwesomeIcon icon={faArrowCircleRight} color="orange" className="category-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
