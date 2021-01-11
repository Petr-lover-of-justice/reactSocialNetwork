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

const Dialog = (props) => {


  let dialogelement = props.DialogData.map (dialog => <Items name={dialog.name} id={dialog.id}/>)
  
  let messedgeelement = props.messedgeData
  .map (m => <Messedge messedges={m.messedge} />)
  let newMessageElement=React.createRef()
  let addMessage =()=>{
    let message = newMessageElement.current.value
    alert(message)
  }
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
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>отправить сообщение</button>
      </div>
    </div>
  );
};

export default Dialog;
