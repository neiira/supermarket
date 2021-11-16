import React from 'react';
import '../styles/sectionHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function SectionHeader({ sectionTitle }) {
  return (
    <div className="container">
      <h3 className="sectionTitleClass text-center">{sectionTitle}</h3>
    </div>
  );
}

export default SectionHeader;
