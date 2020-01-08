import React from "react";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { Col } from "reactstrap";

const school = props => {
  var p1 = "data:image/jpeg;base64,";
  var p2 = props.schoolImage;

  return (
    <Col xs="12" sm="6" md="4">
      <Card onClick={props.clicked} style={{ marginTop: "64px" }}>
        <CardImg style={{ height: "12rem" }} src={p1 + p2} alt="Card Image" />
        <CardBody>
          <CardTitle>{props.schoolName}</CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};

export default school;
