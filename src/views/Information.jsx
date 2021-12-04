import React, { useEffect } from 'react';
import BreadCrumb from '../Components/BreadCrumb';
import { Form, Button } from 'react-bootstrap';
import { userDetails } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loader';
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
              {loading ? (
                <Loader />
              ) : (
                details && (
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={details.email} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter first name" value={details.firstName} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" value={details.lastName} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control type="tel" placeholder="Enter phone number" value={details.mobileNumber} readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" readOnly />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="confrim Password" readOnly />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Update
                    </Button>
                  </Form>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
