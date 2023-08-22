

import React, { useState } from 'react';
import './ColorBoxFreeze.css';

function ColorBoxFreeze({ color, isFrozen, onFreezeToggle }) {
  const boxStyle = {
    backgroundColor: color,
    borderColor: isFrozen ? 'black' : 'transparent',
  };

  return (
    <div className="ColorBoxFreeze" style={boxStyle} onClick={() => onFreezeToggle()}>
      {isFrozen && <span className="FrozenLabel">Frozen</span>}
    </div>
  );
}

export default ColorBoxFreeze;
