import React from "react";
import { Component } from "react";
import School from "../../components/School/School";
import { Container, Row } from "reactstrap";
import { Spinner } from "reactstrap";
import { connect } from "react-redux";
import { getAllSchools } from "../../Store/actions/schoolActions";

class Schools extends Component {
  state = {
    tempOrder: [],
    getError: false
  };

  clickedOnSchoolHandler = abc => {
    this.props.history.push({ pathname: "Schools/" + abc });
  };

  componentDidMount() {
    this.props.getAllSchools();
  }

  render() {
    const SchoolsArray = Object.values(this.props.school.all_schools);

    var Schools;

    if (this.state.loading === true) {
      Schools = (
        <div
          style={{ width: "100%", paddingLeft: "10rem", paddingRight: "10rem" }}
        >
          <Spinner style={{ width: "25rem", height: "25rem" }} color="dark" />
        </div>
      );
    }

    if (this.state.getError === true) {
      Schools = <h1> Network Error </h1>;
    } else {
      if (SchoolsArray !== null) {
        console.log(SchoolsArray);
        Schools = SchoolsArray.map(result => {
          return (
            <School
              key={result.schoolName}
              schoolImage={result.image}
              schoolName={result.schoolName}
              clicked={() => this.clickedOnSchoolHandler(result.schoolName)}
            />
          );
        });
      }
    }

    return (
      <div>
        <Container>
          <Row>{Schools}</Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  school: state.school
});

export default connect(mapStateToProps, { getAllSchools })(Schools);
