import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { removeItemFromCart } from '../actions/cartActions';
import { updateCartItem } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cart.css';
import BreadCrumb from '../Components/BreadCrumb';
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItem = useSelector(state => state.cartItem);
  const { cartItems } = cartItem;
  console.log(cartItems);

  const removeProductHandler = toBeDeletedId => {
    console.log('this remove button');
    dispatch(removeItemFromCart(toBeDeletedId));
  };

  const gotoProductsHandler = () => {
    navigate('/products');
  };

  const gotoOrderHandler = () => {
    navigate('/placeorder');
    window.location.reload();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Cart" />
      <div className="cart-body p-3">
        <div className="container">
          <h2>Shoping Cart</h2>
          {cartItems.length === 0 ? (
            <>
              <h5 className="mt-5">
                Your cart is empty
                <Link to="/" className="text-success">
                  Go Back
                </Link>
              </h5>
            </>
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
          <div className="cart-btn d-flex justify-content-between mt-5">
            <button type="button" className="btn btn-info text-light" onClick={() => gotoProductsHandler()}>
              keep shopping
            </button>
            <button type="button" className="btn btn-info text-light" onClick={() => gotoOrderHandler()}>
              place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
