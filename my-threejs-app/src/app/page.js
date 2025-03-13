"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./components/avatar";
import "./styles/style.css";
import * as THREE from "three";
import { Physics } from "@react-three/rapier";
import Wardrobe from "./components/propOne";
import Car from "./components/car";
import CubeComponent from "./components/cube";
import Glass from "./components/glass";
import Btn from "./components/btn";
import BtnColor from "./components/btnColor";
import google from "../../public/google.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="homeMain">
      <Canvas camera={{ position: [10, 5, 5], fov: 45, zoom: 3 }}>
        <ambientLight intensity={10} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* 3D Object */}
        <Physics gravity={[0, -9.8, 0]}>
          <Glass position={[0, 0, 0]} />
        </Physics>
        <OrbitControls></OrbitControls>
      </Canvas>
      <div className="sectCont">
        <section className="sect">
          <article>
            <h1>Create an Account</h1>
            <p>
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </article>
          <form action="">
            <article className="row">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Surname" />
            </article>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Enter your password" />
            <input type="password" placeholder="Confirm Password" />
            <BtnColor content="Create Account" />
            <article className="row">
              <div></div>
              <span>or</span>
              <div></div>
            </article>
            <Btn
              content="Sign up with Google"
              alt="Google's logo"
              url={google}
            />
          </form>
        </section>
      </div>
    </div>
  );
}
