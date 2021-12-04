import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { addItemToCart } from '../actions/cartActions';
import Loader from '../Components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/product.css';

function Products({ product }) {
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const { title, images, unitPrice, categoryTitle, tags } = product;
  const [{ imageName }] = images;
  const [{ markedPrice }] = unitPrice;
  const { id, slug } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const access_token = localStorage.getItem('accessToken');
  const addItemToCartHandler = () => {
    if (!access_token) {
      setShow(true);

      console.log('please login');
    } else {
      navigate(`/cart/${slug}/${id}?quantity=${quantity}`);
      dispatch(addItemToCart(id, quantity));
    }
  };

  const gotoLoginHandler = () => {
    navigate('/login');
  };

  return (
    <>
      <div className="single-product">
        <div className="container">
          <div className="wrapper">
            <div className="row">
              <div className="img-container col">
                {imageName ? <img src={imageName} alt="" className="product-img" /> : <Loader />}
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
                <span className="price">{`NRS ${markedPrice * quantity} (including tax)`}</span>
                <div className="add-container">
                  <div className="amount-container d-flex">
                    <div className="d-flex quantity-btn align-items-center">
                      <button className="add" onClick={() => setQuantity(quantity - 1)}>
                        -
                      </button>
                      <span>{quantity}</span>
                      <button className="sub" onClick={() => setQuantity(quantity + 1)}>
                        +
                      </button>
                    </div>
                    <div className="add-cart-button">
                      <button className="btn add-cart-button-btn" onClick={addItemToCartHandler}>
                        + ADD TO CART
                      </button>
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center text-danger fw-bold">login??</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-success">Please login to add products to cart</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={gotoLoginHandler}>
              login
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Products;
