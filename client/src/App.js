import React from "react";
import { Component } from "react";
import "./App.css";
import Home from "./containers/Home/Home";
import Schools from "./containers/Schools/Schools";
import FullSchool from "./containers/FullSchool/FullSchool";
import CartContainer from "./containers/CartContainer/CartContainer";
import MySchool from "./containers/MySchool/MySchool";
import EditSchool from "./containers/MySchool/EditSchool/EditSchool";
import EditCourse from "./containers/MySchool/EditCourse/EditCourse";
import Login from "./containers/auth/Login/Login";
import Register from "./containers/auth/Register/Register";
import AboutUs from "./containers/AboutUs/AboutUs";
import Layout from "./Hoc/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Particles from "./components/Particles/Particles";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUSer } from "./Store/actions/authActions";
import store from "./Store/store";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decode = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUSer(decode));
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Particles />
          <Route exact path="/" component={Home} />
          <Route exact path="/Schools" component={Schools} />
          <Route exact path="/Cart" component={CartContainer} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Auth/login" component={Login} />
          <Route exact path="/Auth/register" component={Register} />
          <Route exact path="/MySchool" component={MySchool} />
          <Route exact path="/MySchool/editschool" component={EditSchool} />
          <Route exact path="/MySchool/editcourse" component={EditCourse} />
          <Route exact path="/Schools/:schoolName" component={FullSchool} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
