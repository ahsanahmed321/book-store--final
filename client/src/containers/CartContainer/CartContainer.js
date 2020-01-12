import React from "react";
import Order from "../../components/Order/Order";
import { Component } from "react";
import { connect } from "react-redux";
//import { Row } from "reactstrap";
import { Button } from "reactstrap";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Axios from "axios";
import cartImage from "../../Images/cart.png";
import { deleteFromCart } from "../../Store/actions/orderActions";
import StripeCheckout from "react-stripe-checkout";
import classes from "./CartContainer.module.css";
class CartContainer extends Component {
  state = {
    confirmCheckout: false,

    product: {
      name: "car",
      price: 200
    },

    name: "",
    email: "",
    contact: "",
    address: "",
    P_method: ""
  };

  confirmCheckoutHandler = () => {
    this.setState({ confirmCheckout: !this.state.confirmCheckout });
  };

  confirmOrderHandler = () => {
    const order = {
      product: this.props.ord,

      contact: {
        Name: this.state.name,
        Email: this.state.email,
        Contact: this.state.contact,
        Address: this.state.address,
        Pay_method: this.state.P_method
      }
    };

    Axios.post("https://user-ad4d2.firebaseio.com/.json", order);

    this.setState({ confirmCheckout: !this.state.confirmCheckout });
  };

  nameChange = event => {
    this.setState({ name: event.target.value });
  };

  emailChange = event => {
    this.setState({ email: event.target.value });
  };

  contactChange = event => {
    this.setState({ contact: event.target.value });
  };

  addressChange = event => {
    this.setState({ address: event.target.value });
  };

  pmethodChange = event => {
    this.setState({ P_method: event.target.value });
  };

  onToken = token => {
    var product = this.state.product;
    Axios.post("/api/payments/card", { token, product });
    console.log(token);
  };

  render() {
    console.log(this.props.ord);
    var Display;

    if (this.props.ord) {
      Display = this.props.ord.order.map((o, index) => {
        return (
          <Order
            key={index}
            books={o.books}
            school={o.school}
            clicked={() => this.props.deleteClickedHandler(index)}
          />
        );
      });
    }

    var modalBody;
    //= this.props.ord.map (ord =>
    //
    //    {
    //     return <div key = {ord.id}>
    //         <p>{ord.description}</p>
    //         <p>{ord.price}</p>
    //     </div>
    //
    //    });

    var pMethod;

    if (this.state.P_method === "Credit Card") {
      pMethod = (
        <div>
          <StripeCheckout
            stripeKey="pk_test_ToYPLCVJTDoOWvCuRHoUQ79v00uI5AVGff"
            billingAddress
            shippingAddress
            amount={100}
            token={this.onToken}
          />
        </div>
      );
    } else {
      pMethod = (
        <Button color="success" onClick={this.confirmOrderHandler}>
          Confirm
        </Button>
      );
    }

    var modal = (
      <Modal isOpen={this.state.confirmCheckout}>
        <ModalHeader>
          <p>Fill the Information below To proceede</p>
        </ModalHeader>

        <ModalBody>
          {modalBody}
          <Form>
            <FormGroup>
              <Label for="FullName">Name</Label>
              <Input
                type="text"
                onChange={this.nameChange}
                id="name"
                name="name"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input
                type="email"
                onChange={this.emailChange}
                id="email"
                name="email"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="Contact">Contact</Label>
              <Input
                type="tel"
                onChange={this.contactChange}
                id="contact"
                name="contact"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="Address">Address</Label>
              <Input
                type="text"
                onChange={this.addressChange}
                id="address"
                name="address"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Select Payment Method</Label>
              <Input
                type="select"
                onChange={this.pmethodChange}
                id="Pmethod"
                name="Pmethod"
              >
                <option>Cash on Delivery</option>
                <option>Credit Card</option>
              </Input>
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          {pMethod}
          <Button color="danger" onClick={this.confirmCheckoutHandler}>
            {" "}
            Cancel{" "}
          </Button>
        </ModalFooter>
      </Modal>
    );

    var checkoutButton = "";
    console.log(Display);

    checkoutButton = (
      <div>
        <div className={classes.imageContainerSetup}>
          <img className={classes.imageSetup} src={cartImage} alt="hi" />
        </div>
        <div style={{ textAlign: "center" }}>
          <h4 style={{ color: "white" }}>Add to Cart First !!</h4>
        </div>
      </div>
    );

    if (Display.length) {
      if (Display.length !== 0) {
        checkoutButton = (
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <Button
              style={{}}
              color="success"
              onClick={this.confirmCheckoutHandler}
            >
              Checkout
            </Button>
          </div>
        );
      }
    }

    return (
      <div>
        {Display}
        {modal}
        {checkoutButton}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ord: state.ord
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteClickedHandler: ind => dispatch(deleteFromCart(ind))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
