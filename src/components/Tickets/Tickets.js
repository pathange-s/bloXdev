import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Tickets/leaf.png";
import emotion from "../../Assets/Tickets/emotion.jpeg";
import editor from "../../Assets/Tickets/codeEditor.png";

function Tickets() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Explore <strong className="purple">Tickets </strong>
        </h1>s
        <p style={{ color: "white" }}>
          Top Selling Tickets on the market
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ticket #01"
              description="First of all, the total value of projects staked on Solana recently exceeded $2 billion. It has also become the token of choice for cryptocurrency billionaire Sam Bankman-Fried, the founder of FTX, the fifth-largest cryptocurrency in the world. As a result, Solana's gains did not lose their momentum even as the network suffered its first-ever rug pull."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ticket #02"
              description="First of all, the total value of projects staked on Solana recently exceeded $2 billion. It has also become the token of choice for cryptocurrency billionaire Sam Bankman-Fried, the founder of FTX, the fifth-largest cryptocurrency in the world. As a result, Solana's gains did not lose their momentum even as the network suffered its first-ever rug pull."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ticket #03"
              description="First of all, the total value of projects staked on Solana recently exceeded $2 billion. It has also become the token of choice for cryptocurrency billionaire Sam Bankman-Fried, the founder of FTX, the fifth-largest cryptocurrency in the world. As a result, Solana's gains did not lose their momentum even as the network suffered its first-ever rug pull."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Tickets;
