"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./components/avatar";
import "./styles/style.css";
import * as THREE from "three";
import { Physics } from "@react-three/rapier";

export default function Home() {
  return (
    <div style={{ height: "100vh" }} className="homeMain">
      <Canvas camera={{ position: [1, 5, 10], fov: 25 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} intensity={10} />

        {/* 3D Object */}
        <Physics gravity={[0, -9.8, 0]}>
          <Avatar />
        </Physics>
      </Canvas>
    </div>
  );
}
