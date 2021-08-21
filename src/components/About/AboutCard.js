import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            What is Solana <span className="purple">Solana Blockchain </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br /> Solana is a decentralized blockchain built to enable scalable, user friendly apps for the world.
            <br />
            <br />
            Solana is a decentralized blockchain
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dapps
            </li>
            <li className="about-activity">
              <ImPointRight /> Blockchain
            </li>
            <li className="about-activity">
              <ImPointRight /> NFTs
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Powerful for developers, Fast for everyone"{" "}
          </p>
          <footer className="blockquote-footer">Solana</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
