import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Tickets/leaf.png";
import ticket2 from "../../Assets/Tickets/ticket2.png";

function Tickets() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Explore <strong className="purple">Tickets </strong>
        </h1>s
        <p style={{ color: "white", fontSize: "22px" }}>
          Top Selling Tickets on the market
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={4} md={4} className="project-card">
            <ProjectCard
              imgPath={ticket2}
              isBlog={false}
              title="Ticket #01"
              description="A long description about the event like artists, etc or other details in about 3-4 lines."
              datetime="5:40 | 23-06-2003"
              location="Afghanisthan"
              price="500 SOL"
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
          <Col xs={4} md={4} className="project-card">
            <ProjectCard
              imgPath={ticket2}
              isBlog={false}
              title="Ticket #01"
              description="A long description about the event like artists, etc or other details in about 3-4 lines."
              datetime="5:40 | 23-06-2003"
              location="Afghanisthan"
              price="500 SOL"
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
          <Col xs={4} md={4} className="project-card">
            <ProjectCard
              imgPath={ticket2}
              isBlog={false}
              title="Ticket #01"
              description="A long description about the event like artists, etc or other details in about 3-4 lines."
              datetime="5:40 | 23-06-2003"
              location="Afghanisthan"
              price="500 SOL"
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
          <Col xs={4} md={4} className="project-card">
            <ProjectCard
              imgPath={ticket2}
              isBlog={false}
              title="Ticket #01"
              description="A long description about the event like artists, etc or other details in about 3-4 lines."
              datetime="5:40 | 23-06-2003"
              location="Afghanisthan"
              price="500 SOL"
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
          <Col xs={4} md={4} className="project-card">
            <ProjectCard
              imgPath={ticket2}
              isBlog={false}
              title="Ticket #01"
              description="A long description about the event like artists, etc or other details in about 3-4 lines."
              datetime="5:40 | 23-06-2003"
              location="Afghanisthan"
              price="500 SOL"
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>
          <Col xs={4} md={4} className="project-card">
            <ProjectCard
              imgPath={ticket2}
              isBlog={false}
              title="Ticket #01"
              description="A long description about the event like artists, etc or other details in about 3-4 lines."
              datetime="5:40 | 23-06-2003"
              location="Afghanisthan"
              price="500 SOL"
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>



        </Row>
      </Container>
    </Container >
  );
}

export default Tickets;
