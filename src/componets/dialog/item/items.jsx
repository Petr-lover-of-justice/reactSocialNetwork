import React from "react";
import { NavLink } from "react-router-dom";
import dialog from "./../dialog.module.css";


const Items = (props) =>{
  let pash = "/dialog/" + props.id;
  return(
  <div className={dialog.text +' '+dialog.active}>
  <NavLink to={pash}>{props.name}</NavLink>
  
</div>
  )
}


export default Items;
