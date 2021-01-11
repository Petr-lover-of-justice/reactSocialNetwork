import React from "react";
import e from "./posts.module.css";

const Posts = (props) => {
 
  return (
    <div className={e.main}>
      <div className={e.like}>
        <div className={e.postimg}>
          {" "}
          <img
            src="https://infoklan.ru/wp-content/uploads/2019/08/8-19.jpg"
            alt="ну извините куда деваться"
          />
          {/* {props.avatar}//тут я пытался передать через props картинку */}
        </div>
        <div className={e.nameusers}>
          <span>natalie mars{props.likepost}</span>
          
          
          
        </div>
        <div>{props.messedge}</div>
        {/* <div>{messedgeElement}</div> */}
      </div>
    </div>
  );
};
export default Posts;
