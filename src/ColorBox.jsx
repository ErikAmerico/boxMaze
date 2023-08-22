// import React, { useState } from "react";
// import "./ColorBox.css";
// import ColorBoxFrozen from "./ColorBoxFrozen";

// function randomChoice(arr) {
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// export default function ColorBox({ id, colors }) {
//     const [color, setColor] = useState(randomChoice(colors));

//     const handleClick = () => {

//             const otherBoxes = document.querySelectorAll('.ColorBox');

//             otherBoxes.forEach(box => {
//                 if (box.getAttribute('data-id') !== id && !box.classList.contains('frozen')) {
//                     const randomColor = randomChoice(colors);
//                     box.style.backgroundColor = randomColor;
//                     setColor(randomColor);
//                 }
//             });
//         }


//     return (
//         <div
//             className={`ColorBox`}
//             onClick={handleClick}
//             style={{ backgroundColor: color }}
//             data-id={id}
//         ></div>
//     );
// }



// import { useState, useEffect } from "react";
// import "./ColorBox.css";

// function randomChoice(arr) {
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// export default function ColorBox({ id, colors }) {
//     const [color, setColor] = useState(randomChoice(colors));
//     const [freeze, setFreeze] = useState(false);
    
//     // const changeColor = () => {
//     //     const randomColor = randomChoice(colors);
//     //     setColor(randomColor);
//     // };

//         // const currColor = color;
//         // const clickedBoxId = event.target.getAttribute('data-id');

//     // const randomColor = randomChoice(colors);
//     // setColor(randomColor);



//     return (
//         <div 
//             className="ColorBox" 
//             //onClick={handleClick} 
//             //onClick={changeColor}
//             style={{ backgroundColor: color }}
//             data-id={id}
//         ></div>
//     );
// }

















// import { useState } from "react";
// import "./ColorBox.css";

// function randomChoice(arr) {
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// let clikedBoxes= [];
// console.log(clikedBoxes);

// export default function ColorBox({ id, colors }) {
//     const [color, setColor] = useState(randomChoice(colors));
//     //const [originalColor, setOriginalColor] = useState(colors);
//     const [freeze, setFreeze] = useState(false);
    
//     // const changeColor = () => {
//     //     const randomColor = randomChoice(colors);
//     //     setColor(randomColor);
//     // };

//     // const handleClick = () => {
//     //     const currColor = color;
//     //     const clickedBoxId = event.target.getAttribute('data-id');
//     //     setFreeze(true);
        
//     //     if (!freeze) {
//     //         const otherBoxes = document.querySelectorAll('.ColorBox');

//     //         otherBoxes.forEach(box => {
//     //             if (box.getAttribute('data-id') !== id && !box.classList.contains('frozen')) {
//     //                 const randomColor = randomChoice(colors);
//     //                 box.style.backgroundColor = randomColor;
//     //             }
//     //         });
//     //     }
//     // };

// const handleClick = () => {

//         if (freeze) {
//             alert("You can't change a frozen box!");
//             return;
//         }
        
//         const clickedBoxId = id;

//         if (!freeze) {
//             setFreeze(true);
//         } else {
//             const otherBoxes = document.querySelectorAll('.ColorBox');

//             otherBoxes.forEach(box => {
//                 if (box.getAttribute('data-id') !== clickedBoxId && !box.classList.contains('frozen')) {
//                     const randomColor = randomChoice(colors);
//                     box.style.backgroundColor = randomColor;
//                 }
//             });
//         }
//     };    

//     return (
//         <div 
//             //className="ColorBox" 
//             className={`ColorBox ${freeze ? "frozen" : ""}`}
//             onClick={handleClick} 
//             //onClick={changeColor}
//             style={{ backgroundColor: color }}
//             data-id={id}
//         ></div>
//     );
// }


