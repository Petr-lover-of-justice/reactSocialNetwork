import React from "react";
import { NavLink } from "react-router-dom";
import dialog from "./dialog.module.css";


const Items = (props) =>{
  let pash = "/dialog/" + props.id;
  return(
  <div className={dialog.text +' '+dialog.active}>
  <NavLink to={pash}>{props.name}</NavLink>
  
</div>
  )
}

const Messedger =(props) =>{
  return(

<div className={dialog.text_2}>{props.messedgers}</div>
  )
}

const Dialog = () => {
  return (
     
    <div className={dialog.all}>

      <div className={dialog.dialog}>
      <Items name="Екатерина" id="1"/>
      <Items name="Ваня" id="2"/>
      <Items name="Игорь" id="3"/>
      <Items name="Анна" id="4"/>
      </div>
      <div className={dialog.messedger}>
        <Messedger messedgers="hi" />
        <div className={dialog.text_2}>Привет</div>
        <div className={dialog.text_2}>Пошел в попу</div>
        <div className={dialog.text_2}>Ты же первый написал </div>
      </div>
    </div>
  );
};

export default Dialog;
