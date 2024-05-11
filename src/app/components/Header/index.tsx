"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button/button";
import styles from "./style.module.scss";
import Nav from "./Nav/nav";
import TextLink from "../Header/Button/link";

const menu = {
  open: {
    width: "480px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "28px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const variants = {
  open: {
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
    opacity: 1,
    x: 0,
    duration: 2,
  },
  closed: { opacity: 0, x: "-100%" },
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={[[styles.header], ""].join(" ")}>
      <motion.div
        variants={variants}
        initial="open"
        animate={isActive ? "closed" : "open"}
        className="col-start-6"
      >
        <div className="links flex gap-8 mr-48">
          <a className="text-xl" href="#">Home</a>
          <a className="text-xl" href="#">Contact</a>
        </div>
      </motion.div>

      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>

      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
