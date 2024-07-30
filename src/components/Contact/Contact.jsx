import React from "react";

import styles from "./Contact.module.css";

import email from './emailIcon.png'

import github from './githubIcon.png';


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:myemail@email.com">Sadaamhassan688@email.com</a>
        </li>
      
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/SadaamHassan</a>
        </li>
      </ul>
    </footer>
  );
};
