import React from 'react';
import '../styles/brandsStore.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionHeader from '../Components/SectionHeader';
import Lorem from '../Components/Lorem';

function BrandsStore() {
  return (
    <>
      <div className="brands">
        <SectionHeader sectionTitle="Brand store" />
        <div className="container brands-container">
          <Lorem />
          <Lorem />
          <Lorem />
        </div>
      </div>
    </>
  );
}

export default BrandsStore;
