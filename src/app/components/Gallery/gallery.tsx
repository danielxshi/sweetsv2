'use client';
import styles from './page.module.scss'
import { useState } from 'react';
import Project from './Project/index';
import Modal from './Modal/index';


const projects = [
  {
    title: "C2 Montreal",
    src: "1.jpg",
    color: "#000000"
  },
  {
    title: "Office Studio",
    src: "2.jpg",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    src: "3.jpg",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "7.jpg",
    color: "#706D63"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={[[styles.main], "z-10"].join(" ")}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}
