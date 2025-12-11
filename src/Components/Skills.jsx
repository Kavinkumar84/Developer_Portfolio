import React from "react";
import "./Skills.css";
import Java from '../assets/Java.png'
import HTML5 from '../assets/HTML5.png'
import CSS3 from '../assets/CSS3.png'
import Bootstrap from '../assets/Bootstrap.png'
import JavaScript from '../assets/JS.png'
import Reactjs from '../assets/React.png'
import Vite from '../assets/Vite.png'
import Node from '../assets/Node.png'
import ExpressJs from '../assets/ExpressJs.png'
import MongoDB from '../assets/MongoDB.png'
import MySQL from '../assets/MySQL.png'
import PostgresSQL from '../assets/PostgresSQL.png'
import Firebase from '../assets/Firebase.png'
import Postman from '../assets/Postman.png'
import EmbeddedC from '../assets/EmbeddedC.png'
import Arduino from '../assets/Arduino.png'
import Git from '../assets/Git.png'
import VSCode from '../assets/VSCode.png'
import Eclipse from '../assets/Eclipse.png'
import Intellij from '../assets/Intellij.png'
import Netlify from '../assets/Netlify.png'
import Vercel from '../assets/Vercel.png'
import Marquee from "react-fast-marquee";
const Skills = () => {
  const skills = [
  { img: Java, title: "Java" },
  { img: HTML5, title: "HTML5" },
  { img: CSS3, title: "CSS3" },
  { img: Bootstrap, title: "Bootstrap" },
  { img: JavaScript, title: "JavaScript" },
  { img: Reactjs, title: "React" },
  { img: Vite, title: "Vite" },
  { img: Node, title: "Node.js" },
  { img: ExpressJs, title: "Express.js" },
  { img: MongoDB, title: "MongoDB" },
  { img: MySQL, title: "MySQL" },
  { img: PostgresSQL, title: "PostgreSQL" },
  { img: Firebase, title: "Firebase" },
  { img: Postman, title: "Postman" },
  { img: EmbeddedC, title: "Embedded C" },
  { img: Arduino, title: "Arduino" },
  { img: Git, title: "Git" },
  { img: VSCode, title: "VS Code" },
  { img: Eclipse, title: "Eclipse" },
  { img: Intellij, title: "IntelliJ" },
  { img: Netlify, title: "Netlify" },
  { img: Vercel, title: "Vercel" },
];

  return (
    <div id="Skills">
      <div className="Skill_whole">
        <div className="Skill_Header">
          <div className="line_Skill"></div>
          <div className="Skill_Right_box">Skills</div>
          <div className="line_Skill"></div>
        </div>
        <div className="Skill_Container">
          <Marquee speed={50} pauseOnHover gradient={false}>
            {skills.map((m, ind) => (
              <div key={ind} className="skill-card mx-4">
                <img src={m.img} alt={m.title} className="skill-icon" />
                <p className="skill-title">{m.title}</p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Skills;
