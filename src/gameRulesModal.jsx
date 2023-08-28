import React from 'react';
import './GameRules.css';

function GameRulesModal({ handleCloseRulesModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Game Rules</h2>
        <p>Connect a top corner to its diagonally opposite bottom corner to win. <br/>
           You cannot click on a box that has already been clicked on. <br/>
           Adjoining unfrozen boxes will freeze on click. <br/>
           More additions to come! <br/>
        </p>
        {/* <button onClick={handleCloseRulesModal}>Close</button> */}
      </div>
    </div>
  );
}


export default GameRulesModal;
