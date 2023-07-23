
import "./App.css";
import { Canvas } from "@react-three/fiber";
import ModelViewer from "./ModelViewer";
// import MouseCoordinates from "./MouseCoordinates";
import { useState } from "react";

function App() {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setMousePosition({ x: mouseX, y: mouseY });
  };


  return (
    <>
    
        <div style={{ width: "100vw", height: "100vh" }} onMouseMove={handleMouseMove}>
        <Canvas style={{ width: "100%", height: "100%" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <ModelViewer mousePosition={mousePosition} />
        </Canvas>
      </div>
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />

          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    
    </>
  );
}

export default App;
