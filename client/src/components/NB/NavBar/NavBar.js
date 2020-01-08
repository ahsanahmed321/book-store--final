import React from "react";
import { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import classes from "../NavBar/NavBar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import Aux from "../../../Hoc/Auxx/Auxx";
import BackDrop from "../../BackDrop/BackDrop";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { connect } from "react-redux";
import { logoutCurrentUser } from "../../../Store/actions/authActions";

class NavBar extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    var sidedrawer;

    if (this.state.showSideDrawer) {
      if (isAuthenticated) {
        // side Drawer when logged in
        sidedrawer = (
          <Aux>
            <BackDrop clicked={this.sideDrawerHandler} />
            <div className={classes.Drawer}>
              <div>
                <Button color="inherit">
                  <Link
                    onClick={this.sideDrawerHandler}
                    className={classes.DrawerItem}
                    to="/MySchool"
                  >
                    My School
                  </Link>
                </Button>
              </div>
              <div>
                <Button color="inherit">
                  <Link
                    onClick={this.sideDrawerHandler}
                    className={classes.DrawerItem}
                    to="/Schools"
                  >
                    Schools
                  </Link>
                </Button>
              </div>
              <div>
                <Button color="inherit">
                  <Link
                    onClick={this.sideDrawerHandler}
                    className={classes.DrawerItem}
                    to="/Cart"
                  >
                    Cart
                  </Link>
                </Button>
              </div>
              <div>
                <Button color="inherit">
                  <Link
                    onClick={this.sideDrawerHandler}
                    className={classes.DrawerItem}
                    to="/Auth/login"
                  >
                    Login/Signup
                  </Link>
                </Button>
              </div>
              <div>
                <Button color="inherit">
                  <Link
                    onClick={this.sideDrawerHandler}
                    className={classes.DrawerItem}
                    to="/AboutUs"
                  >
                    About Us
                  </Link>
                </Button>
              </div>
            </div>
          </Aux>
        );
      } else {
        // side drawer when logged out
        sidedrawer = (
          <Aux>
            <BackDrop clicked={this.sideDrawerHandler} />
            <div className={classes.Drawer}>
              <div>
                <Button color="inherit">
                  <Link
                    onClick={this.sideDrawerHandler}
                    className={classes.DrawerItem}
                    to="/Schools"
                  >
                    Schools
                  </Link>
                </Button>
              </div>
              <div>
                <Button color="inherit">
                  <Link
                    onClick={this.sideDrawerHandler}
                    className={classes.DrawerItem}
                    to="/Auth/login"
                  >
                    Login/Signup
                  </Link>
                </Button>
              </div>
              <div>
                <Button color="inherit">
                  <Link
                    onClick={this.sideDrawerHandler}
                    className={classes.DrawerItem}
                    to="/AboutUs"
                  >
                    About Us
                  </Link>
                </Button>
              </div>
            </div>
          </Aux>
        );
      }
    }

    return (
      <Aux>
        {isAuthenticated ? (
          <Aux>
            <Navbar className={classes.NavBar}>
              <NavbarBrand>
                <Link className={classes.NavBrand} to="/">
                  BookWorms.com
                </Link>
              </NavbarBrand>
              <Nav className={classes.NavItems}>
                <NavItem>
                  <Button>
                    <Link className={classes.NavItem} to="/MySchool">
                      My School
                    </Link>
                  </Button>
                </NavItem>
                <NavItem>
                  <Button>
                    <Link className={classes.NavItem} to="/Schools">
                      Schools
                    </Link>
                  </Button>
                </NavItem>
                <NavItem>
                  <Button>
                    <Link className={classes.NavItem} to="/Cart">
                      Cart
                    </Link>
                  </Button>
                </NavItem>
                <NavItem>
                  <Button>
                    <Link className={classes.NavItem} to="/Auth/login">
                      Login/Signup
                    </Link>
                  </Button>
                </NavItem>
                <NavItem>
                  <Button>
                    <Link className={classes.NavItem} to="/AboutUs">
                      About Us
                    </Link>
                  </Button>
                </NavItem>
              </Nav>
              <NavItem className={classes.NavMenu}>
                <Button>
                  <MenuIcon onClick={this.sideDrawerHandler} />
                </Button>
              </NavItem>
            </Navbar>
            {sidedrawer}
          </Aux>
        ) : (
          <Aux>
            <Navbar className={classes.NavBar}>
              <NavbarBrand>
                <Link className={classes.NavBrand} to="/">
                  BookWorms.com
                </Link>
              </NavbarBrand>
              <Nav className={classes.NavItems}>
                <NavItem>
                  <Button>
                    <Link className={classes.NavItem} to="/Schools">
                      Schools
                    </Link>
                  </Button>
                </NavItem>
                <NavItem>
                  <Button>
                    <Link className={classes.NavItem} to="/Auth/login">
                      Login/Signup
                    </Link>
                  </Button>
                </NavItem>
                <NavItem>
                  <Button>
                    <Link className={classes.NavItem} to="/AboutUs">
                      About Us
                    </Link>
                  </Button>
                </NavItem>
              </Nav>
              <NavItem className={classes.NavMenu}>
                <Button>
                  <MenuIcon onClick={this.sideDrawerHandler} />
                </Button>
              </NavItem>
            </Navbar>
            {sidedrawer}
          </Aux>
        )}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { logoutCurrentUser }
)(NavBar);
