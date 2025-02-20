import { RigidBody } from "@react-three/rapier";
import { BoxGeometry } from "three";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Floor(props) {
  const texture = useLoader(TextureLoader, "/texture.jpg");
  return (
    <RigidBody type="fixed">
      <mesh position={[props.psX, props.psY, props.psZ]} recieveShadow>
        <boxGeometry args={[props.szX, props.szY, props.szZ]} />
        <meshStandardMaterial color={props.cl} map={texture} />
      </mesh>
    </RigidBody>
  );
}
