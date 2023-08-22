import React from 'react';
import ColorBoxGrid from './ColorBoxGrid';
import RandomizeColorsButton from './RandomizeColorsButton';
import './App.css';

const colors = ['red', 'green', 'blue', 'teal', 'magenta', 'purple', 'pink', 'yellow', 'orange', 'brown', 'gray', 'white'];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors}/>
    </div>
  );
}

export default App;
