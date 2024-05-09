import React from 'react'
import'./Button.css'

export default function Button(props){
  return (
    <button className={props.className}>{props.name}</button>
  )
}

// export default Button;

// import { useState } from 'react';



// const ColorChangingButton = () => {
//   const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'cyan', 'magenta', 'teal', 'pink', 'black'];
//   const [currentColorIndex, setCurrentColorIndex] = useState(0);
//   const changeColor = () => {
//     const nextColorIndex = (currentColorIndex + 1) % colors.length;
//     setCurrentColorIndex(nextColorIndex);
  // };
//   return (
//     // <button style={{ backgroundColor: colors[currentColorIndex] }} onClick={changeColor}>
//     //   Click me to change color
//     // </button>
//   );
// };
// export default ColorChangingButton;