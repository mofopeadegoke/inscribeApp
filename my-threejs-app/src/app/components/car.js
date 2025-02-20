"use client";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

export default function Car() {
  const { scene } = useGLTF("/scene.gltf");
  const carRef = useRef();
  const speed = 0.1; // Adjust speed as needed
  const rotationSpeed = 0.05; // Adjust turning speed

  // State for movement
  const [keys, setKeys] = useState({});

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeys((prev) => ({ ...prev, [event.code]: true }));
    };

    const handleKeyUp = (event) => {
      setKeys((prev) => ({ ...prev, [event.code]: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Move the car using useFrame
  useFrame(() => {
    if (!carRef.current) return;

    if (keys["ArrowUp"]) carRef.current.position.z += speed; // Move forward
    if (keys["ArrowDown"]) carRef.current.position.z -= speed; // Move backward
    if (keys["ArrowLeft"]) carRef.current.rotation.y -= rotationSpeed; // Turn left
    if (keys["ArrowRight"]) carRef.current.rotation.y += rotationSpeed; // Turn right
  });
  return <primitive object={scene} ref={carRef} />;
}
