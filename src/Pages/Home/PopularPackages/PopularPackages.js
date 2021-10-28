import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SinglepackageCard from "../../AllPackages/SinglePackageCard/SinglepackageCard";

const PopularPackages = () => {
  const [packDetails, setPackDetails] = useState([]);

  useEffect(() => {
    fetch("/packages.json")
      .then((res) => res.json())
      .then((data) => setPackDetails(data));
  }, []);

  return (
    <section
      id="popular-packages"
      className="py-5 my-5"
      style={{ background: "#F5FBF9" }}
    >
      <Container>
        <Row>
          <h6 className="text-light-green text-center">Popular Packages</h6>
          <h2 className="text-center abril-font">Our Popular Packages</h2>
          <p className="text-center">
            Traveling fosters a medium to build human connections with one
            another by learning about culture, food, new sites, music, and the
            way people. Traveling fosters a medium to build human connections
            with one another by learning about culture, food, new sites, music,
            and the way people.
          </p>
        </Row>
        <Row xs={1} md={2} lg={3} className="mt-5">
          {packDetails.slice(0, 6).map((detail) => (
            <SinglepackageCard
              key={detail.id}
              detail={detail}
            ></SinglepackageCard>
          ))}
        </Row>
        <Row className="mb-5">
          <div className="text-center pt-1 pb-5">
            <Link to="/allpackages">
              <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                See All Packages
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PopularPackages;
