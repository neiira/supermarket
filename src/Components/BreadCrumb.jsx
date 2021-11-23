import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/breadCrumb.css';
import '../Supermarket.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function BreadCrumb({ prevPage, currentPage }) {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ol className="breadcrumb breadcrumb1">
          <li className=" breadcrumb-item">
            <Link to="/">
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faHome} />
              </span>
              {prevPage}
            </Link>
          </li>
          <li className=" breadcrumb-item active ">{currentPage}</li>
        </ol>
      </div>
    </div>
  );
}

export default BreadCrumb;
