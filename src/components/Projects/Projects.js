import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import calendash from "../../Assets/Projects/calendash.png";
import prodify from "../../Assets/Projects/prodify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendash}
              isBlog={false}
              title="Calendash"
              description="Calendash is an online venue scheduling and reservation platform tailored for TUP-Taguig students. Designed to streamline event planning, it helps users easily book campus venues, manage event timelines, and avoid scheduling conflicts — all in one convenient dashboard."
              ghLink="https://github.com/thewarblessed/calendash2"
              demoLink="https://calendash.online/sign-in"
            />
            
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prodify}
              isBlog={false}
              title="Prodify"
              description="Developed and deployed 'Prodify', a dynamic web application built with Laravel, JavaScript, jQuery, and Bootstrap. The platform is designed to track and analyze performance metrics and production data for agents and individual branches, enabling data-driven decision-making and operational efficiency."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://prodify.com.ph"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendash}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
