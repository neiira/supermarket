import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/profile.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarker, faKey } from '@fortawesome/free-solid-svg-icons';

function profile() {
  return (
    <>
      <div className="container">
        <div className="profile-body">
          <h1 className=""> Your account</h1>

          <div className="profile-content">
            <div className="row mt-5 p-3">
              <div className="col-lg-4">
                <div className="p-3 profile-content-box ">
                  <div>
                    <Link
                      to="/profile/information"
                      className="text-white d-flex flex-column align-items-center nav-link"
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <h3>Information</h3>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 ">
                <div className="p-3 profile-content-box">
                  <div>
                    <Link
                      to="/profile/information"
                      className="text-white d-flex flex-column align-items-center nav-link"
                    >
                      <FontAwesomeIcon icon={faMapMarker} />
                      <h3>Address</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div className="p-3 profile-content-box">
                  <div>
                    <Link
                      to="/profile/information"
                      className="text-white d-flex flex-column align-items-center nav-link"
                    >
                      <FontAwesomeIcon icon={faKey} />
                      <h3>Change password</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default profile;
