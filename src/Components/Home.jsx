import "./Home.css";
import { Col, Row } from "react-bootstrap";
import Lottie from "lottie-react";
// import bg from "../assets/Global.json";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaUser,
} from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 880) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <div id="Home">
      <div className="Home_bg">
        <div className="Home_Container1">
          <div className="Home_Header">
            <div className="Header_name">Kavin Kumar</div>
            <div className="Navbar">
              <nav>
                <li>
                  <a href="#About">ABOUT</a>
                </li>
                <li>
                  <a href="#Experience">EXPERIENCE</a>
                </li>
                <li>
                  <a href="#Skills">SKILLS</a>
                </li>
                <li>
                  <a href="#Educations">EDUCATION</a>
                </li>
                <li>
                  <a href="#Projects">PROJECTS</a>
                </li>
                <li>
                  <a href="#Contact">CONTACT</a>
                </li>
              </nav>
            </div>
            <div className="Menbar">
              <label class="hamburger" ref={buttonRef}>
                <input
                  type="checkbox"
                  onChange={() => setMenuOpen(!menuOpen)}
                  checked={menuOpen}
                />
                <svg viewBox="0 0 32 32">
                  <path
                    class="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
            {menuOpen && (
              <div className="MobileMenu" ref={menuRef}>
                <a href="#About" onClick={() => setMenuOpen(false)}>
                  ABOUT
                </a>
                <a href="#Experience" onClick={() => setMenuOpen(false)}>
                  EXPERIENCE
                </a>
                <a href="#Skills" onClick={() => setMenuOpen(false)}>
                  SKILLS
                </a>
                <a href="#Educations" onClick={() => setMenuOpen(false)}>
                  EDUCATION
                </a>
                <a href="#Projects" onClick={() => setMenuOpen(false)}>
                  PROJECTS
                </a>
                <a href="#Contact" onClick={() => setMenuOpen(false)}>
                  CONTACT
                </a>
              </div>
            )}
          </div>
          <div className="Home_container">
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className="Home_Left">
                  <div className="Home_Left_Txt1">
                    Hello,
                    <br />
                    This is
                    <span className="" style={{ color: "#E60076" }}>
                      
                      KAVIN KUMAR
                    </span>
                    , I'm a Professional
                    <span style={{ color: "#16f2b3" }}> FullStack Developer.</span>
                  </div>
                  <div className="Social_Icons">
                    <a href="https://github.com/Kavinkumar84" target="_blank">
                      <div className="iconss">
                        <FaGithub />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kavinkumar84/"
                      target="_blank"
                    >
                      <div className="iconss">
                        <FaLinkedin />
                      </div>
                    </a>
                    <a
                      href="https://leetcode.com/u/Kavinkumar84/"
                      target="_blank"
                    >
                      <div className="iconss">
                        <SiLeetcode />
                      </div>
                    </a>
                    <a
                      href="https://www.geeksforgeeks.org/user/kavinkuma29i4/"
                      target="_blank"
                    >
                      <div className="iconss">
                        <SiGeeksforgeeks />
                      </div>
                    </a>
                    <a href="" target="_blank">
                      <div className="iconss">
                        <FaTwitterSquare />
                      </div>
                    </a>
                  </div>
                  <div className="buttons-wrapper">
                    <a href="#Contact" style={{textDecoration :"none"}}>
                      <button className="btn btn-contact">
                        CONTACT ME
                        <FaUser size={20} />
                      </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1BaEXRpDEfcsnsqOMPcUNvGXo9krz_9Nd/view?usp=sharing" target="_blank" style={{textDecoration :"none"}}>
                      <button className="btn btn-resume">
                        GET RESUME
                        <FaDownload size={20} />
                      </button>
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className="Home_Right">
                  <div className="card">
                    <div className="tools">
                      <div className="circle">
                        <span className="yellow box"></span>
                      </div>
                      <div className="circle">
                        <span className="green box"></span>
                      </div>
                      <div className="circle">
                        <span className="red box"></span>
                      </div>
                    </div>
                    <div className="card__content">
                      <div className="Home_card_txt">
                        <div>
                          <span style={{ color: "#e60076" }}>const</span>
                          Developer<span style={{ color: "#e60076" }}> = </span>
                          {"{"}
                        </div>
                        <div className="Home_card_txt1">
                          <div className="">
                            name:'
                            <span className="yellow_code_txt">Kavin Kumar</span>
                            ',
                          </div>
                          <div className="">
                            title:'
                            <span className="yellow_code_txt">
                              MERN Stack Developer
                            </span>
                            |
                            <span className="yellow_code_txt">
                              React.js Developer
                            </span>
                            |
                            <span className="yellow_code_txt">
                              Node.js Developer
                            </span>
                            ',
                          </div>
                          <div className="">
                            skills:[
                            <div className="Home_card_txt1">
                              '<span className="yellow_code_txt">Java</span>','
                              <span className="yellow_code_txt">HTML</span>', '
                              <span className="yellow_code_txt">CSS</span>', '
                              <span className="yellow_code_txt">
                                JavaScript
                              </span>
                              ', '<span className="yellow_code_txt">React</span>
                              ', '
                              <span className="yellow_code_txt">NodeJS</span>',
                              '<span className="yellow_code_txt">Express</span>
                              ', '
                              <span className="yellow_code_txt">MangoDB</span>',
                              '<span className="yellow_code_txt">MySql</span>',
                              '<span className="yellow_code_txt">Git</span>'
                            </div>
                            ],
                          </div>
                          <div className="">
                            hardWorker:
                            <span className="orrange_code_txt">true</span>,
                          </div>
                          <div className="">
                            quickLearner:
                            <span className="orrange_code_txt">true</span>,
                          </div>
                          <div className="">
                            problemSolver:
                            <span className="orrange_code_txt">true</span>,
                          </div>
                          <div className="">
                            <span className="green_code_txt">hireable: </span>
                            <span className="orrange_code_txt">
                              function
                            </span>() {"{"}
                          </div>
                          <div className="Home_card_txt1">
                            <div className="">
                              <span className="orrange_code_txt">return </span>(
                            </div>
                            <div className="Home_card_txt1">
                              <div className="">
                                <span className="blue_code_txt">this.</span>
                                hardWorker
                                <span className="yellow_code_txt">&&</span>
                              </div>
                              <div className="">
                                <span className="blue_code_txt">this.</span>
                                problemSolver
                                <span className="yellow_code_txt">&&</span>
                              </div>
                              <div className="">
                                <span className="blue_code_txt">this.</span>
                                skills.length
                                <span className="yellow_code_txt">{">"}=</span>
                                <span className="orrange_code_txt"> 5</span>
                              </div>
                            </div>
                            );
                          </div>
                          {"}"};
                        </div>
                        {"}"};
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
