import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myPic.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ height: '80vh' }}>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"><strong>INTRODUCE </strong></span> MYSELF
            </h1>
            <p className="home-about-body">
              It all began during my college days when programming first caught my attention. At the start, 
              I had no idea how to code, but as time went on, it felt like discovering the missing piece of a perfect puzzle. 
              The more I learned, the more I realized how much I enjoyed solving problems and creating something meaningful through code.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, PHP, Laravel </b>
              </i>and basic knowledge about <b className="purple">VB.NET</b> too.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Applications and Services </b> 
                {/* <b className="purple">
                  Blockchain.
                </b> */}
              </i>and
              also in related areas.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Laravel</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js or Inertia.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar d-flex justify-content-center align-items-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/thewarblessed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/john-dominic-acuisa-76bab0291"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/johndominic456/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
