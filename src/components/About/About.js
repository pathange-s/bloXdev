import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./UsedTickets";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import UsedTickets from "./UsedTickets";
import UnusedTickets from "./UnusedTickets";
import ticket2 from "../../Assets/Tickets/ticket2.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
       
        <h1 className="project-heading">
          Your <strong className="purple">Tickets </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xs={4} md={4} className="ticket-card">
            <UnusedTickets
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
          <Col xs={4} md={4} className="ticket-card">
            <UnusedTickets
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
          <h1 className="project-heading">
          Your <strong className="purple">Collectibles </strong>
        </h1>

        <UsedTickets />
{/* 
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
