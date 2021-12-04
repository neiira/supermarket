import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        role="status"
        variant="primary"
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block'
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
};

export default Loader;
