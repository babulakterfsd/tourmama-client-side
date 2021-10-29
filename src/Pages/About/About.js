import React, { useEffect } from "react";
import { Container, Row} from "react-bootstrap";


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
            <div className="col-12 col-md-6 col-lg-8 mx-auto">
              <img src="https://i.ibb.co/Bzqn3t8/influence.png" alt="aboutimg" className="img-fluid" />
            </div>
          </Row>
          <Row className="my-5">
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
    </>
  );
};

export default About;
