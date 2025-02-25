"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./components/avatar";
import "./styles/style.css";
import * as THREE from "three";
import { Physics } from "@react-three/rapier";
import Wardrobe from "./components/propOne";

export default function Home() {
  return (
    <div style={{ height: "100vh" }} className="homeMain">
      <Canvas camera={{ position: [10, 5, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* 3D Object */}
        <Physics gravity={[0, -9.8, 0]}>
          {/* <Avatar /> */}
          <Wardrobe />
        </Physics>
        <OrbitControls></OrbitControls>
      </Canvas>
    </div>
  );
}
