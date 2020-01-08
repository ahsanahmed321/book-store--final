import React from "react";
import classes from "./mySchoolBook.module.css";

const mySchoolBook = props => {
  var maths = props.maths ? <p>Maths: {props.maths}</p> : null;
  var english = props.english ? <p>English: {props.english} </p> : null;
  var urdu = props.urdu ? <p>Urdu: {props.urdu}</p> : null;
  var sindhi = props.sindhi ? <p>Sindhi: {props.sindhi} </p> : null;
  var islamiat = props.islamiat ? <p>Islamiat: {props.islamiat} </p> : null;
  var computer = props.computer ? <p>Computer: {props.computer} </p> : null;
  var physics = props.physics ? <p>Physics: {props.physics} </p> : null;
  var chemistry = props.chemistry ? <p>Chemistry: {props.chemistry} </p> : null;
  var biology = props.biology ? <p>Biology: {props.biology} </p> : null;
  var science = props.science ? <p> Science : {props.science} </p> : null;

  return (
    <div className={classes.classContainer}>
      <h3>{props.class}</h3>
      {maths}
      {english}
      {urdu}
      {sindhi}
      {islamiat}
      {computer}
      {physics}
      {chemistry}
      {biology}
      {science}
    </div>
  );
};

export default mySchoolBook;
