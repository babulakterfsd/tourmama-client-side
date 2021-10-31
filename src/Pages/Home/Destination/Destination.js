import React from "react";
import { Container, Form, FormSelect, Row, Button } from "react-bootstrap";

const Destination = () => {
  return (
    <Container fluid className=" py-5 px-3 p-md-5 mt-5">
      <Form className="shadow-lg p-5 mt-5">
        <Row className="g-0 g-md-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="text-container d-flex justify-content-center fw-bold text-muted">
              <i className="fas fa-calendar-alt mt-1 me-2"></i>
              <p>CHECK-IN</p>
            </div>
            <input
              type="date"
              className="form-control px-md-5 shadow-none  mb-5 mb-md-0"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="text-container d-flex justify-content-center fw-bold text-muted">
              <i className="fas fa-calendar-alt mt-1 me-2"></i>
              <p>CHECK-OUT</p>
            </div>
            <input
              type="date"
              className="form-control px-md-5 shadow-none mb-5 mb-md-0"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="row">
              <div className="col-12 col-md-6 mb-5 mb-md-0">
                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                  <i className="fas fa-user-friends mt-1 me-2"></i>
                  <p>Guest</p>
                </div>
                <FormSelect className="shadow-none">
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                </FormSelect>
              </div>
              <div className="col-12 col-md-6 mb-5 mb-md-0">
                <div className="text-container d-flex justify-content-center fw-bold text-muted">
                  <i className="fas fa-child mt-1 me-2"></i>
                  <p>Childs</p>
                </div>
                <FormSelect className="shadow-none">
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                </FormSelect>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center">
            <Button
              onClick={(e) => e.preventDefault()}
              type="submit"
              className="py-3 px-5 btn-light-green shadow-none"
            >
              Check <br /> Availability
            </Button>
          </div>
        </Row>
      </Form>
    </Container>
  );
};

export default Destination;
