import React from 'react';
import ColorBoxGrid from './ColorBoxGrid';
import GameRulesModal from './gameRulesModal';
import { useState, useEffect } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'teal', 'magenta', 'purple', 'pink', 'yellow', 'orange', 'brown', 'gray', 'white'];

function App() {
  const [showRulesModal, setShowRulesModal] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowRulesModal(false);
    }, 10000);
  }, []);

  const handleCloseRulesModal = () => {
    setShowRulesModal(false);
  };

  return (
    <div>
      {showRulesModal && <GameRulesModal onClose={handleCloseRulesModal} />}
      <ColorBoxGrid colors={colors}/>
    </div>
  );
}

export default App;
