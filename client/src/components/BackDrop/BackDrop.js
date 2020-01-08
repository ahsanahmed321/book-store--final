import React from 'react'
import classes from '../BackDrop/BackDrop.module.css'

const backDrop = (props) => {

return(

<div onClick={props.clicked} className={classes.BackDrop}>

</div>

)

}

export default backDrop