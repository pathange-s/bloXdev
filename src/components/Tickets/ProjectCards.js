import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiCalendarCheck } from "react-icons/bi";
import { GoLocation } from "react-icons/go"
import price from '../../Assets/Tickets/price.svg';
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ textAlign: "left", color: "#C36EEC" }} >{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <BiCalendarCheck style={{ marginRight: "10px", width: "25px", height: "25px" }} />
          {props.datetime}
        </Card.Text>

        <Card.Text style={{ textAlign: "justify" }}>
          <GoLocation style={{ marginRight: "10px", width: "25px", height: "25px" }} />
          {props.location}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <img src={price} alt="price" style={{ marginRight: "10px", width: "25px", height: "25px" }} />
          {props.price}
        </Card.Text>
        <Button className="buy-btn" variant="primary" href={props.link} target="_blank" style={{ marginTop: "10px", width: "100px" }}>
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;