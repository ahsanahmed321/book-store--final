import React, { Component } from "react";
import MySchoolBook from "../../components/mySchoolBook/mySchoolBook";
import { Link } from "react-router-dom";
import classes from "./tabBar.module.css";
import { connect } from "react-redux";
import { getMySchool } from "../../Store/actions/schoolActions";

class MySchool extends Component {
  componentDidMount() {
    this.props.getMySchool();
  }

  registerSchool = () => {
    this.props.history.push("/MySchool/editschool");
  };

  render() {
    console.log(this.props.school.my_school);
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
    var mySchool;
    if (this.props.school.my_school.noschool) {
      mySchool = (
        <div>
          <p style={{ color: "white" }}>
            You Dont Have a School Yet ... Create One
          </p>
          <button onClick={this.registerSchool}>Register School</button>
        </div>
      );
    } else {
      var p1 = "data:image/jpeg;base64,";
      var p2 = this.props.school.my_school.image;
      mySchool = (
        <div>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "white" }}>
              {this.props.school.my_school.schoolName}
            </h1>
          </div>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <img style={{ height: "20rem" }} src={p1 + p2} alt="school" />
          </div>
        </div>
      );
    }

    var booksDisplay;
    console.log(this.props.school.my_school.books);
    if (this.props.school.my_school.books) {
      this.props.school.my_school.books.sort((a, b) =>
        a.class > b.class ? 1 : -1
      );

      booksDisplay = this.props.school.my_school.books.map(book => {
        return (
          <MySchoolBook
            key={book.class}
            class={book.class}
            maths={book.maths}
            english={book.english}
            urdu={book.urdu}
            sindhi={book.sindhi}
            islamiat={book.islamiat}
            computer={book.computer}
            physics={book.physics}
            chemistry={book.chemistry}
            biology={book.biology}
            science={book.science}
          />
        );
      });
    }

    return (
      <div>
        {tabBar}
        {mySchool}
        {booksDisplay}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  school: state.school
});

export default connect(mapStateToProps, { getMySchool })(MySchool);
