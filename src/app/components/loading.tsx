"use client"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
// import React from "react";
import styles from "../styles/modules/_landing.module.scss";

export default function Loader() {
  const [show, setShow] = useState(true);

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

  const knot = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({});

      // gsap code here...

      splitTextIntoSpans(".headeritemwrapper h1");
      // gsap.set(".headeritemwrapper h1 span", {
      //   y: 100,
      //   stagger: 0.05,
      //   duration: 1,
      //   ease: "power3.out",
      // });
      gsap.set("h1", {
        y: 100,
      });
      gsap.set(".counter p", {
        y: 35,
      });
      tl.to("h1", {
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      });
      tl.to(
        ".counter p",
        {
          delay: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.5"
      );
      tl.to(".counter p", {
        y: -35,
        duration: 0.5,
        ease: "power3.out",
      });
      tl.to(".counter p", {
        y: -70,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });

      tl.to(".counter p", {
        y: -105,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.5,
      });
      tl.from(
        ".tagline",
        {
          y: 40,
          opacity: 0,
        },
        "-=4"
      );
      tl.to("h1", {
        // fontSize: "15vw",
        y: 20,
        duration: 1.2,
        ease: "power3.out",
      });
      tl.to(
        ".headeritem",
        {
          duration: 0.1,
        },
        "<"
      );
      tl.to(
        ".block",
        {
          delay: 0.55,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.5,
          stagger: {
            amount: 0.5,
            from: "random",
            ease: "power3.out",
          },
        },
        "<"
      );
      tl.from(".logo, link, footer p", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        onComplete: () => setShow(false),
      });
    },
    { scope: knot }
  ); // <-- scope is f
  return (
    <div className="w-full">
      {show && (
        <div ref={knot} className="loader">
          {/* <footer>
            <p>&copy; 2024</p>
            <p>Scroll to explore</p>
          </footer> */}
          <div className="blocks">
            <div className="block">
              <img src="./images/7.jpg" alt="" />
            </div>
          </div>
          <div className="header">
            <div className="headeritem">
              <div className="headeritemwrapper">
                <h1>sweets Creative Production Agency</h1>
              </div>
            </div>
          </div>
          <div className="counter">
            <p>
              3 <br />
              2 <br />1
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
