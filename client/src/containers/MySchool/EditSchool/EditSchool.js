import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";
import { Link } from "react-router-dom";
import Aux from "../../../Hoc/Auxx/Auxx";
import classes from "../tabBar.module.css";
import { connect } from "react-redux";

class EditSchool extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image: "",
      errors: {}
    };

    this.onImageChange = this.onImageChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ name: this.props.school.my_school.schoolName });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  directToLoginHandler = () => {
    this.props.history.push("/Auth/login");
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onImageChange(e) {
    this.setState({ image: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();

    var bodyFormData = new FormData();

    bodyFormData.set("schoolName", this.state.name);
    bodyFormData.append("image", this.state.image);

    axios({
      method: "post",
      url: "/api/schools/editschool",
      data: bodyFormData,
      headers: { "Content-type": "multipart/form-data" }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props.school.my_school.schoolName);
    console.log(this.state);
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

    const { errors } = this.state;

    return (
      <Aux>
        {tabBar}
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1
                  className="display-4 text-center"
                  style={{ color: "white" }}
                >
                  Register Your School
                </h1>
                <form
                  noValidate
                  onSubmit={this.onSubmit}
                  encType="multipart/form-data"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.name
                      })}
                      placeholder="School Name"
                      name="name"
                      defaultValue={this.props.school.my_school.schoolName}
                      onChange={this.onChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <input
                    type="file"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.image
                    })}
                    placeholder="Image Name"
                    name="image"
                    defaultValue={""}
                    onChange={this.onImageChange}
                  />
                  <div></div>
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  school: state.school
});

export default connect(mapStateToProps, null)(EditSchool);
