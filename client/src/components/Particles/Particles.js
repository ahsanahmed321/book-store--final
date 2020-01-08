import React from 'react'
import {Component} from 'react'
import Particles from "react-particles-js";
import classes from '../Particles/Particles.module.css'
const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};
class Partic extends Component {
  render() {
    return <Particles className={classes.particles} params={particlesOptions} />;
  }
}

export default Partic;