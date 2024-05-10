import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { ReactNode } from "react";

interface Props {
  isActive?: any;
  toggleMenu?: any;
  label?: any;
  href?: any;
  // any props that come into the component
}

export default function Button({ isActive, label, href }: Props) {
  return (
    <div className={styles.text}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label={label} />
        </div>
        <a href={href} className={styles.el}>
          <PerspectiveText label={label} />
        </a>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: Props) {
  return (
    <div className={styles.perspectiveTextLink}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
