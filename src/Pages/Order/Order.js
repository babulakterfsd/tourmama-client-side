import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";

const Order = () => {
  const { user } = useAuth();
  const history = useHistory();
  const redirect_uri = "/myorders";

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = 'pending';
    console.log(data);
    history.push(redirect_uri)
  };

  return (
      <Container>
        <Row>
          <div className="col-12 col-md-10 col-lg-8 mx-auto">
            <div className="form-container py-5">
              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow-lg px-2 px-md-5 py-3 text-cyan"
              >
                <h2 className="mb-4 text-center">
                  Choose A Package, We Store and Process Your Order!
                </h2>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      value={user?.displayName}
                      className="text-secondary fw-semi-bold"
                      readOnly
                      {...register("name", { required: true })}
                      {...(errors.name && <span>Name is required</span>)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={user?.email}
                      className="text-secondary fw-semi-bold"
                      readOnly
                      {...register("email", { required: true })}
                      {...(errors.email && <span>Email is required</span>)}
                    />
                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="+8801740020464"
                      className="text-secondary fw-semi-bold mb-5"
                      required
                      {...register("phone")}
                      {...(errors.phone && <span>Phone is required</span>)}
                    />
                  </Form.Group>
                </Row>
                  <Button
                    type="submit"
                    className="px-3 py-2 fw-bold btn-light-green shadow-none"
                  >
                    <i className="fas fa-clipboard-check text-warning me-2"></i>
                    Confirm Order
                  </Button>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
  );
};

export default Order;
