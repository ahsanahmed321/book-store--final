import React from 'react';
import Classes from '../Image/Image.module.css'

const Image = (props) =>
(

<div className = {Classes.Image_Holder}>

<img className = {Classes.Image} src={props.s} alt = ""></img>

</div>

)

export default Image