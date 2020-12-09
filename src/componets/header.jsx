import React from "react";
import classes from"./header.module.css"

const Header =()=>{
  return(
  <div>
       <header className={classes.Header}>
       
          <p className="bed">тут дурацкий текст</p>
          <p className="bed_2">тут тоже </p>
        
      </header>
  </div>
  );
}
export default Header;