import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { removeItemFromCart } from '../actions/cartActions';
import { updateCartItem } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cart.css';
import BreadCrumb from '../Components/BreadCrumb';

function Cart() {
  //   const { id } = useParams();
  //   const location = useLocation();
  // const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  const cartItem = useSelector(state => state.cartItem);

  const { cartItems } = cartItem;
  console.log(cartItems);

  const removeProductHandler = toBeDeletedId => {
    console.log('this remove button');
    dispatch(removeItemFromCart(toBeDeletedId));
  };

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Cart" />
      <div className="cart-body p-3">
        <div className="container">
          <h2>your cart items</h2>
          {Object.keys(cartItem).length === 0 ? (
            <div>....loading</div>
          ) : (
            <div className="items mt-3">
              <ListGroup variant="flush">
                {cartItems.map(cartItem => (
                  <ListGroup.Item key={cartItem.productId}>
                    <Row>
                      <Col>
                        <Image src={cartItem.imageName} width="85" height="85" fluid rounded />
                      </Col>
                      <Col>{cartItem.title}</Col>

                      <Col>
                        <div className="d-flex quantity-btn align-items-center ">
                          <button
                            className="add fw-bold"
                            onClick={() => {
                              console.log('qty subtracted');
                              dispatch(updateCartItem(cartItem.cartId, cartItem.quantity - 1));
                            }}
                          >
                            -
                          </button>
                          {/* <input type="text" className="quantity-input" value={cartItem.quantity} />? */}
                          <span className="fw-bold">{cartItem.quantity}</span>
                          <button
                            className="sub fw-bold"
                            onClick={() => {
                              console.log('qty added');
                              dispatch(updateCartItem(cartItem.cartId, cartItem.quantity + 1));
                            }}
                          >
                            +
                          </button>
                        </div>
                      </Col>
                      <Col>{`unit price:RS${cartItem.unitPrice}`}</Col>
                      <Col>{`subtotal:RS.${cartItem.unitPrice * cartItem.quantity}`}</Col>
                      <Col>
                        <div className="delete-btn-box align-items-center">
                          <FontAwesomeIcon
                            className="cart-item-delete-btn"
                            icon={faTrash}
                            onClick={() => removeProductHandler(cartItem.cartId)}
                          />
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
