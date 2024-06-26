"use client";
import React, { useState } from "react";
import gsap from "gsap";
import "./globals.scss";
import { useGSAP } from "@gsap/react";
import Landing from "./components/loading";
import Header from "./components/Header";
import Gallery from "./components/Gallery/gallery";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer/footer";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

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
    gsap.from(".text-anim", {
      opacity: 0,
    });
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
    gsap.to(".text-anim", {
      delay: 5.5,
      onComplete: () => setShow(true),
    });
    gsap.to(".text-anim", {
      delay: 6.75,
      onComplete: () => setShowFooter(true),
    });
  });

  return (
    <>
      <Landing />

      {show && (
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, type: "ease", stiffness: 100 }}
              className="text-anim row-start-6 col-span-full"
            >
              <Gallery />
              {/* {showFooter && (
                <div className="pt-[10vh] grid grid-cols-13">
                  <Footer />
                </div>
              )} */}
            </motion.div>
          )}
        </AnimatePresence>
      )}
      <div className="md:col-start-8 md:col-end-12 md:row-start-4 row-start-3 col-start-1 col-end-12 z-10">
        <h1 className="text-lg z-10 flex leading-relaxed">
          creative development agency based in vancouver. Providing custom coded
          websites, custom designed websites, marketing, branding and website
          maintenance.
        </h1>
      </div>
    </>
  );
}

export default App;
