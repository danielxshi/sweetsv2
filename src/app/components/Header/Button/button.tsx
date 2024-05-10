import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { ReactNode } from "react";

interface Props {
  isActive?: any;
  toggleMenu?: any;
  label?: any;
  // any props that come into the component
}

export default function Button({ isActive, toggleMenu }: Props) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: Props) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
