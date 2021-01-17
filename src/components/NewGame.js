import React from 'react';

const NewGame = ({ onClickNewGame, winner }) => {
  return (
    <div className={`btn-reset ${winner ? 'active' : ''}`}>
      <button onClick={onClickNewGame} type="button">
        New Game
      </button>
    </div>
  );
};

export default NewGame;
