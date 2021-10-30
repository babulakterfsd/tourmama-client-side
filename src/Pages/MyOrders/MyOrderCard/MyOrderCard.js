import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./MyOrderCard.css";

const SinglepackageCard = ({ detail }) => {

  const history = useHistory();
    const redirect_uri = "/";
  

  //delete a package
  const handleDeletePack = (id) => {
    const proceed = window.confirm("Are you sure to delete the user?");
    if (proceed) {
      const url = `https://radiant-shore-89532.herokuapp.com/allorder/${id}`;

      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully !");
            history.push(redirect_uri);
          }
        });
    }
  };

  return (
    <Col>
      <Card className="shadow-lg mb-5">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            src={detail?.order?.img}
            id="cardimg"
            className="img-fluid"
          />
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Text className="text-light-green fw-semi-bold">
              {detail?.order?.duration}
            </Card.Text>
            <h4 className="text-light-green fw-bolder">${detail?.order?.price}</h4>
          </div>

          <Card.Title className="abril-font">{`${detail?.order?.location?.city}, ${detail?.order?.location?.country}`}</Card.Title>
          <p className="text-cyan">we provide: {detail?.order?.services.join(", ")}</p>
          <span className="text-danger fw-bolder"> <span className="text-cyan fw-semi-bolder">Order Status : </span> {detail?.status}</span>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
            <Button onClick={() => handleDeletePack(detail?._id)} className="btn-danger text-white  py-2 px-3">Cancel Order</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SinglepackageCard;
