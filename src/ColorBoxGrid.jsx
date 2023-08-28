import React, { useState, useEffect } from 'react';
import ColorBoxFreeze from './ColorBoxFreeze';
import './ColorBoxGrid.css';

function ColorBoxGrid({ colors }) {
  const [colorBoxes, setColorBoxes] = useState([]);
  const [moveCount, setMoveCount] = useState(0);

  useEffect(() => {
    generateRandomColors();
  }, []);

  // TODO: is this how you run checkForWin after the colorBoxes are modified???????? IDK
  //useEffect(() => {
    //checkForWin(); // This is be executed when `loading` state changes
  //}, [colorBoxes])

  const areAllBoxesFrozen = () => {
    return colorBoxes.every(box => box.isFrozen);
  };

  const checkForLoss = () => {
    if (areAllBoxesFrozen() && !isConnected(0, 24) && !isConnected(4, 20)) {
        alert("You lost!");
        } else {
            console.log("Loss condition not met");
        }
    };

    console.log("All boxes frozen: outside", areAllBoxesFrozen());


// THIS RUNS BEFORE THE ABOVE LOG PROBABLY. THIS MAYBE 
// RUNS BEFORE THE STATE CHANGE WHILE THE ABOVE LOG RUNS AFTER THE STATE CHANGE
const checkForWin = () => {
    console.log("Checking for win...");
  console.log("All boxes frozen:", areAllBoxesFrozen());
  console.log("Opposite corners connected:", isConnected(0, 24), isConnected(4, 20));
    // Check if any pair of opposite corners are connected by boxes of the same color
    if ((isConnected(0, 24) && colorBoxes[0].color === colorBoxes[24].color) ||
        (isConnected(4, 20) && colorBoxes[4].color === colorBoxes[20].color)) {
      alert("You win!");
    } else if (areAllBoxesFrozen() && !isConnected(0, 24) && !isConnected(4, 20)) {
        console.log("Lost condition triggered");
      alert("You lost!");
    }
  };
  
// const isConnected = (index1, index2) => {
//     const visited = new Set();
//     const stack = [index1];
  
//     while (stack.length > 0) {
//       const currentIndex = stack.pop();
//       visited.add(currentIndex);
  
//       if (currentIndex === index2) {
//         return true;
//       }
  
//       const neighbors = [currentIndex - 5, currentIndex + 5, currentIndex - 1, currentIndex + 1];
  
//       for (const neighbor of neighbors) {
//         if (!visited.has(neighbor) && neighbor >= 0 && neighbor < colorBoxes.length) {
//           const neighborBox = colorBoxes[neighbor];
//           if (neighborBox.isFrozen && neighborBox.color === colorBoxes[index1].color) {
//             stack.push(neighbor);
//           }
//         }
//       }
//     }
  
//     return false;
//   };
  
const isConnected = (index1, index2) => {
    const visited = new Set();
    const stack = [index1];
    const targetColor = colorBoxes[index1].color;
  
    while (stack.length > 0) {
      const currentIndex = stack.pop();
      visited.add(currentIndex);
  
      if (currentIndex === index2) {
        return true;
      }
  
      const neighbors = [currentIndex - 5, currentIndex + 5, currentIndex - 1, currentIndex + 1];
  
      for (const neighbor of neighbors) {
        if (
          !visited.has(neighbor) &&
          neighbor >= 0 &&
          neighbor < colorBoxes.length &&
          colorBoxes[neighbor].color === targetColor
        ) {
          stack.push(neighbor);
        }
      }
    }
  
    return false;
  };
  
  
  const generateRandomColors = () => {
    const randomColors = Array.from({ length: 25 }, () => ({
      color: getRandomColor(),
      isFrozen: false,
    }));
    setColorBoxes(randomColors);
  };

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const freezeAndRandomize = (index) => {
    if (!colorBoxes[index].isFrozen) {

    // RYAN: I THINK THIS IS AN ASYNC CALL WHICH MIGHT BE CAUSING PROBLEMS
    // WITH STUFF THAT RUNS AFTER IT
    // WE HAVE TO FIND A WAY TO MAKE THIS RUN BEFORE THE STUFF AFTER IT. 
    // WE JUST CANT USE AWAIT BECAUSE THIS USES CALLBACKS INSTEAD OF PROMISES
    setColorBoxes(
      
      (prevBoxes) => {
      console.log('setColorboxes is being executed now!!!!!!')
      const colorToFreeze = prevBoxes[index].color;
      const updatedBoxes = [...prevBoxes];
      const visited = new Set();
  
      freezeConnected(index, colorToFreeze, updatedBoxes, visited);
      randomizeUnfrozenBoxes(updatedBoxes);
  
      return updatedBoxes;
    }
    
    );


    //setMoveCount(moveCount + 1);

    //console.log('im going to call checkForWin now $$$$$$$$$')
    checkForWin();
  } else {
    alert("You can't freeze a frozen box!");
  }
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
