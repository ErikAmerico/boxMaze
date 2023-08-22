import React, { useState, useEffect } from 'react';
import ColorBoxFreeze from './ColorBoxFreeze';
import './ColorBoxGrid.css';

function ColorBoxGrid({ colors }) {
  const [colorBoxes, setColorBoxes] = useState([]);

  useEffect(() => {
    generateRandomColors();
  }, []);

  const generateRandomColors = () => {
    const randomColors = Array.from({ length: 25 }, () => ({
      color: getRandomColor(),
      isFrozen: false,
    }));
    setColorBoxes(randomColors);
  };

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const freezeAndRandomize = (index) => {
    setColorBoxes((prevBoxes) => {
      const colorToFreeze = prevBoxes[index].color;
      const updatedBoxes = [...prevBoxes];
      const visited = new Set();
  
      freezeConnected(index, colorToFreeze, updatedBoxes, visited);
      randomizeUnfrozenBoxes(updatedBoxes);
  
      return updatedBoxes;
    });
};

const freezeConnected = (index, targetColor, boxes, visited) => {
    if (
      index < 0 ||
      index >= boxes.length ||
      visited.has(index) ||
      boxes[index].color !== targetColor
    ) {
      return;
    }
  
    visited.add(index);
    boxes[index].isFrozen = true;
  
    freezeConnected(index - 5, targetColor, boxes, visited); // Up
    freezeConnected(index + 5, targetColor, boxes, visited); // Down
    if (index % 5 !== 0) {
      freezeConnected(index - 1, targetColor, boxes, visited); // Left
    }
    if (index % 5 !== 4) {
      freezeConnected(index + 1, targetColor, boxes, visited); // Right
    }
  };
  
  

  const randomizeUnfrozenBoxes = () => {
    setColorBoxes((prevBoxes) => {
      const updatedBoxes = prevBoxes.map((box) => {
        if (!box.isFrozen) {
          return {
            ...box,
            color: getRandomColor(),
          };
        }
        return box;
      });
      return updatedBoxes;
    });
  };

  return (
    <div className="ColorBoxGrid">
      {colorBoxes.map((box, index) => (
        <ColorBoxFreeze
          key={index}
          index={index}
          color={box.color}
          isFrozen={box.isFrozen}
          colorBoxes={colorBoxes}
          onFreezeToggle={() => freezeAndRandomize(index)}
        />
      ))}
    </div>
  );
}

export default ColorBoxGrid;
