import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Jarvis from "../../Assets/Projects/Jarvis.jpeg";
import Dharavahika from "../../Assets/Projects/Dharavahik.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects, I am <strong className="purple">Working On </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dharavahika}
              isBlog={false}
              title="Dharavahika"
              description="A AI based Movies downloading website build with Next js and Mongo DB."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jarvis}
              isBlog={false}
              title="Jarvis"
              description="A Voice based Chat Bot build with Python. Based on Iron Man AI. "
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
