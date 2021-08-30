import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import logo from "../../Assets/logo.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Ticket <span className="purple"> Ible </span> 
            </h1>
            <p className="home-about-body">
              Blockchain is a specific type of database. It differs from a typical database in the way it stores information.
              <br />
              <br />Blockchain is a specific type of database.
              <i>
                <b className="purple"> Blockchain is a specific type of database. </b>
              </i>
              <br />
              <br />
              Blockchain is a specific type of database. &nbsp;
              <i>
                <b className="purple">Blockchain is a specific type of database.</b>Blockchain is a specific type of database.{" "}
                <br />
              </i>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={logo} className="img-fluid" alt="logo" />
            </Tilt>
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
