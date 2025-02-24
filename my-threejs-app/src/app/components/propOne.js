import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

export default function Wardrobe() {
  const { scene } = useGLTF("/water.glb");
  const wrdRef = useRef();
  return <primitive object={scene} ref={wrdRef} />;
}
