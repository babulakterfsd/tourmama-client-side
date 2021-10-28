import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SinglePackageCard.css";

const SinglepackageCard = ({ detail }) => {
  return (
    <Col>
      <Card className="shadow-lg mb-5">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={detail?.img}
            id="cardimg"
            className="img-fluid"
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Text className="text-light-green fw-semi-bold">
              {detail.duration}
            </Card.Text>
            <h4 className="text-light-green fw-bolder">${detail.price}</h4>
          </div>

          <Card.Title className="abril-font">{`${detail?.location?.city}, ${detail?.location?.country}`}</Card.Title>
          <p className="text-cyan">we provide: {detail.services.join(", ")}</p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Link to='/order'>
            <Button className="btn-light-green  py-2 px-3">Book Package</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SinglepackageCard;
