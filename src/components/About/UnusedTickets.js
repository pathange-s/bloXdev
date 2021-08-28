import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiCalendarCheck } from "react-icons/bi";
import { GoLocation } from "react-icons/go"
import price from '../../Assets/Tickets/price.svg';

function UnusedTickets(props) {
  return (
      <Card className="ticket-card-view">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body>
    <Card.Title style={{ color: "#C36EEC", }} >{props.title}</Card.Title>
    <Card.Text style={{ textAlign: "justify", marginTop: "-7px", marginBottom: "10px" }}>
      {props.description}
    </Card.Text>
    <Card.Text style={{ textAlign: "justify", marginTop: "7px", marginBottom: "7px" }}>
      <BiCalendarCheck style={{ marginRight: "10px", width: "25px", height: "25px", marginTop: "-3px", marginBottom: "2px" }} />
      {props.datetime}
    </Card.Text>

    <Card.Text style={{ textAlign: "justify", marginTop: "7px", marginBottom: "7px" }}>
      <GoLocation style={{ marginRight: "10px", width: "25px", height: "25px" }} />
      {props.location}
    </Card.Text>
    <Card.Text style={{ textAlign: "justify", marginTop: "7px", marginBottom: "7px" }}>
      <img src={price} alt="price" style={{ marginRight: "10px", width: "25px", height: "25px" }} />
      {props.price}
    </Card.Text>
    <Button className="buy-btn" variant="primary" href={props.link} target="_blank" style={{ marginTop: "10px", width: "100px" }}>
      Sell
    </Button>
  </Card.Body>
</Card>
);
}

export default UnusedTickets;