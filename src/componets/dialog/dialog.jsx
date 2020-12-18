import React from "react";
import { NavLink } from "react-router-dom";
import dialog from "./dialog.module.css";
import Items from "./item/items";
import Messedge from './messedge/messege';


// const Items = (props) =>{
//   let pash = "/dialog/" + props.id;
//   return(
//   <div className={dialog.text +' '+dialog.active}>
//   <NavLink to={pash}>{props.name}</NavLink>
  
// </div>
//   )
// }
<div>
<Items />
<Messedge />
</div>
// const Messedge =(props) =>{
//   return(

// <div className={dialog.text_2}>{props.messedges}</div>
//   )
// }

const Dialog = () => {

  let DialogData = [
    {id: "1", name: "Екатерина"},
    {id: "2", name: "Игорь"},
    {id: "3", name: "Анна"},
    {id: "4", name: "Егор"},
  ]
  let dialogelement = DialogData
   .map (dialog => <Items name={dialog.name} id={dialog.id}/>)
  
  let messedgeData =
  [
    {id: "1", messedge: "Привет"},
    {id: "2", messedge: "Привет"},
    {id: "3", messedge: "Пошел в попу"},
    {id: "4", messedge: "Ты же первая написала."},
    
  ]
  // id={m.id}
  let messedgeelement = messedgeData
  .map (m => <Messedge messedges={m.messedge} />)
  return (
     
    <div className={dialog.all}>

      <div className={dialog.dialog}>
      {dialogelement}
      {/* <Items name={DialogData[0].name} id={DialogData[0] .id}/>
      <Items name={DialogData[1].name} id={DialogData[1] .id}/>
      <Items name={DialogData[2].name} id={DialogData[2] .id}/>
      <Items name={DialogData[3].name} id={DialogData[3] .id}/> */}
     
      </div>
      <div className={dialog.messedge}>
      {messedgeelement}
        {/* <Messedger messedgers={messedgerData[0].messedger} />
        <Messedger messedgers={messedgerData[1].messedger} />
        <Messedger messedgers={messedgerData[2].messedger} />
        <Messedger messedgers={messedgerData[3].messedger} /> */}
      </div>
    </div>
  );
};

export default Dialog;
