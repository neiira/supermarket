import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/product.css';

function Products({ product }) {
  const { title, slug, images, unitPrice, categoryTitle, tags } = product;
  const [{ imageName }] = images;
  const [{ markedPrice }] = unitPrice;
  return (
    <>
      <div className="single-product">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="img-container col">
                <img src={imageName} alt="" className="product-img" />
              </div>
              <div className="product-description col">
                <h3 className="product-title fw-500">{title}</h3>
                <p className="desc">
                  Category:
                  <Link to={`/${categoryTitle}`}>
                    <span>{categoryTitle}</span>
                  </Link>
                </p>
                <p className="desc">
                  Tag:
                  <Link to={`/${categoryTitle}`}>
                    <span>{tags}</span>
                  </Link>
                </p>
                <span className="price">{`NRS ${markedPrice} (including tax)`}</span>
                <div className="add-container">
                  <div className="amount-container d-flex">
                    <div className="d-flex quantity-btn align-items-center">
                      <button className="add">-</button>
                      <span>1</span>
                      <button className="sub">+</button>
                    </div>
                    <div className="add-cart-button">
                      <button className="btn add-cart-button-btn">+ ADD TO CART</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-img-second">
            <img src={imageName} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
