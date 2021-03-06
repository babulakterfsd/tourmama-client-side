import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import "./ManageOrderCard.css";

const SinglepackageCard = ({ detail }) => {

  //delete a package
  const handleDeletePack = (id) => {
    const proceed = window.confirm("Are you sure to delete the user?");
    if (proceed) {
      const url = `https://radiant-shore-89532.herokuapp.com/allorder/${id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully !");
          }
        });
    }
  };

  const handleUpdate = (id) => {
    const url = `https://radiant-shore-89532.herokuapp.com/allorder/${id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detail),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Order Approved !");
        }
      });
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
            <h4 className="text-light-green fw-bolder">
              ${detail?.order?.price}
            </h4>
          </div>

          <Card.Title className="abril-font">{`${detail?.order?.location?.city}, ${detail?.order?.location?.country}`}</Card.Title>
          <p className="text-cyan">
            we provide: {detail?.order?.services.join(", ")}
          </p>

        {
          detail?.status === 'approved' ? (<h6 className="text-light-green fw-bolder">
          {" "}
          <span className="text-cyan fw-semi-bolder">
            Order Status:{" "}
          </span>{" "}
          {detail?.status}
        </h6>) : (<h6 className="text-danger fw-bolder">
            {" "}
            <span className="text-cyan fw-semi-bolder">
              Order Status:{" "}
            </span>{" "}
            {detail?.status}
          </h6>) 
        }
          
        </Card.Body>
        <Card.Footer>
          <div className="client-info p-2">
            <h6 className="text-cyan">
              {" "}
              <span className="fw-semi-bold">Client Name: </span> {detail?.name}
            </h6>
            <h6 className="text-cyan">
              {" "}
              <span className=" fw-semi-bold">Clients Email: </span>{" "}
              {detail?.email}
            </h6>
            <h6 className="text-cyan">
              {" "}
              <span className=" fw-semi-bold">Clients Phone: </span>{" "}
              {detail?.phone}
            </h6>
            <h6 className="text-cyan">
              {" "}
              <span className=" fw-semi-bold">Clients Address: </span>{" "}
              {detail?.address}
            </h6>
          </div>
        </Card.Footer>
        <Card.Footer className="d-flex justify-content-between">
          <Button
            onClick={() => handleDeletePack(detail?._id)}
            className="btn-danger shadow-none text-white  py-2 px-3"
          >
            Cancel Order
          </Button>
          <Button
            onClick={() => handleUpdate(detail?._id)}
            className="btn-light-green shadow-none py-2 px-3"
          >
            Approve Order
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SinglepackageCard;
