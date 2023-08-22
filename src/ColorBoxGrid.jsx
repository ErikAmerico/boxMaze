// import React, { useState, useEffect } from 'react';
// import ColorBoxFreeze from './ColorBoxFreeze';
// import './ColorBoxGrid.css';



// function ColorBoxGrid({ colors }) {
//   const [colorBoxes, setColorBoxes] = useState([]);

//   useEffect(() => {
//     generateRandomColors();
//   }, []);


//   const generateRandomColors = () => {
//     const randomColors = Array.from({ length: 25 }, () => ({
//     color: getRandomColor(),
//     isFrozen: false,
//   }));
//     setColorBoxes(randomColors);
//  };

//  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];


//   const freezeBox = (index) => {
//     setColorBoxes((prevBoxes) => {
//       const updatedBoxes = [...prevBoxes];
//       //updatedBoxes[index] = { ...prevBoxes[index], isFrozen: !prevBoxes[index].isFrozen };
//       updatedBoxes[index].isFrozen = true;
//       //generateRandomColors();
//       return updatedBoxes;
//     });

//     randomizeUnfrozenBoxes();
//   };

//   const randomizeUnfrozenBoxes = () => {
//     setColorBoxes((prevBoxes) => {
//       const updatedBoxes = prevBoxes.map((box) => {
//         if (!box.isFrozen) {
//           return {
//             ...box,
//             color: getRandomColor()
//           };
//         }
//         return box;
//       });
//       return updatedBoxes;
//     });
//   };

//   return (
//     <div className="ColorBoxGrid">
//     {colorBoxes.map((box, index) => (
//       <ColorBoxFreeze
//         key={index}
//         color={box.color}
//         isFrozen={box.isFrozen}
//         onFreezeToggle={() => freezeBox(index)}
//       />
//     ))}
//   </div>
//   );
// }

// export default ColorBoxGrid;


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
      freezeConnected(index, colorToFreeze, updatedBoxes);
      return updatedBoxes;
    });

    randomizeUnfrozenBoxes();
  };

  const freezeConnected = (index, targetColor, boxes) => {
    if (
      index < 0 ||
      index >= boxes.length ||
      boxes[index].isFrozen ||
      boxes[index].color !== targetColor
    ) {
      return;
    }

    boxes[index].isFrozen = true;

    freezeConnected(index - 5, targetColor, boxes); // Up
    freezeConnected(index + 5, targetColor, boxes); // Down
    if (index % 5 !== 0) {
      freezeConnected(index - 1, targetColor, boxes); // Left
    }
    if (index % 5 !== 4) {
      freezeConnected(index + 1, targetColor, boxes); // Right
    }
  };

  const randomizeUnfrozenBoxes = () => {
    setColorBoxes((prevBoxes) => {
      const updatedBoxes = prevBoxes.map((box) => {
        if (!box.isFrozen) {
          return {
            ...box,
            color: getRandomColor(), // Randomize color only for unfrozen boxes
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
          onFreezeToggle={() => freezeAndRandomize(index)} // Freeze connected boxes
        />
      ))}
    </div>
  );
}

export default ColorBoxGrid;


