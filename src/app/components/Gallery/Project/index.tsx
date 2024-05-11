"use client";
import React from "react";
import styles from "./style.module.scss";

interface Props {
  index?: any;
  title?: any;
  setModal?: any;
}

export default function index({ index, title, setModal }: Props) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <div className={styles.scroll}>
        <div className={styles.mscrolltitle}>
          <div>
            <h1 className="text-black">{title}</h1>
            <h1 className="text-black">{title}</h1>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
