import React, { useState } from "react";

const MouseCoordinates = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setMousePosition({ x: mouseX, y: mouseY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <h1>Mouse Coordinates Example</h1>
      <p>Mouse X: {mousePosition.x}</p>
      <p>Mouse Y: {mousePosition.y}</p>
    </div>
  );
};

export default MouseCoordinates;
