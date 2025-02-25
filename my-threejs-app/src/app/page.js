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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export default function Home() {
  return (
    <div style={{ height: "100vh" }} className="homeMain">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="/texture.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/texture.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/texture.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/texture.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/texture.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
