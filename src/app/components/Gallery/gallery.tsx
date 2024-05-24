"use client";
import styles from "./page.module.scss";
import { useState } from "react";
import Project from "./Project/index";
import Modal from "./Modal/index";

const projects = [
  {
    title: "SKYLLEN PACIFIC",
    src: "1.jpg",
    color: "#000000",
    gif: "https://i.pinimg.com/originals/c2/46/6b/c2466b17c126fa5e6e00a17fbefc1bff.gif",
    url: "t",
  },
  {
    title: "LITTLE PISCES",
    src: "2.jpg",
    color: "#8C8C8C",
    gif: "https://media0.giphy.com/media/A5ffIYwJoEpVcMOYiO/giphy.gif?cid=6c09b9522errg076u45e7t6n0x8wfsa2hfkrifdoob20ik2t&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    url: "",
  },
  {
    title: "WENZHOU FRIENDSHIP",
    src: "3.jpg",
    color: "#EFE8D3",
    gif: "https://i.gifer.com/PPy.gif",
    url: "",
  },
  {
    title: "005F AGENCY",
    src: "7.jpg",
    color: "#706D63",
    gif: "https://media2.giphy.com/media/RMwgs5kZqkRyhF24KK/giphy.gif?cid=6c09b952spf5m40ue5c5dmkxscdeq0gqnk7ckvekkdlld8re&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    url: "",
  },
];

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className={[[styles.main], "z-10"].join(" ")}>
      <div className={[[styles.body], ""].join(" ")}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              src={project.gif}
              setModal={setModal}
              key={index}
              url={project.url}
            />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
