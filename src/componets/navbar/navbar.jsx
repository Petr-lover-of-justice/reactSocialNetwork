import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css"

const Navbar =()=> {
return(
<div className="navbar">
<li >
  <ul className="list_1">
    <NavLink to="/profile" activeClassName={s.limkHome}>Home</NavLink>
  </ul>
  <ul className="list_1">
    <NavLink to="/dialog" activeClassName={s.limkHome}>Messages</NavLink>
  </ul>
  <ul className="list_1">
    <NavLink to="/New" activeClassName={s.limkHome}>New</NavLink>
 </ul>
 <ul className="list_1">
   <a href="#">Music</a>
  </ul >
  <ul className="list_1">
    <a href="#">Setting</a>
  </ul>
</li>
</div>
)}
export default Navbar;