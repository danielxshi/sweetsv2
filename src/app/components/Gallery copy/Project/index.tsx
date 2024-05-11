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
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}