import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";

import { perspective, slideIn } from "./anim";
import TextLink from "../Button/link";

import Button from "../Button/button";

interface Props {
  children?: any;
}

export default function index({ children }: Props) {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {/* <a href={href}>{title}</a> */}
                <TextLink label={title} href={href}></TextLink>
                {children}
              </motion.div>
            </div>
          );
        })}
      </div>
      {/* <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              className="menu-footer-links"
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              href={href}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div> */}
    </div>
  );
}
