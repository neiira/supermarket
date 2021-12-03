import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionHeader from '../Components/SectionHeader';
// import '../styles/registerBody.css';
// import '../styles/common.css';
import '../Supermarket.css';

function RegisterBody() {
  return (
    <>
      <div className="register">
        <SectionHeader sectionTitle="register here" />
        <div className="container">
          <div className="login-form-grids">
            <h5>Register information</h5>
            <form action="#" method="post">
              <input type="text" placeholder="First Name..." required=" " className="mb-3" />
              <input type="text" placeholder="Last Name..." required=" " className="mb-3" />
              <input type="email" placeholder="Email Address" required=" " className="mb-3" />
              <input type="tel" placeholder="phone number" required=" " />
              <input type="password" placeholder="Password" required=" " />
              <input type="password" placeholder="Password Confirmation" required=" " />
            </form>
            <div className="register-check-box">
              <div className="check">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <i> </i>I accept the terms and conditions
                </label>
              </div>
            </div>
            <input type="submit" value="Register" />
            {/* <h6>Login information</h6>
            <form action="#" method="post">
              <input type="email" placeholder="Email Address" required=" " />
              <input type="password" placeholder="Password" required=" " />
              <input type="password" placeholder="Password Confirmation" required=" " />
              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input type="checkbox" name="checkbox" />
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              <input type="submit" value="Register" />
            </form> */}
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
