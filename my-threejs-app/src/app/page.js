"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CubeComponent from "./components/cube";
import "./styles/style.css";
import * as THREE from "three";
import { Physics } from "@react-three/rapier";
import Floor from "./components/floor";

export default function Home() {
  return (
    <div style={{ height: "100vh" }} className="homeMain">
      <Canvas camera={{ position: [6, 3, 10], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 3D Object */}
        <Physics gravity={[0, -9.8, 0]}>
          <CubeComponent />
          <Floor cl="red" psX="0" psY="0.8" psZ="0" szX="1" szY="1.5" szZ="2" />
          <Floor
            cl="brown"
            psX="0"
            psY="0.5"
            psZ="-1.2"
            szX="0.5"
            szY="1.5"
            szZ="0.5"
            label="rightHand"
          />
          <Floor
            cl="brown"
            psX="0"
            psY="0.5"
            psZ="1.2"
            szX="0.5"
            szY="1.5"
            szZ="0.5"
            label="leftHand"
          />
          <Floor
            cl="gray"
            psX="0"
            psY="-0.65"
            psZ="0"
            szX="0.5"
            szY="1.5"
            szZ="1.3"
          />
        </Physics>
        {/* Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// <Canvas camera={{ position: [4, 3, 4], fov: 50 }}>
//   {/* Lights */}
//   <ambientLight intensity={0.1} />
//   <directionalLight position={[5, 5, 5]} intensity={1} />

//   {/* 3D Object */}
//   <Physics gravity={[0, -9.8, 0]}>
//     <CubeComponent />
//     <Floor />
//   </Physics>
//   {/* Controls */}
//   <OrbitControls />
// </Canvas>
// <Canvas camera={{ position: [4, 3, 4], fov: 50 }}>
//   {/* Lights */}
//   <ambientLight intensity={0.1} />
//   <directionalLight position={[5, 5, 5]} intensity={1} />

//   {/* 3D Object */}
//   <Physics gravity={[0, -9.8, 0]}>
//     <CubeComponent />
//     <Floor />
//   </Physics>
//   {/* Controls */}
//   <OrbitControls />
// </Canvas>
