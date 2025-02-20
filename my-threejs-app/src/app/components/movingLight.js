import { PointLight } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";

export default function MovingLight() {
  const lightRef = useRef();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x * 5; // Adjust range
      lightRef.current.position.y = mouse.y * 5; // Adjust range
    }
  });
  return (
    <PointLight
      ref={lightRef}
      intensity={3}
      decay={2}
      distance={10}
      color="lightblue"
    />
  );
}
