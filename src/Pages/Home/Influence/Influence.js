import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import InfluenceImg from "../../../Assets/Images/influenceOverlay.png";

const Influence = () => {
    return (
        <section className="py-5 mt-5">
        <Container>
          <Row>
            <div className="col-12 col-md-8">
              <img src={InfluenceImg} alt="about in home" className="img-fluid" />
            </div>
            <div
              className="col-12 col-md-4 d-flex flex-wrap align-items-center"
              style={{ minHeight: "100%" }}
            >
              <div>
                {/* <h6 className="text-light-green mb-3">About Us</h6> */}
                <h2 className="abril-font mb-3 display-1">
                  Lets Go Travel with Us
                </h2>
                <p className="text-secondary mb-3">
                  Donec dapibus mauris id odio ornare tempus. Duis sit amet
                  accumsan justo, quis tempor ligula. Quisque quis pharetra
                  felis. Ut quis consequat orci, at consequat felis. Suspendisse
                  auctor laoreet placerat. Nam et risus non lacus dignissim
                  lacinia sit amet nec eros. Nulla vel urna quis libero pharetra
                  varius. Nulla tellus nunc.
                </p>
                <Button className="btn-light-green p-3 fw-bold d-block d-lg-inline mx-auto  ">
                  See Our Packages
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    );
};

export default Influence;