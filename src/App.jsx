import React from 'react';
import ColorBoxGrid from './ColorBoxGrid';
import GameRulesModal from './gameRulesModal';
import { useState, useEffect } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'teal', 'magenta', 'purple', 'pink', 'yellow', 'orange', 'brown', 'gray', 'white'];

function App() {
  // const [showRulesModal, setShowRulesModal] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowRulesModal(false);
  //   }, 10000);
  // }, []);

  // const handleCloseRulesModal = () => {
  //   setShowRulesModal(false);
  // };
  
 
  const text = "Connect a top corner to its diagonally opposite bottom corner to win. \nYou cannot click on a box that has already been clicked on. \nAdjoining unfrozen boxes will freeze on click. \nMore additions to come!";
  
  function rules() {
    alert(text);
  }
  
  return (
    <div>
      {/* {showRulesModal && <GameRulesModal onClose={handleCloseRulesModal} />} */}
      <button onClick={rules}>Click here for rules</button>
      <ColorBoxGrid colors={colors}/>
    </div>
  );
}

export default App;
