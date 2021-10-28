import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner mb-5">
      <Container>
        <Row>
          <div className="col-12">
            <div
              className="px-lg-5 d-flex align-items-center justify-content-between"
              style={{ minHeight: "100vh" }}
            >
              <div>
                <h1 className="text-white display-1 fw-bolder px-2">
                  Explore The World With TourMama.
                </h1>
                <p className="text-white px-2 ">
                  Traveling fosters a medium to build human connections with one
                  another by learning about culture, food, new sites, music, and
                  the way people. Traveling fosters a medium to build human
                  connections with one another by learning about culture, food,
                  new sites, music, and the way people.
                </p>
                <Link to="/allpackages">
                  <Button className="btn-light-green p-3 ms-3 ms-lg-0 text-white fw-bold">
                    See Our Packages
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
