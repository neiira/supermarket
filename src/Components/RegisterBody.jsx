import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionHeader from '../Components/SectionHeader';
import { userRegister } from '../actions/userActions';

import '../Supermarket.css';

function RegisterBody() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegisterdata = useSelector(state => state.userRegister);
  const { loading, errors, success } = userRegisterdata;
  if (!loading) {
    console.log(errors);
  }

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    const num = /^\d{10}$/;
    const emailEx =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!(firstName && lastName && email && phonenumber && password && confirmPassword)) {
      setMessage('please enter all the fields');
    } else if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else if (!phonenumber.match(num)) {
      setMessage('The mobile number must be 10 digits.');
    } else if (!email.match(emailEx)) {
      setMessage('please enter valid email');
    } else {
      console.log(firstName, lastName, email, phonenumber, password, confirmPassword);
      dispatch(userRegister(firstName, lastName, email, phonenumber, password));
    }
  };

  useEffect(() => {
    if (success) {
      navigate('/login');
    }
  }, [success, navigate]);

  return (
    <>
      <div className="register">
        <SectionHeader sectionTitle="register here" />
        <div className="container">
          <div className="login-form-grids">
            <h5>Register information</h5>
            {loading && (
              <div>
                <p>loading....</p>
              </div>
            )}
            {errors && <div className="text-danger text-center">{errors[0].message}</div>}

            {message && <div className="text-danger mb-3 text-center">{message}</div>}

            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="First Name..."
                className="mb-3"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name..."
                className="mb-3"
                name="lastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="mb-3"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type="tel"
                placeholder="phone number"
                name="phonenumber"
                value={phonenumber}
                onChange={e => setPhonenumber(e.target.value)}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password Confirmation"
                name="confirmpPassword"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              <button type="submit" className="register-btn">
                Register
              </button>
            </form>
          </div>
          <div className="register-home">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterBody;
