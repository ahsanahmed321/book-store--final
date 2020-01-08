import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";
import { Col, Row } from "reactstrap";
import classes from "./Order.module.css";
const Order = props => {
  var books = Object.values(props.books.books);

  var booksDisplay = books.map(result => {
    return <p key={result}>{result}</p>;
  });

  return (
    <Row>
      <Col xs="6" md="4">
        <Card className={classes.backGreenBoard}>
          <CardHeader>
            <p>{props.school}</p>
          </CardHeader>

          <CardBody>
            <h6>{props.books.class}</h6>
            {booksDisplay}
          </CardBody>

          <CardFooter>
            <IconButton edge="start" color="inherit" aria-label="delete">
              <DeleteIcon onClick={props.clicked} />
            </IconButton>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  );
};

export default Order;
