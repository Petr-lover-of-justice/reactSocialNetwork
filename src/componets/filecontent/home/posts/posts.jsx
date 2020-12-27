import React from "react";
import e from "./posts.module.css";

const Posts = (props) => {
  // let messedgedata = [
  //   { id: 1, messedge: "my ferst post", likepost: "  лайк 3" },
  //   { id: 2, messedge: "завали хлебальник", likepost: "  лайк 1160" },
  // ];
  // let messedgeElement = props.messedgedata.map( p => <Posts messedge={p.messedge} likepost={p.likepost} />)
 
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
          <span>natalie mars{props.likepost}</span>
          
          
          
        </div>
        <div>{props.messedge}</div>
        {/* <div>{messedgeElement}</div> */}
      </div>
      {/* <div className={e.allposts}>
        <div>
          <input type="text" />
        </div>
        <div className={e.button}>
          <button className>отправить пост</button>
        </div>
        <div className={e.posts}></div>
      </div> */}
    </div>
  );
};
export default Posts;
