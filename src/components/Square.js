import React from 'react';
import './Square.style.css';

const Square = ({ value }) => {
  return (
    <button type="button" className="btn">
      {value + 1}
    </button>
  );
};

export default Square;
