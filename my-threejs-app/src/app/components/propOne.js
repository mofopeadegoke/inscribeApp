import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { useRef, useState, useEffect } from "react";

export default function Wardrobe() {
  const scene = useLoader(STLLoader, "/Water.stl");
  const wrdRef = useRef();
  return (
    <mesh ref={wrdRef} scale={0.5} rotation={[-Math.PI / 2, 0, 0]}>
      <primitive attach="geometry" object={scene} />
      <meshStandardMaterial roughness={0.3} />
    </mesh>
  );
}
