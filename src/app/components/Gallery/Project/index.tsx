"use client";
import React from "react";
import styles from "./style.module.scss";
import Scroller from "../../Scroller/scroller";

interface Props {
  index?: any;
  title?: any;
  setModal?: any;
  src?: string;
  url?: any;
}

export default function index({ index, title, setModal, src, url }: Props) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={[[styles.project], ""].join("")}
    >
      <Scroller src={src} title={title} url={url} />
    </div>
  );
}
