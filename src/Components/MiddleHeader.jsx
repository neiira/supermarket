import React from 'react';
import '../styles/topHeader.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../icon/icon.css';

function MiddleHeader() {
  return (
    <>
      <div className="middle-header">
        <Container>
          <Row>
            <Col>
              <ul class="phone_email">
                <li>
                  <FontAwesomeIcon icon={faPhone} className="phone" rotation={90} />
                  Order online or call us : (+0123) 234 567
                </li>
              </ul>
            </Col>
            <Col>
              <h1>
                <a href="index.html">super Market</a>
              </h1>
            </Col>
            <Col>
              <form action="#" method="post">
                <input type="search" name="Search" placeholder="Search for a Product..." required="" />
                <button type="submit" class="btn btn-default search" aria-label="Left Align">
                  <FontAwesomeIcon icon={faSearch} className="search" />
                </button>
                <div class="clearfix"></div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MiddleHeader;
