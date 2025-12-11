import React from "react";
import "./Experience.css";
import { Col, Row } from "react-bootstrap";
import { MdDescription } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { DiAtom } from "react-icons/di";
import { CgAdd } from "react-icons/cg";
import { GoBook, GoTrophy } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
const Experience = () => {
  let obj = {
    experience: [
      {
        title: "Web Developer Intern",
        company_name: "Mist Solutions, Coimbatore",
        logo: <FaCode />,
        duration: "2024 June  - 2024 July",
        description:
          "Focused on core web development concepts with emphasis on frontend design, backend functionality, database management, and implementing real-world application features through practical hands-on development.",
        projects: ["Food Delivery Website"],
        technology: [
          "HTML5 & CSS3",
          "JS",
          "PHP",
          "MySQL",
          "Git & GitHub",
          "XAMPP",
        ],
        tools: ["Git & GitHub", "XAMPP"],
      },
      {
        title: "MERN Stack Intern",
        company_name: "GT Softwares, Coimbatore",
        logo: <DiAtom />,
        duration: " 2025 Oct - 2025 Jan",
        description:
          "Focused on full-stack web development using the MERN stack with emphasis on building responsive UIs, creating REST APIs, managing databases, and implementing real-time application features through practical project-based learning.",
        projects: ["E-Commerce Website"],
        technology: [
          "HTML5 & CSS3",
          "JavaScript (ES6+)",
          "React.js",
          "Node.js",
          "Express.js",
          "JSON",
          "MongoDB",
          "REST APIs",
          "Git & GitHub",
          "Vercel / Netlify",
          "Postman",
          "Firebase",
        ],
        tools: ["Git & GitHub", "Vercel / Netlify", "Postman"],
      },
    ],
  };
  return (
    <div id="Experience">
      <div className="Experience_whole">
        <div className="Education_Header">
          <div className="line_Education"></div>
          <div className="Education_Right_box">Experience</div>
          <div className="line_Education"></div>
        </div>
        <div className="Experience_container">
          <Row>
            {obj.experience.map((data, index) => (
              <Col lg={6} key={index}>
                <div className="Experience_Incontainer">
                  <div className="Experience_left">
                    <div className="Experience_left_H1">
                      <div className="Experience_h1">
                        {data.logo}
                        <div className="">{data.title}</div>
                      </div>
                      <div className="Experience_h2">
                        <div className="book_clr">
                          <GoBook />
                        </div>
                        <div className="">{data.company_name}</div>
                      </div>
                      <div className="Experience_h3">
                        <CiCalendar />
                        <div className="">{data.duration}</div>
                      </div>
                    </div>
                    <div className="Experience_left_H2">
                      <div className="Experience_line"></div>
                      <div className="Experience_h3">{data.description}</div>
                    </div>
                    <div className="Experience_left_H3">
                      <div className="Experience_h5">
                        <div className="trophy_clr">
                          <GoTrophy />
                        </div>
                        <div className="Experience_h4">Projects</div>
                      </div>
                      <div className="Experience_h6">
                        {data.projects.map((projects, idx) => (
                          <div className="Experience_proj" key={idx}>
                            <div className="Experience_badge">
                              <SlBadge />
                            </div>
                            {projects}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="Experience_left_H4">
                      {data.technology.map((tech, idx) => (
                        <div className="Experience_tech" key={idx}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Experience;
