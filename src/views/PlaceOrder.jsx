import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AllCartItem } from '../actions/cartActions';
import { checkOutCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Row, Col, Image, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cart.css';
import BreadCrumb from '../Components/BreadCrumb';

function CartView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllCartItem());
  }, [dispatch]);

  const getAllCartItem = useSelector(state => state.AllCartItem);
  console.log(getAllCartItem);
  const { allCartItem, loading } = getAllCartItem;

  const checkOut = useSelector(state => state.checkOut);
  const { error } = checkOut;
  console.log(checkOut);
  const gotoProductsHandler = () => {
    navigate('/products');
  };

  const gotoCartHandler = () => {
    navigate('/cart');
  };

  const checkOutHandler = () => {
    dispatch(checkOutCart());
  };

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="Cart" />
      <div className="cart-body p-3">
        <div className="container">
          <h2>your cart items</h2>
          {loading ? (
            <div>....loading</div>
          ) : (
            <div>
              <div>
                <div className="items mt-3">
                  <ListGroup variant="flush">
                    {allCartItem.cartItems.map(cartItem => (
                      <ListGroup.Item key={cartItem.id}>
                        <Row>
                          <Col>
                            <Image src={cartItem.product.images[0].imageName} width="85" height="85" fluid rounded />
                          </Col>
                          <Col>{cartItem.product.title}</Col>

                          <Col>
                            <div className="d-flex align-items-center ">
                              <span className="fw-bold">{cartItem.quantity}</span>
                            </div>
                          </Col>
                          <Col>{`unit price:RS${cartItem.product.unitPrice[0].markedPrice}`}</Col>
                          <Col>{`subtotal:RS.${cartItem.product.unitPrice[0].markedPrice * cartItem.quantity}`}</Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>

                <div className="cart-btn d-flex justify-content-between mt-3">
                  <button
                    type="button"
                    className="btn btn-info text-light"
                    onClick={() => gotoProductsHandler()}
                    styel={{ backgroundColor: '#3399cc' }}
                  >
                    keep shopping
                  </button>
                  <button type="button" className="btn btn-info text-light" onClick={() => gotoCartHandler()}>
                    goto cart
                  </button>
                </div>

                <div className="check-out mt-5">
                  {error && (
                    <div>
                      <p className="text-center text-danger">{error[0].message}</p>
                    </div>
                  )}
                  {allCartItem && (
                    <div className="row">
                      <div className="coupon-card col-lg-4 col-md-6 p-3">
                        <div className="coupon-card-wrapper p-5">
                          <h4 className="pb-2">Use Coupon Code</h4>
                          <div className="discount-coupon-code">
                            <p className="pb-3">Please enter coupon if have a one</p>
                            <Form>
                              <Form.Group className="pb-3">
                                <Form.Control type="text" placeholder="your code" />
                              </Form.Group>
                              <Button className="btn btn-danger">Apply code</Button>
                            </Form>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 d-sm-none d-none d-lg-block"></div>
                      <div className="chekc-out-card col-lg-4 col-md-12 p-3">
                        <div className="cart-checkout-wrapper p-5">
                          <h4 className="pb-2">Cart Total</h4>
                          <div className="grand-total-box">
                            <p className="pb-2">
                              total products:<span style={{ marginLeft: '100px' }}>{allCartItem.cartItems.length}</span>
                            </p>
                            <p className="pb-2">
                              Subtotal: <span style={{ marginLeft: '133px' }}>{allCartItem.subTotal}</span>
                            </p>
                            <p className="pb-2">
                              Delivery charge:<span style={{ marginLeft: '85px' }}>{allCartItem.deliveryCharge}</span>
                            </p>
                            <h6 className="pb-3">
                              Grand total:<span style={{ marginLeft: '110px' }}>{allCartItem.total}</span>
                            </h6>

                            <Button className="btn btn-danger" onClick={() => checkOutHandler()}>
                              Check out
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartView;
