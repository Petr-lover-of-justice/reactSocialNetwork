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
        </div>
        <div className={e.nameusers}>
          <p>natalie mars</p>
          {props.messedger}
          {props.likepost}
        </div>
      </div>
      <div className={e.allposts}>
        <div>
          <input type="text" />
        </div>
        <div className={e.button}>
          <button className>отправить пост</button>
        </div>
        <div className={e.posts}>
      </div>
      </div>
    </div>
  );
};
export default Posts;
