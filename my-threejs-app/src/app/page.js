"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Car from "./components/car";
import "./styles/style.css";
import * as THREE from "three";
import { Physics } from "@react-three/rapier";

export default function Home() {
  return (
    <div style={{ height: "100vh" }} className="homeMain">
      <Canvas camera={{ position: [6, 1, 5], fov: 40 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* 3D Object */}
        <Physics gravity={[0, -9.8, 0]}>
          <Car />
        </Physics>
        <OrbitControls></OrbitControls>
      </Canvas>
    </div>
  );
}
