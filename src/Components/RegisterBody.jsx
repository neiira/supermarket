import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionHeader from '../Components/SectionHeader';
import '../styles/registerBody.css';
import '../styles/common.css';

function RegisterBody() {
  return (
    <>
      <div className="register">
        <SectionHeader sectionTitle="register here" />
        <div className="container">
          <div className="login-form-grids">
            <h5>profile information</h5>
            <form action="#" method="post">
              <input type="text" placeholder="First Name..." required=" " />
              <input type="text" placeholder="Last Name..." required=" " />
            </form>
            <div className="register-check-box">
              <div className="check">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" />
                  <i> </i>Subscribe to Newsletter
                </label>
              </div>
            </div>
            <h6>Login information</h6>
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
            </form>
          </div>
          <div className="register-home">
            <a href="index.html">Home</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterBody;
