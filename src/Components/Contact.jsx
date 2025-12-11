import React from "react";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";
import { LuMailPlus } from "react-icons/lu";
import { FaAt, FaGithub, FaLinkedin, FaPhoneAlt, FaStar, FaTwitterSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { GoGitBranch } from "react-icons/go";
const Contact = () => {
  return (
    <div id="Contact">
      <div className="Contact_container">
        <Row className="Contact_Container_Rotate">
          <Col lg={11} md={12}>
            <div className="Contact_Left_container">
              <Row>
                <Col lg={7}>
                  <div className="Contact_Form_container">
                    <div className="Form_txt1">Contact with me</div>
                    <form className="Form_box">
                      <div className="Form_txt2">
                        If you have any questions or concerns, please don't
                        hesitate to contact me. I am open to any work
                        opportunities that align with my skills and interests.
                      </div>
                      <div className="input_group">
                        <label className="user-label">Your Name</label>
                        <input
                          required=""
                          type="text"
                          name="text"
                          className="Contact_Form_input"
                        />
                      </div>
                      <div className="input_group">
                        <label className="user-label">Your Email</label>
                        <input
                          required=""
                          type="text"
                          name="text"
                          className="Contact_Form_input"
                        />
                      </div>
                      <div className="input_group">
                        <label className="user-label">Your Message:</label>
                        <textarea className="bigInput"></textarea>
                      </div>
                      <div className="Contact_btn">
                        <button className="sendBtn">
                          SEND MESSAGE <LuMailPlus className="mail_icon" />
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className="Contact_Address">
                    <div className="Contact_Address_box">
                      <a href="mailto:kavinkumar200448@gmail.com" target="_blank">
                        <div className="Contact_Address_Mail">
                          <div className="Contact_Address_Circle">
                            <FaAt />
                          </div>
                          <div className="Address_Mail">
                            kavinkumar200448@gmail
                          </div>
                        </div>
                      </a>
                      <a href="tel:+91 9360632201" target="_blank">
                        <div className="Contact_Address_Mail">
                          <div className="Contact_Address_Circle">
                            <FaPhoneAlt />
                          </div>
                          <div className="Address_Mail">+91 9360632201</div>
                        </div>
                      </a>
                      <a href="https://maps.app.goo.gl/ezwVTvb7w246PAfBA" target="_blank">
                        <div className="Contact_Address_Mail">
                          <div className="Contact_Address_Circle">
                            <FaLocationDot />
                          </div>
                          <div className="Address_Mail">
                            Dharapuram
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="Contact_Social_Icons">
                      <a href="https://github.com/Kavinkumar84" target="_blank">
                        <div className="Contact_iconss">
                          <FaGithub />
                        </div>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/kavinkumar84/"
                        target="_blank"
                      >
                        <div className="Contact_iconss">
                          <FaLinkedin />
                        </div>
                      </a>
                      <a
                        href="https://leetcode.com/u/Kavinkumar84/"
                        target="_blank"
                      >
                        <div className="Contact_iconss">
                          <SiLeetcode />
                        </div>
                      </a>
                      <a
                        href="https://www.geeksforgeeks.org/user/kavinkuma29i4/"
                        target="_blank"
                      >
                        <div className="Contact_iconss">
                          <SiGeeksforgeeks />
                        </div>
                      </a>
                      <a href="" target="_blank">
                        <div className="Contact_iconss">
                          <FaTwitterSquare />
                        </div>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={1} md={12}>
            <div className="Contact_left">
              <div className="Contact_Right_title">
                <div className="line_about"></div>
                <div className="Contact_Right_box">Contact Me</div>
                <div className="line_about"></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <hr className="Contact_hr"/>
      <div className="Contact_Footer">
        <div className="Contact_Footer_txt">© Developed by <a href="https://github.com/Kavinkumar84/Developer_Portfolio" target="_blank">Kavin Kumar</a></div>
        <div className="Contact_Footer_right">
          <div className="Contact_Footer_Star">
            <a href="https://github.com/Kavinkumar84/Developer_Portfolio" target="_blank">
              <FaStar />
              <div className="Star_txt">Star</div>
            </a>
          </div>
          <div className="Contact_Footer_Star">
            <a href="https://github.com/Kavinkumar84/Developer_Portfolio/fork" target="_blank">
              <GoGitBranch />
              <div className="Star_txt">Fork</div>
            </a>
          </div>
          <div className="Contact_Footer_Fork"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
