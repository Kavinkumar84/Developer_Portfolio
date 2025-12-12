import React from "react";
import "./Skills.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
    { img: "/assets/Java.png", title: "Java" },
    { img: "/assets/HTML5.png", title: "HTML5" },
    { img: "/assets/CSS3.png", title: "CSS3" },
    { img: "/assets/Bootstrap.png", title: "Bootstrap" },
    { img: "/assets/JS.png", title: "JavaScript" },
    { img: "/assets/React.png", title: "React" },
    { img: "/assets/Vite.png", title: "Vite" },
    { img: "/assets/Node.png", title: "Node.js"},
    { img: "/assets/ExpressJS.png", title: "Express.js" },
    { img: "/assets/MongoDB.png", title: "MongoDB" },
    { img: "/assets/MySQL.png", title: "MySQL" },
    { img: "/assets/PostgresSQL.png", title: "PostgreSQL" },
    { img: "/assets/Firebase.png", title: "Firebase" },
    { img: "/assets/Postman.png", title: "Postman" },
    { img: "/assets/EmbeddedC.png", title: "Embedded C" },
    { img: "/assets/Arduino.png", title: "Arduino" },
    { img: "/assets/Git.png", title: "Git" },
    { img: "/assets/VSCode.png", title: "VS Code" },
    { img: "/assets/Eclipse.png", title: "Eclipse" },
    { img: "/assets/IntelliJ.png", title: "IntelliJ" },
    { img: "/assets/Netlify.png", title: "Netlify" },
    { img: "/assets/Vercel.png", title: "Vercel" },
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