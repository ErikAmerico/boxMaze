import './gameRules.css';

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

//configured sit configuration build and deploy/continuous deployment
//changed build command from npm run build to CI= npm run build
//added environment variable CI to value false in netlify
//trying again