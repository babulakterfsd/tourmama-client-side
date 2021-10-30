import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ManageOrderCard from "./ManageOrderCard/ManageOrderCard";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allorder")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  useEffect(() => {
    document.title = "All Orders | TourMama";
  }, []);

  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row>
        <div className="col-12 col-md-8 mx-auto">
          <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">
            Manage All Orders
          </h3>
          <h5 className="text-cyan text-center mb-3">
            Total {allOrders.length} package Orderd{" "}
          </h5>
        </div>
      </Row>
      <Row xs={1} md={2} lg={3} className="my-5">
        {allOrders.map((detail) => (
          <ManageOrderCard key={detail._id} detail={detail}></ManageOrderCard>
        ))}
      </Row>
    </Container>
  );
};

export default ManageOrders;
