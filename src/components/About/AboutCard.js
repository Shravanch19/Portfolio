import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shravan chaturvedi </span>
            from <span className="purple"> Mathura, India.</span>
            <br />
            I am currently pursuing a Bachelor's degree in Computer Applications with a specialization in Data Science at GLA University.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books and listening Podcast
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Minimize dot balls and keep taking singles!"{" "}
          </p>
          <footer className="blockquote-footer">Shravan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
