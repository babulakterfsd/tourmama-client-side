import React, { useEffect } from "react";
import { Card, Col, Container, Row} from "react-bootstrap";


const About = () => {
  useEffect(() => {
    document.title = "About Us | TourMama";
  }, []);
  return (
    <>
      <section id="about-us" className="py-5">
        <Container className="text-center">
          <Row>
            <h5 className="text-center display-4 mb-5">
              <span className="abril-font">
                <span style={{ color: "#00D690 " }}>WHY CHOOSE</span> TOURMAMA
              </span>
            </h5>
          </Row>
          <Row>
            <div className="col-12 col-md-8 mx-auto">
              <img src="https://i.ibb.co/HtffG6b/aboutusbanner.png" alt="aboutimg" className="img-fluid rounded" />
            </div>
          </Row>
          <Row className="my-5">
            <div className="col-12">
              
            </div>
            <div className="col-12 col-md-6 col-lg-3 py-3">
              <i className="fas fa-car-side text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Private Transport</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              />
              <p className="text-cyan mb-5 mb-lg-0">
                I have always made a living to make movies, never the other way
                around.I first I washed dishes in a seafoodI have always made a
                living to make movies
              </p>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-map-marker-alt text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Diverse Destinations</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              />
              <p className="text-cyan mb-5 mb-lg-0">
                I have always made a living to make movies, never the other way
                around.I first I washed dishes in a seafoodI have always made a
                living to make movies
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-hotel text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Great Hotels</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              />
              <p className="text-cyan mb-5 mb-lg-0">
                I have always made a living to make movies, never the other way
                around.I first I washed dishes in a seafoodI have always made a
                living to make movies
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <i className="fas fa-utensils text-light-green fa-2x"></i>
              <h4 className="abril-font mt-3 mb-1">Awesome Food</h4>
              <div
                className="w-25 mb-3 mx-auto"
                style={{ backgroundColor: "#3b5", height: "3px" }}
              />
              <p className="text-cyan">
                I have always made a living to make movies, never the other way
                around.I first I washed dishes in a seafoodI have always made a
                living to make movies
              </p>
            </div>
          </Row>
        </Container>
      </section>

      <section id="team" className="py-5 mt-lg-5">
        <Container>
          <Row>
            <h6 className="text-light-green text-center">Our Team</h6>
            <h2 className="text-center abril-font">Awesome Tour Guides</h2>
            <p className="text-center mb-3 mb-lg-5">
              Traveling fosters a medium to build human connections with one
              another by learning about culture, food, new sites, music, and the
              way people. Traveling fosters a medium to build human connections
              with one another by learning about culture, food, new sites,
              music, and the way people.
            </p>
          </Row>
        </Container>
        <Container>
          <Row xs={1} md={2} lg={4}>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src="https://i.ibb.co/dgfg3bk/guide1.png" />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Dia Martinez
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-google text-light-green me-4"></i>
                    <i className="fab fa-facebook text-light-green me-4"></i>
                    <i className="fab fa-twitter text-light-green me-4"></i>
                    <i className="fab fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src="https://i.ibb.co/tQDPwfj/guide2.png" />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Alexa Febrico
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-google text-light-green me-4"></i>
                    <i className="fab fa-facebook text-light-green me-4"></i>
                    <i className="fab fa-twitter text-light-green me-4"></i>
                    <i className="fab fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src="https://i.ibb.co/MRxwCTz/guide3.png" />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Jhon Daniel
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-google text-light-green me-4"></i>
                    <i className="fab fa-facebook text-light-green me-4"></i>
                    <i className="fab fa-twitter text-light-green me-4"></i>
                    <i className="fab fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5">
              <Card>
                <Card.Img variant="top" src="https://i.ibb.co/fv6G1NK/guide4.png" />
                <Card.Body>
                  <h5 className="text-center text-cyan fw-semi-bold">
                    Erica Xenifar
                  </h5>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    <i className="fab fa-google text-light-green me-4"></i>
                    <i className="fab fa-facebook text-light-green me-4"></i>
                    <i className="fab fa-twitter text-light-green me-4"></i>
                    <i className="fab fa-github text-light-green"></i>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
