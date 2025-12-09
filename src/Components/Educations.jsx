import React from "react";
import "./Educations.css";
import Student from "../assets/Student1.json";
import { Col, Row } from "react-bootstrap";
import Lottie from "lottie-react";
import { BsPersonWorkspace } from "react-icons/bs";
const Educations = () => {
  return (
    <div id="Educations">
      <div className="Education_bg">
        <div className="Education_Whole">
          <div className="Education_Header">
            <div className="line_Education"></div>
            <div className="Education_Right_box">Education</div>
            <div className="line_Education"></div>
          </div>
          <div className="Education_Container">
            <Row>
              <Col lg={6} md={12}>
                <div className="Education_Left">
                  <Lottie
                    animationData={Student}
                    loop={true}
                    className="Education_animation"
                  />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="Education_Right">
                  <div className="Education_details">
                    <div className="Education_Detail_top">2021 - 2025</div>
                    <div className="Education_Detail_bottom">
                      <div className="Education_detail_icon">
                        <BsPersonWorkspace />
                      </div>
                      <div className="Education_College_detail">
                        <div className="Education_txt1">B.Tech. Information Technology</div>
                        <div className="Education_txt2">Dr. N.G.P. institute of Technology, Coimbatore</div>
                      </div>
                    </div>
                  </div>
                  <div className="Education_details">
                    <div className="Education_Detail_top">2020 - 2021</div>
                    <div className="Education_Detail_bottom">
                      <div className="Education_detail_icon">
                        <BsPersonWorkspace />
                      </div>
                      <div className="Education_College_detail">
                        <div className="Education_txt1">HIGHER SECONDARY CERTIFICATE</div>
                        <div className="Education_txt2">Thenmalar Higher Secondary School, Dharapuram</div>
                      </div>
                    </div>
                  </div>
                  <div className="Education_details">
                    <div className="Education_Detail_top">2018 - 2019</div>
                    <div className="Education_Detail_bottom">
                      <div className="Education_detail_icon">
                        <BsPersonWorkspace />
                      </div>
                      <div className="Education_College_detail">
                         <div className="Education_txt1">SECONDARY SCHOOL CERTIFICATE</div>
                        <div className="Education_txt2">Thenmalar Higher Secondary School, Dharapuram</div>
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

export default Educations;
