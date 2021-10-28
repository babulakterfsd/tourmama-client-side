import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import SinglepackageCard from "./SinglePackageCard/SinglepackageCard";

const AllPackages = () => {
  const [packDetails, setPackDetails] = useState([]);

  useEffect(() => {
    fetch('/packages.json')
     .then(res => res.json())
      .then(data => setPackDetails(data))
  }, [])

  useEffect(() => {
    document.title = "All Packages | TourMama"
  },[])

  return (
    <>
      <section
        id="allpackages"
        className="pt-5 pb-1"
        style={{ background: "#F5FBF9" }}
      >
        <Container>
          <Row>
            <div className="col-12 col-md-8 mx-auto">
              <h6 className="text-light-green text-center">All Packages</h6>
              <h2 className="text-center abril-font">Our All Packages</h2>
              <p className="text-center">
                Traveling fosters a medium to build human connections with one
                another by learning about culture, food, new sites, music, and
                the way people. Music, and the way people.
              </p>
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
      </section>
    </>
  );
};

export default AllPackages;
