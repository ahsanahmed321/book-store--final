import React from "react";
import { Component } from "react";
import { FormGroup, Form, Label, Input } from "reactstrap";
import EditBook from "../../../components/EditBook/EditBook";
import BookSwitch from "../../../components/EditBook/BookSwitch";
import Aux from "../../../Hoc/Auxx/Auxx";
import axios from "axios";
import { Link } from "react-router-dom";
import classes from "../tabBar.module.css";
import { connect } from "react-redux";

class EditCourse extends Component {
  state = {
    switches: {
      mathsSwitch: false,
      englishSwitch: false,
      urduSwitch: false,
      sindhiSwitch: false,
      islamiatSwitch: false,
      computerSwitch: false,
      physicsSwitch: false,
      chemistrySwitch: false,
      biologySwitch: false,
      scienceSwitch: false
    },
    books: {
      class: "",
      maths: "",
      english: "",
      urdu: "",
      sindhi: "",
      islamiat: "",
      computer: "",
      physics: "",
      chemistry: "",
      biology: "",
      science: ""
    }
  };

  classSelected = e => {
    //Getting Previously editted course
    var bb = [];
    if (this.props.school.my_school.books.length !== 0) {
      console.log("hi");
      console.log(this.props.school.my_school);
      this.props.school.my_school.books.map(book => {
        return bb.push(book.class);
      });
      console.log(bb);
      for (var i = 0; i < bb.length; i++) {
        if (e.target.value === bb[i]) {
          delete this.props.school.my_school.books[i]._id;
          this.setState({ books: this.props.school.my_school.books[i] });
          this.setState(prevState => ({
            switches: {
              mathsSwitch: false,
              englishSwitch: false,
              urduSwitch: false,
              sindhiSwitch: false,
              islamiatSwitch: false,
              computerSwitch: false,
              physicsSwitch: false,
              chemistrySwitch: false,
              biologySwitch: false,
              scienceSwitch: false
            }
          }));
          // delete this.props.school.my_school.books[i].class;
          Object.keys(this.props.school.my_school.books[i]).map(boo => {
            var switchName = boo + "Switch";
            return this.setState(prevState => ({
              switches: {
                ...prevState.switches,
                [switchName]: true
              }
            }));
          });

          break;
        }
        if (i === bb.length - 1) {
          this.setState(prevState => ({
            switches: {
              mathsSwitch: false,
              englishSwitch: false,
              urduSwitch: false,
              sindhiSwitch: false,
              islamiatSwitch: false,
              computerSwitch: false,
              physicsSwitch: false,
              chemistrySwitch: false,
              biologySwitch: false,
              scienceSwitch: false
            }
          }));

          this.setState({
            books: {
              class: e.target.value
            }
          });
        }
      }
    } else {
      this.setState({
        books: {
          class: e.target.value
        }
      });
    }
  };

  switchHandler = e => {
    if (this.state.books[e.target.id]) {
      this.setState({
        books: {
          ...this.state.books,
          [e.target.id]: ""
        }
      });
    }

    if (e.target.value === "on" && this.state.switches[e.target.name] === "") {
      this.setState({
        switches: {
          ...this.state.switches,
          [e.target.name]: true
        }
      });
    }
    if (this.state.switches[e.target.name] === true) {
      this.setState({
        switches: {
          ...this.state.switches,
          [e.target.name]: false
        }
      });
    }
    if (this.state.switches[e.target.name] === false) {
      this.setState({
        switches: {
          ...this.state.switches,
          [e.target.name]: true
        }
      });
    }
  };

  onChangeBooksHandler = e => {
    e.persist();

    this.setState(prevState => ({
      books: {
        ...prevState.books,
        [e.target.name]: e.target.value
      }
    }));
  };

  sumbitHandler = () => {
    const newClass = {
      class: this.state.books.class,
      maths: this.state.books.maths,
      english: this.state.books.english,
      urdu: this.state.books.urdu,
      sindhi: this.state.books.sindhi,
      islamiat: this.state.books.islamiat,
      computer: this.state.books.computer,
      physics: this.state.books.physics,
      chemistry: this.state.books.chemistry,
      biology: this.state.books.biology,
      science: this.state.books.science
    };

    axios
      .post("/api/schools/editcourse", newClass)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    var tabBar = (
      <div className={classes.tab}>
        <Link className={classes.tabItem} to="/MySchool">
          My School
        </Link>
        <Link className={classes.tabItem} to="/MySchool/editschool">
          Edit School
        </Link>
        <Link className={classes.tabItem} to="/MySchool/editcourse">
          Edit Course
        </Link>
      </div>
    );
    console.log(this.state);

    // Class selection Form
    var classSelection = (
      <div style={{ marginTop: "2rem", color: "white" }}>
        <Form>
          <FormGroup>
            <Label>Select Class</Label>
            <Input onChange={this.classSelected} type="select" bsSize="lg">
              <option>None</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
            </Input>
          </FormGroup>
        </Form>
      </div>
    );

    // Course Creation Form

    var switches;
    if (this.state.books.class !== "None" && this.state.books.class !== "") {
      switches = (
        <div>
          <BookSwitch
            id="maths"
            name="mathsSwitch"
            label="Maths"
            clicked={this.switchHandler}
            dc={this.state.switches.mathsSwitch}
          />
          <BookSwitch
            id="english"
            name="englishSwitch"
            label="English"
            clicked={this.switchHandler}
            dc={this.state.switches.englishSwitch}
          />
          <BookSwitch
            id="urdu"
            name="urduSwitch"
            label="Urdu"
            clicked={this.switchHandler}
            dc={this.state.switches.urduSwitch}
          />
          <BookSwitch
            id="sindhi"
            name="sindhiSwitch"
            label="Sindhi"
            clicked={this.switchHandler}
            dc={this.state.switches.sindhiSwitch}
          />
          <BookSwitch
            id="islamiat"
            name="islamiatSwitch"
            label="Islamait"
            clicked={this.switchHandler}
            dc={this.state.switches.islamiatSwitch}
          />
          <BookSwitch
            id="computer"
            name="computerSwitch"
            label="Computer"
            clicked={this.switchHandler}
            dc={this.state.switches.computerSwitch}
          />
          <BookSwitch
            id="physics"
            name="physicsSwitch"
            label="Physics"
            clicked={this.switchHandler}
            dc={this.state.switches.physicsSwitch}
          />
          <BookSwitch
            id="chemistry"
            name="chemistrySwitch"
            label="Chemistry"
            clicked={this.switchHandler}
            dc={this.state.switches.chemistrySwitch}
          />
          <BookSwitch
            id="biology"
            name="biologySwitch"
            label="Biology"
            clicked={this.switchHandler}
            dc={this.state.switches.biologySwitch}
          />
          <BookSwitch
            id="science"
            name="scienceSwitch"
            label="Science"
            clicked={this.switchHandler}
            dc={this.state.switches.scienceSwitch}
          />
        </div>
      );

      var courseCreation = (
        <div>
          {this.state.switches.mathsSwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="maths"
              subject="Maths"
              value={this.state.books.maths}
            />
          ) : null}
          {this.state.switches.englishSwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="english"
              subject="English"
              value={this.state.books.english}
            />
          ) : null}
          {this.state.switches.urduSwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="urdu"
              subject="Urdu"
              value={this.state.books.urdu}
            />
          ) : null}
          {this.state.switches.sindhiSwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="sindhi"
              subject="Sindhi"
              value={this.state.books.sindhi}
            />
          ) : null}
          {this.state.switches.islamiatSwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="islamiat"
              subject="Islamiat"
              value={this.state.books.islamiat}
            />
          ) : null}
          {this.state.switches.computerSwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="computer"
              subject="Computer"
              value={this.state.books.computer}
            />
          ) : null}
          {this.state.switches.physicsSwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="physics"
              subject="Physics"
              value={this.state.books.physics}
            />
          ) : null}
          {this.state.switches.chemistrySwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="chemistry"
              subject="Chemistry"
              value={this.state.books.chemistry}
            />
          ) : null}
          {this.state.switches.biologySwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="biology"
              subject="Biology"
              value={this.state.books.biology}
            />
          ) : null}
          {this.state.switches.scienceSwitch ? (
            <EditBook
              changed={this.onChangeBooksHandler}
              name="science"
              subject="Science"
              value={this.state.books.science}
            />
          ) : null}
        </div>
      );
    }

    return (
      <Aux>
        {tabBar}
        {classSelection}
        {switches}
        {courseCreation}
        <button
          style={{ justifyContent: "centre" }}
          onClick={this.sumbitHandler}
        >
          Sumbit
        </button>
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  school: state.school
});

export default connect(mapStateToProps, null)(EditCourse);
