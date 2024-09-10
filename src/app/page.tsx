// "use client";
// import React, { useState } from "react";
// import gsap from "gsap";
import "./globals.scss";
// import { useGSAP } from "@gsap/react";
import Landing from "./components/loading";
import Header from "./components/Header";
import Gallery from "./components/Gallery/gallery";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer/footer";
import Spline from "@splinetool/react-spline/next";

function App() {
  return (
    <>
      <Landing />

      <div className="h-screen w-screen absolute z-[1]">

        {/* <Spline
          scene="https://prod.spline.design/i7cKsU5q6nT3n195/scene.splinecode"
          // width={1920}
          // height={1080}
        />{" "}  */}
      </div>
    </>
  );
}

export default App;
