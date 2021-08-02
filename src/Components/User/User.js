import React from "react";
import "./User.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
const User = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.transitionDate = startDate;
    console.log(data);
  };

  return (
    <div>
      <h1>Hello, Mr.X</h1>
      <Container fluid>
        <Col className="">
          <img
            className="rounded-circle img-fluid user-img "
            src="https://yt3.ggpht.com/ytc/AKedOLTBLMf4tq8iRjYjbmOPzLlQbD31_D2E4AOSmFPGzw=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </Col>
        <Col>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xs={6} md={3} lg={2}>
                <h4>Date</h4>

                <DatePicker
                  className="w-100 px-5 form-control"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Col>
              <Col xs={6} md={3} lg={1}>
                <h4>Sender</h4>
                <Form.Control {...register("Sender", { required: true })} />
              </Col>
              <Col xs={6} md={3} lg={1}>
                <h4>Receiver</h4>
                <Form.Control {...register("Receiver", { required: true })} />
              </Col>
              <Col xs={6} md={3} lg={2}>
                <h4>Description</h4>
                <Form.Control
                  {...register("Description", { required: true })}
                />
              </Col>
              <Col xs={6} md={3} lg={2}>
                <h4>Payment Method</h4>
                <Form.Control
                  {...register("paymentMethod", { required: true })}
                />
              </Col>
              <Col xs={6} md={3} lg={1}>
                <h4>Amount</h4>
                <Form.Control {...register("Amount", { required: true })} />
              </Col>
              <Col xs={6} md={3} lg={1}>
                <h4>Remark</h4>
                <Form.Control {...register("Remark", { required: true })} />
              </Col>
              {errors.exampleRequired && <span>This field is required</span>}

              <Col xs={6} md={3} lg={2}>
                <Row className="mt-4 me-5">
                  <Col xs={12} md={12} lg={12}>
                    <Button size="lg" type="submit" variant="success">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Col>
      </Container>
    </div>
  );
};

export default User;
