import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, Anurag University</h1>
        <p className={styles.description}>
          I'm Rohith, GDSC Lead. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:googledsc@anurag.edu.in" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/gdsc_logo-removebg-preview.png")}
        alt="GDSC Logo of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
