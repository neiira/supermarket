import React from 'react';
// import '../styles/offerHeader.css';
import '../Supermarket.css';
function OfferHeader({ title, offerDescription }) {
  return (
    <>
      <div className="agile-tp">
        <h5 className="agile-tp-head">{title}</h5>
        <p className="w3l-ad">{offerDescription}</p>
      </div>
    </>
  );
}

export default OfferHeader;
