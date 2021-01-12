import React from 'react';

const Square = ({ value }) => {
  return (
    <button type="button" className="square">
      {value + 1}
    </button>
  );
};

export default Square;
