import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone! I am <span className="purple">John Dominic Acuisa </span>
            from <span className="purple"> Taguig, Metro Manila.</span>
            {/* <br />
            I am currently employed as a software developer at Juspay. */}
            <br />
            I've just wrapped up my Bachelor's degree in Information Technology at the fantastic Technological University of the Philippines - Taguig (TUP-Taguig) in November 2024! 🎉 Ready to take on the world with all the tech knowledge and excitement I gained!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar 
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching tech vlogs
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
