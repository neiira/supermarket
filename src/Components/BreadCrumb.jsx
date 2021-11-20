import React from 'react';
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
            <a href="index.html">
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faHome} />
              </span>
              {prevPage}
            </a>
          </li>
          <li className=" breadcrumb-item active ">{currentPage}</li>
        </ol>
      </div>
    </div>
  );
}

export default BreadCrumb;
