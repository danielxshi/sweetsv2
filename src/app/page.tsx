"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./globals.scss";
import { useGSAP } from "@gsap/react";
import Landing from "./components/loading";
import Button from "./components/Header/Button/button";
import Header from "./components/Header";
import Gallery from "./components/Gallery/gallery";

function App() {
  const [isActive, setIsActive] = useState(false);

  function splitTextIntoSpans(selector: any) {
    let elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      let text = element.innerText;
      let splitText = text
        .split("")
        .map(function (char: string) {
          return `<span>${char === " " ? "&nbsp;&nbsp;" : char}</span>`;
        })
        .join("");
      element.innerHTML = splitText;
    });
  }

  useGSAP(() => {
    gsap.to(".slide-next-img", {
      delay: 5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power3.out",
    });
    splitTextIntoSpans(".slider-content-active h1");
    gsap.to(".slider-content-active h1 span", {
      delay: 5.5,
      duration: 1,
      stagger: 0.05,
      top: "0",
      ease: "power3.out",
    });
    gsap.to(".slide-active img", {
      delay: 5.5,
      scale: 2,
      duration: 2,
      ease: "power3.out",
    });
  });

  return (
    <div className="">
      {/* <Landing /> */}
      <Gallery />

      {/* <div className="contain ">
        <div className="preview-bg">
          <img src="/images/7.jpg" alt="" />
        </div>
      </div> */}
      <div className="container mx-auto grid-cols-7 grid gap-8 grid-rows-7 max-h-[100vh]">
        
        {/* <div className="row-start-4 col-start-1 relative w-screen">
          <Gallery />
        </div> */}

        {/* <div className="py-6 intro col-start-1 md:col-span-3 col-span-5 leading-loose  text-white z-10">
          <p className="text-2xl leading-loose">
            SWEETS is a global creative company that brings brands, stories, and
            experiences to life through art, design, and technology.
          </p>
        </div>

        <div className="col-start-5 col-end-8 relative py-6">
          <nav className="z-10 flex ">
            <div className="hamburger">
              <Header />
            </div>{" "}
          </nav>
        </div>

        <div className="row-start-2 row-span-3 col-start-1 col-span-full relative">
          <div className="slider absolute">
            <div className="slider-content">
              <div className="slider-content-active project-title">
                <h1 className="text-3xl uppercase">STUDIO</h1>
              </div>
            </div>
          </div>

          <p className="col-span-3 uppercase absolute bottom-0 p-8 text-white ml-48">
            a creative production agency
          </p>

          <footer className="col-span-3 col-start-7">
            <p className="text-white">Launching Soon</p>
          </footer>
        </div> */}
      </div>
    </div>
  );
}

export default App;
