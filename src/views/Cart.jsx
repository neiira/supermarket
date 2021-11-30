import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { addItemToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BreadCrumb from '../Components/BreadCrumb';

function Cart() {
  const { id } = useParams();
  const location = useLocation();
  const quantity = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addItemToCart(id, quantity));
  }, [dispatch, id, quantity]);

  console.log(quantity, 'this is qty');

  const cartItem = useSelector(state => state.cartItem);

  const { cartItems } = cartItem;
  console.log(cartItems);

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
                  <ListGroup.Item key={cartItem.id}>
                    <Row>
                      <Col>
                        <Image src={cartItem.imageName} width="85" height="85" />
                      </Col>
                      <Col>{cartItem.title}</Col>

                      <Col>{cartItem.quantity}</Col>
                      <Col>{`RS.${cartItem.price}`}</Col>
                      <Col>delete</Col>
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
