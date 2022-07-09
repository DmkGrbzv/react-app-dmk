import React from "react";
import classes from "./MyInput.module.css" 

const MyInput = React.forwardRef((props, ref)=>{
  return (
    <input {...props} ref = {ref} className={classes.myInpt} />
  )
})
export default MyInput;