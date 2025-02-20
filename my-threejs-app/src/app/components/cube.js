// "use client" directive marks the file as a client component
"use client";
import { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { useState } from "react";
import { DodecahedronGeometry, TextureLoader } from "three";
import { RigidBody } from "@react-three/rapier";

export default function CubeComponent() {
  const cubeRef = useRef();
  const texture = useLoader(TextureLoader, "/texture.jpg");
  const diceRef = useRef();
  const [hoverHeight, setHoverHeight] = useState(2.4); // Initial hover height

  useFrame(({ clock }) => {
    if (diceRef.current) {
      // Make the dice float up and down smoothly
      const yOffset = Math.sin(clock.elapsedTime) * 0.1;
      diceRef.current.setTranslation({ x: 0, y: hoverHeight + yOffset, z: 0 });
    }
  });
  useFrame(() => {
    // cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });
  return (
    <RigidBody
      colliders="hull"
      restitution={0.6}
      type="kinematicPosition"
      ref={diceRef}
    >
      <mesh ref={cubeRef}>
        <dodecahedronGeometry args={[0.7]} />
        <meshStandardMaterial color="red" map={texture} />
      </mesh>
    </RigidBody>
  );
}
