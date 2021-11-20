import React from 'react';
import '../Supermarket.css';
import '../styles/login.css';
import '../styles/common.css';

function LoginBody() {
  return (
    <>
      <div className="login">
        <div className="container">
          <h2>Login Form</h2>

          <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
            <form>
              <input type="email" placeholder="Email Address" required=" " />
              <input type="password" placeholder="Password" required=" " />
              <div className="forgot">
                <a href="#password">Forgot Password?</a>
              </div>
              <input type="submit" value="Login" />
            </form>
          </div>
          <h4>For New People</h4>
          <p>
            <a href="registered.html">Register Here</a> (Or) go back to{' '}
            <a href="index.html">
              Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginBody;
