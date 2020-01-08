import React from "react";
import { Component } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import { Form, Button } from "react-bootstrap";
import classes from "./AboutUs.module.css";
import { Container, Row, Col } from "react-bootstrap";

class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className={classes.fontSet}>
                  Email address
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicText">
                <Form.Label className={classes.fontSet}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Message here ..."
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 0, offset: 2 }} md={4}>
            <EmailIcon style={{ color: "white" }} />
            <p>bookworms.info@gmail.com</p>
          </Col>
          <Col xs={{ span: 0, offset: 2 }} md={4}>
            <FacebookIcon style={{ color: "white" }} />
            <p>BookWorms/Facebook.com</p>
          </Col>
          <Col xs={{ span: 0, offset: 2 }} md={4}>
            <LinkedInIcon style={{ color: "white" }} />
            <p>BookWorms/LinkedIn.com</p>
          </Col>
          <Col xs={{ span: 0, offset: 2 }} md={4}>
            <WhatsAppIcon style={{ color: "white" }} />
            <p>0312-00234334</p>
          </Col>
          <Col xs={{ span: 0, offset: 2 }} md={4}>
            <CallIcon style={{ color: "white" }} />
            <p>021-1234124/24311514</p>
          </Col>
          <Col xs={{ span: 0, offset: 2 }} md={4}>
            <TwitterIcon style={{ color: "white" }} />
            <p>BookWorms/Twitter.com</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutUs;
