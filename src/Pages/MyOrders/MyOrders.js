import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SinglepackageCard from "../AllPackages/SinglePackageCard/SinglepackageCard";

const MyOrders = () => {
  const [packDetails, setPackDetails] = useState([]);

  useEffect(() => {
    fetch("/packages.json")
      .then((res) => res.json())
      .then((data) => setPackDetails(data));
  }, []);

  useEffect(() => {
    document.title = "All Packages | TourMama";
  }, []);

  return (
    <Container style={{minHeight: '100vh'}}>
      <Row>
        <div className="col-12 col-md-8 mx-auto">
          <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">My Orders List</h3>
        </div>
      </Row>
      <Row xs={1} md={2} lg={3} className="my-5">
        {packDetails.map((detail) => (
          <SinglepackageCard
            key={detail.id}
            detail={detail}
          ></SinglepackageCard>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrders;
