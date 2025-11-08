import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './About.css'
const About = () => {
  return (
    <div className="" id="About">
        <div className="About_Container">
            <Row className='About_Container_Rotate'>
                <Col lg={6}>
                <div className="About_Left_Container">
                    <div className="About_Left_txt1">WHO I AM?</div>
                    <div className="About_Left_txt2">My name is KAVIN KUMAR. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.</div>
                </div>
                </Col>
                <Col lg={6}>
                  <div className="About_Right_Container">
                    <Row className='About_Container_Rotate'>
                      <Col lg ={10} md={12}>
                        <div className="About_Right_img">
                          <div className="About_Right_img_cont">

                          </div>
                        </div>
                      </Col>
                      <Col lg={2} md={12}>
                        <div className="About_Right_title">
                          <div className="line_about"></div>
                          <div className="About_Right_box">About Me</div>
                          <div className="line_about"></div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default About