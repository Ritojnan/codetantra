import React, { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader ,useThree, extend, useFrame} from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  
extend({ OrbitControls });

const ModelViewer = (props) => {
  const gltf = useLoader(GLTFLoader, '/models/stromnolight.glb');
  const controlsRef = useRef();
  const { camera, gl, mouse } = useThree();
const currentMousePosition=props.mousePosition
  // Update controls on every frame
  
  useFrame(() => {
    controlsRef.current.update();
      const model = gltf.scene;
      const modelRotationSpeed = 0.005;

     // Rotate the model based on the mouse position
      // console.log() 
            model.rotation.y += (currentMousePosition.x-document.body.clientWidth/2-model.rotation.y) * 0.01;
          //   model.rotation.x += (currentMousePosition.y * modelRotationSpeed - model.rotation.x) * 0.1;
  });



  // Change the camera position
  camera.position.set(0, 0, 20); // Adjust the position values

  return (<>


  
      <group scale={[15, 15, 15]}> {/* Adjust the scale values */}
        <primitive object={gltf.scene} />
      </group>
      <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />

  </>
  );
};

export default ModelViewer;
