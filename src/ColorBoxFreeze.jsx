import React from 'react';
import './ColorBoxFreeze.css';

function ColorBoxFreeze({ color, isFrozen, onFreezeToggle, index, colorBoxes }) {
  const frozenNeighbors = [
    [0, -1], // Top
    [0, 1],  // Bottom
    [-1, 0], // Left
    [1, 0],  // Right
  ];

  const getBorderColor = (index) => {
    if (!isFrozen) return 'transparent';

    const [rowOffset, colOffset] = frozenNeighbors[index];
    const neighborColor = getNeighborColor(rowOffset, colOffset);
    return neighborColor === color ? color : 'black';
  };

  const getNeighborColor = (rowOffset, colOffset) => {
    const neighborIndex = calculateNeighborIndex(rowOffset, colOffset);

    // Return the color of the neighbor if it's within bounds
    if (neighborIndex >= 0 && neighborIndex < colorBoxes.length) {
      return colorBoxes[neighborIndex].color;
    }

    return null;
  };

  const calculateNeighborIndex = (rowOffset, colOffset) => {
    const rowIndex = Math.floor(index / 5);
    const colIndex = index % 5;
    const newRow = rowIndex + rowOffset;
    const newCol = colIndex + colOffset;

    if (newRow < 0 || newRow >= 5 || newCol < 0 || newCol >= 5) {
      return -1;
    }

    return newRow * 5 + newCol;
  };

  const boxStyle = {
    backgroundColor: color,
    borderColor: getBorderColor(0),
    borderWidth: '1px',
  };

  return (
    <div className="ColorBoxFreeze" style={boxStyle} onClick={onFreezeToggle}>
      {isFrozen && <span className="FrozenLabel">Frozen</span>}
    </div>
  );
}

export default ColorBoxFreeze;
