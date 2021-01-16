import React from 'react';

const NewGame = ({ onClickNewGame }) => {
  return (
    <div>
      <button onClick={onClickNewGame} type="button">
        New Game
      </button>
    </div>
  );
};

export default NewGame;
