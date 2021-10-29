import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddOrders = () => {
  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const location = {
      city: data.city,
      country: data.country,
    };
    data.location = location;
    delete data.city;
    delete data.country;
    data.services = [
      "Hotel Room",
      "Food",
      "Tour Guide",
      "Travel Zeep",
      "Security",
    ];
    data.duration = "3 days / 4 nights";
    data.price = 4500;

    fetch('http://localhost:5000/addpackage', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
       .then(data => {
           if(data.insertedId) {
               alert('Package Added Successfully !')
           }
       })

    

    console.log(data);
  };

  return (
    <Container style={{minHeight: '100vh'}}>
      <Row>
        <div className="col-12 col-md-10 col-lg-8 mx-auto">
          <div className="form-container py-5">
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-lg px-2 px-md-5 py-3 text-cyan"
            >
              <h2 className="mb-4 text-center">
                Try to fill all the field to keep it consistent
              </h2>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    placeholder="Bogra"
                    required
                    className="text-secondary fw-semi-bold"
                    {...register("city", { required: true })}
                    {...(errors.city && <span>City is required</span>)}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    required
                    placeholder="Bangladesh"
                    className="text-secondary fw-semi-bold"
                    {...register("country", { required: true })}
                    {...(errors.country && <span>Country is required</span>)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} controlId="formGridImage">
                  <Form.Label>
                    Photo URL(sample: https://i.ibb.co/0ZDf89B/chittagong.jpg)
                  </Form.Label>
                  <Form.Control
                    className="text-secondary fw-semi-bold mb-5"
                    required
                    {...register("img")}
                    {...(errors.img && <span>PhotoURL is required</span>)}
                  />
                </Form.Group>
              </Row>
              <Button
                type="submit"
                className="px-3 py-2 fw-bold btn-light-green shadow-none"
              >
                <i className="fas fa-clipboard-check text-warning me-2"></i>
                Add Package
              </Button>
            </Form>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default AddOrders;
