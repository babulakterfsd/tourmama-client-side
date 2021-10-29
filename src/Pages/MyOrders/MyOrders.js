import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SinglepackageCard from "../AllPackages/SinglePackageCard/SinglepackageCard";
import useAuth from '../../Assets/hooks/useAuth'

const MyOrders = () => {
  const {user} = useAuth();
  
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myorders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  

  useEffect(() => {
    document.title = "My Orders | TourMama";
  }, []);

  return (
    <Container style={{minHeight: '100vh'}}>
      <Row>
        <div className="col-12 col-md-8 mx-auto">
          <h3 className="text-light-green text-center mt-5 mb-3 text-decoration-underline">My Orders List</h3>
        </div>
      </Row>
      <Row xs={1} md={2} lg={3} className="my-5">
        {myOrders.map((detail) => (
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
