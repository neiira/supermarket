import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import '../Supermarket.css';
import '../styles/login.css';
import '../styles/common.css';

function LoginBody() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoginData = useSelector(state => state.userLogin);
  const { success, error, loading } = userLoginData;
  console.log(userLoginData);
  console.log(error);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const loginDataSubmitHandler = e => {
    e.preventDefault();
    if (!(email && password)) {
      setMessage('please fill all the fields');
    } else {
      dispatch(userLogin(email, password));
    }
  };

  useEffect(() => {
    if (success) {
      navigate('/');
      window.location.reload();
      window.scrollTo(0, 0);
    }
  }, [success, navigate]);

  return (
    <>
      <div className="login">
        <div className="container">
          <h2>Login Form</h2>

          <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
            {error && <div className="text-center text-danger">{error[0].message}</div>}
            {message && <div className="text-center text-danger">{message}</div>}

            {loading && <p>loading...</p>}

            <form onSubmit={loginDataSubmitHandler}>
              <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <div className="forgot">
                <a href="#password">Forgot Password?</a>
              </div>
              <input type="submit" value="Login" />
            </form>
          </div>
          <h4>For New People</h4>
          <p>
            <Link to="/register">Register Here</Link> (Or) go back to
            <Link to="/">
              Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginBody;
