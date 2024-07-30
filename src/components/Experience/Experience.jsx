import React from "react";
import styles from "./Experience.module.css";

// Importing images
import htmlImage from './html.png'
import cssImage from './css.png'
import reactImage from './react.png'
import nodeImage from './node.png'
import graphqlImage from './graphql.png'
import mongodbImage from './mongodb.png'
import figmaImage from './figma.png'

import googleImage from './google.png'
import microsoftImage from './microsoft.png'
import netflixImage from  './netflix.png'

// Data
const skills = [
  { "title": "HTML", "imageSrc": htmlImage },
  { "title": "CSS", "imageSrc": cssImage },
  { "title": "React", "imageSrc": reactImage },
  { "title": "Node", "imageSrc": nodeImage },
  { "title": "GraphQL", "imageSrc": graphqlImage },
  { "title": "MongoDB", "imageSrc": mongodbImage },
  { "title": "Figma", "imageSrc": figmaImage }
];

const history = [
  {
    "role": "Software Engineer",
    "organisation": "Google",
    "startDate": "Sept, 2022",
    "endDate": "Present",
    "experiences": ["Worked on Google Maps", "Reduced load times by 50%"],
    "imageSrc": googleImage
  },
  {
    "role": "UI Designer",
    "organisation": "Microsoft",
    "startDate": "Aug, 2021",
    "endDate": "Aug, 2022",
    "experiences": ["Worked on Windows 11", "Designed the control panel"],
    "imageSrc": microsoftImage
  },
  {
    "role": "SWE Intern",
    "organisation": "Netflix",
    "startDate": "Apr, 2020",
    "endDate": "Jun, 2020",
    "experiences": [
      "Worked on component library",
      "Helped create UI components"
    ],
    "imageSrc": netflixImage
  }
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
