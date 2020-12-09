import React from "react";
import "./navbar.css"

const Navbar =()=> {
return(
<div className="navbar">
<li className="list">
  <ul className="list_1">
    <a href="#">Home</a>
  </ul>
  <ul className="list_1">
    <a href="#">Messages</a>
  </ul>
  <ul className="list_1">
    <a href="#">New</a>
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