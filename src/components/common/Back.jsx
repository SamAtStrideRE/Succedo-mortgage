// Back.jsx

import React from 'react';
import './Back.css';

const Back = ({ name, title, cover }) => {
  return (
    <div className="back" style={{ backgroundImage: `url(${cover})` }}>
      <div className="back-content">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Back;
