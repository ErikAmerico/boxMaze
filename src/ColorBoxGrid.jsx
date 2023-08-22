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


  const freezeBox = (index) => {
    setColorBoxes((prevBoxes) => {
      const updatedBoxes = [...prevBoxes];
      //updatedBoxes[index] = { ...prevBoxes[index], isFrozen: !prevBoxes[index].isFrozen };
      updatedBoxes[index].isFrozen = true;
      //generateRandomColors();
      return updatedBoxes;
    });

    randomizeUnfrozenBoxes();
  };

  const randomizeUnfrozenBoxes = () => {
    setColorBoxes((prevBoxes) => {
      const updatedBoxes = prevBoxes.map((box) => {
        if (!box.isFrozen) {
          return {
            ...box,
            color: getRandomColor()
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
        color={box.color}
        isFrozen={box.isFrozen}
        onFreezeToggle={() => freezeBox(index)}
      />
    ))}
    {/* <RandomizeColorsButton onClick={randomizeUnfrozenBoxes} /> */}
  </div>
  );
}

export default ColorBoxGrid;

