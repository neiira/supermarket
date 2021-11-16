import React from 'react';
import '../styles/topHeader.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import '../icon/icon.css';

function TopHeader() {
  return (
    <>
      <div className="top-header">
        <Container>
          <Row>
            <Col>
              <p className="text-white top-header-p">
                SALE UP TO 70% OFF. USE CODE "SALE70%" . <a href="products.html">SHOP NOW</a>
              </p>
            </Col>
            <Col>
              <Row>
                <Col>
                  <ul className="top-header-account">
                    <li>
                      <a href="registered.html" className="text-white">
                        Create Account
                      </a>
                    </li>
                    <li>
                      <a href="login.html" className="text-white">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" className="text-white">
                        Help
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <form action="#" method="post" class="last">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button class="w3view-cart" type="submit" name="submit" value="">
                      <FontAwesomeIcon icon={faCartArrowDown} className="cart" size="lg" />
                    </button>
                  </form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopHeader;
