import React from "react";
import classes from"./header.module.css"

const Header =()=>{
  return(
  <div>
       <header className={classes.header}>
       
          <p className="bed">шапка</p>
          <p className="bed_2">тут тоже </p>
        
      </header>
  </div>
  );
}
export default Header;