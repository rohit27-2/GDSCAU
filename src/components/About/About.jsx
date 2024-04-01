import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Know About Us</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/gdsc_logo-removebg-preview.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Empowering Student Developers:</h3>
              <p>
              We offer opportunities for skill-building and networking in the tech industry.              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cultivating Innovation: </h3>
              <p>
                 GDSC Club fosters an environment for students to innovate using Google technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Driving Impact:</h3>
              
              <p>
              Our focus is on creating practical solutions to real-world challenges, inspiring a passion for tech and entrepreneurship.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
