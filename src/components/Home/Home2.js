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
        <Row>
          <Col md={8} className="home-about-description" >
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"><strong>INTRODUCE </strong></span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey with programming started back in college, and wow, what a ride it’s been! At first, 
              I had no clue how to code, but it didn’t take long to realize it was like finding the missing piece of a perfect puzzle. 
              The more I dove in, the more I discovered how much I loved solving problems and bringing ideas to life through code.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript, PHP, Laravel </b>
              </i>even have a bit of knowledge in <b className="purple">VB.NET</b> too.
              <br />
              <br />
                I'm passionate about building innovative &nbsp;
              <i>
                <b className="purple">Web Applications and Services </b>
                {/* <b className="purple">
                  Blockchain.
                </b> */}
              </i>and
              I love keeping up with the latest trends and cutting-edge tools in the tech world..  
              <br />
              <br />
              Whenever I can, I channel my passion into building amazing products with
              with <b className="purple">Laravel</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> ReactJS or InertiaJS.</b> 
              </i>  It’s all about making things fun and meaningful with code!
            </p>
          </Col>
          <Col
            md={4}
            className="myAvtar d-flex justify-content-center align-items-center"
            style={{ height: "75vh" }}
          >
            <Tilt
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              className=""
            >
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
