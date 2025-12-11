import React from "react";
import "./Skills.css";
import Marquee from "react-fast-marquee";
const Skills = () => {
  const skills = [
    { img: "src/assets/Java.png", title: "Java" },
    { img: "src/assets/HTML5.png", title: "HTML5" },
    { img: "src/assets/CSS3.png", title: "CSS3" },
    { img: "src/assets/Bootstrap.png", title: "Bootstrap" },
    { img: "src/assets/JS.png", title: "JavaScript" },
    { img: "src/assets/React.png", title: "React" },
    { img: "src/assets/Vite.png", title: "Vite" },
    { img: "src/assets/Node.png", title: "Node.js" },
    { img: "src/assets/ExpressJS.png", title: "Express.js" },
    { img: "src/assets/MongoDB.png", title: "MongoDB" },
    { img: "src/assets/MySQL.png", title: "MySQL" },
    { img: "src/assets/PostgresSQL.png", title: "PostgreSQL" },
    { img: "src/assets/Firebase.png", title: "Firebase" },
    { img: "src/assets/Postman.png", title: "Postman" },
    { img: "src/assets/EmbeddedC.png", title: "Embedded C" },
    { img: "src/assets/Arduino.png", title: "Arduino" },
    { img: "src/assets/Git.png", title: "Git" },
    { img: "src/assets/VSCode.png", title: "VS Code" },
    { img: "src/assets/Eclipse.png", title: "Eclipse" },
    { img: "src/assets/Intellij.png", title: "IntelliJ" },
    { img: "src/assets/Netlify.png", title: "Netlify" },
    { img: "src/assets/Vercel.png", title: "Vercel" },
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
