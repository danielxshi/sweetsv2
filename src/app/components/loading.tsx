"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
// import React from "react";
import styles from "../styles/modules/_landing.module.scss";
import Image from "next/image";
import bg from "../../../public/images/7.jpg";
import { CustomEase } from "gsap/CustomEase";

// function revealLandingPage() {
//   gsap.to(".hero", {
//     clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
//     duration: 2,
//     ease: "hop",
//     onStart: () => {
//       gsap.to(".hero", {
//         transform: "translate(-50%, -50%) scale(1)",
//         duration: 2.25,
//         ease: "power3.inOut",
//         delay: 0.25,
//       });
//       gsap.to(".overlay", {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
//         duration: 2,
//         delay: 0.5,
//         ease: "hop",
//       });

//       gsap.to(".hero-img img", {
//         transform: "scale(1)",
//         duration: 2.25,
//         ease: "power3.inOut",
//         delay: 0.25,
//       });

//       gsap.to(".header h1 span", {
//         y: 0,
//         stagger: 0.1,
//         duration: 2,
//         ease: "power4.inOut",
//         delay: 0.75,
//       });
//     },
//   });
// }

export default function Loader() {
  const [show, setShow] = useState(true);

  // function animateCounter() {
  //   const counterElement =
  //     document.querySelector<HTMLParagraphElement>(".counter p");
  //   let currentValue = 0;
  //   const updateInterval = 300;
  //   const maxDuration = 2000;
  //   const endValue = 100;
  //   const startTime = Date.now();

  //   function updateCounter() {
  //     const elapsedTime = Date.now() - startTime;
  //     if (elapsedTime < maxDuration) {
  //       currentValue = Math.min(
  //         currentValue + Math.floor(Math.random() * 30) + 5,
  //         endValue
  //       );
  //       if (counterElement)
  //         counterElement.textContent = currentValue.toString();
  //       setTimeout(updateCounter, updateInterval);
  //     } else {
  //       if (counterElement)
  //         counterElement.textContent = currentValue.toString();
  //       setTimeout(() => {
  //         gsap.to(counterElement, {
  //           y: -20,
  //           duration: 1,
  //           ease: "power3.inOut",
  //           onStart: () => {
  //             revealLandingPage();
  //           },
  //         });
  //       }, -500);
  //     }
  //   }
  //   updateCounter();
  // }

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
    const tl = gsap.timeline({});
    tl.to(".hero", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 2,
      ease: "hop",
    });
    tl.to(".hero", {
      transform: "translate(-50%, -50%) scale(1)",
      duration: 2.25,
      ease: "power3.inOut",
      delay: 0.25,
    });
    tl.to(".overlay", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 2,
      delay: 0.5,
      ease: "hop",
    });

    tl.to(".hero-img img", {
      transform: "scale(1)",
      duration: 2.25,
      ease: "power3.inOut",
      delay: 0.25,
    });
    splitTextIntoSpans(".header h1");

    tl.to(".header h1 span", {
      y: 0,
      stagger: 0.1,
      duration: 2,
      ease: "power4.inOut",
      delay: 0.75,
    });
  }); // <-- scope is f
  return (
    <div className="landing-container">
      <div className="counter">
        <p>0</p>
      </div>

      <section className="hero">
        <div className="overlay"></div>

        <div className="header">
          <h1>sweets</h1>
        </div>

        <div className="hero-img">
          <Image src={bg} alt="" />
        </div>
      </section>
    </div>
  );
}
