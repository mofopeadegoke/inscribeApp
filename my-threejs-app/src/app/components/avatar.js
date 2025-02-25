"use client";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

export default function Avatar({ position = [-0.8, -2, 0] }) {
  const { scene } = useGLTF("/avatar/scene.gltf");
  const avatarRef = useRef();
  useEffect(() => {
    avatarRef.current.rotation.y += 0.1;
    avatarRef.current.rotation.x -= 0.5;
    avatarRef.current.rotation.z += 0.1;
  });
  useFrame(({ clock }) => {
    avatarRef.current.position.y =
      position[1] + Math.sin(clock.elapsedTime) * 0.1;
  });
  // useFrame(() => {
  //   avatarRef.current.rotation.y += 0.001;
  // });
  return <primitive object={scene} ref={avatarRef} position={position} />;
}
