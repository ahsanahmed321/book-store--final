import React from "react";
import { Component } from "react";
import Book from "../../components/Book/Book";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";
import { addToCart } from "../../Store/actions/orderActions";
import dCopy from "lodash";

class FullSchool extends Component {
  state = {
    schoolDetails: "",
    showModal: false,
    tempOrder: {
      school: this.props.match.params.schoolName,
      books: ""
    }
  };

  static getDerivedStateFromProps(props) {
    // console.log(props.order)
    return {};
  }

  addToCartModalHandler = a => {
    this.setState({
      tempOrder: { ...this.state.tempOrder, books: JSON.parse(a.target.id) },
      showModal: !this.state.showModal
    });
  };

  componentDidMount() {
    for (var i = 0; i < this.props.school.all_schools.length; i++) {
      if (
        this.props.school.all_schools[i].schoolName ===
        this.props.match.params.schoolName
      ) {
        this.setState({ schoolDetails: this.props.school.all_schools[i] });
        break;
      }
    }
  }

  render() {
    console.log(this.state.schoolDetails);
    var modal = (
      <Modal isOpen={this.state.showModal}>
        <ModalHeader>
          <p>Are you sure you want it to add this product to cart</p>
        </ModalHeader>

        <ModalBody></ModalBody>

        <ModalFooter>
          <Button
            color="success"
            onClick={() => {
              this.props.onAddToCartHandler(this.state.tempOrder);
              this.setState({ showModal: !this.state.showModal });
            }}
          >
            {" "}
            Add to cart{" "}
          </Button>
          <Button color="danger" onClick={this.addToCartModalHandler}>
            {" "}
            Cancel{" "}
          </Button>
        </ModalFooter>
      </Modal>
    );

    if (this.state.schoolDetails.books != null) {
      var books = dCopy.cloneDeep(this.state.schoolDetails.books);
    }

    if (books != null) {
      books.sort((a, b) => (a.class > b.class ? 1 : -1));

      var bookDetails = books.map(res => {
        return (
          <Book
            key={res.class}
            class={res.class}
            books={res}
            clicked={this.addToCartModalHandler}
          />
        );
      });
    }

    return (
      <div>
        <h1>{this.props.match.params.schoolName}</h1>
        {bookDetails}
        {modal}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.ord.order,
    school: state.school
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCartHandler: tempOrder => dispatch(addToCart(tempOrder))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullSchool);
