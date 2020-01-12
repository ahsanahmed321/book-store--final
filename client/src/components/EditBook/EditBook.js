import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Row, Col } from "reactstrap";

const editBook = props => {
  var realValue;
  if (props.value) {
    realValue = props.value;
  } else {
    realValue = "";
  }
  return (
    <div>
      <Form style={{ color: "white" }}>
        <FormGroup>
          <Row>
            <Col sm="12" md="7">
              <Label>{props.subject}</Label>
              <Input
                onChange={props.changed}
                name={props.name}
                value={realValue}
              ></Input>
            </Col>
            <Col sm="12" md="5">
              <Label>Price</Label>
              <Input
                name={props.priceName}
                value={props.price}
                onChange={props.priceChanged}
              ></Input>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    </div>
  );
};

export default editBook;
