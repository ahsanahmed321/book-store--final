import React from "react";
import classes from "./BookSwitch.module.css";
import { CustomInput } from "reactstrap";

const bookSwitch = props => {
  return (
    <CustomInput
      className={classes.display}
      type="switch"
      id={props.id}
      name={props.name}
      label={props.label}
      onClick={props.clicked}
      readOnly
      checked={props.dc}
    />
  );
};

export default bookSwitch;
