import React from "react";
import { NavLink } from "react-router-dom";
import dialog from "./../dialog.module.css";


 

const Messedge =(props) =>{
  return(

<div className={dialog.text_2}>{props.messedges}</div>
  )
}


export default Messedge;
