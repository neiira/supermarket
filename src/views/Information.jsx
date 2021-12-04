import React, { useEffect } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import { Form, Button } from 'react-bootstrap';
import { userDetails } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/profile.css';

function Information() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userDetails());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const userInformation = useSelector(state => state.userDetails);
  const { loading, details } = userInformation;
  console.log(details);

  return (
    <>
      <BreadCrumb prevPage="Home" currentPage="information" />
      <div className="container">
        <div className="mt-5 mb-5">
          <div className="information-content">
            <h5>My account information</h5>
            <div className="pt-3">
              {!loading && (
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={details.email} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" value={details.firstName} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" value={details.lastName} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" value={details.mobileNumber} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="confrim Password" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
