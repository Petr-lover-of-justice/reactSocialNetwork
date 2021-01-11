import React from "react";
import f from "./home.module.css";
// import Posts from './../post/posts';
import Posts from "./posts/posts";
// import { addPost } from './componets/reduxa/state';

const Home = (props) => {
    
  let messedgeElement = props.messedgedata.messedgedata.map((p) => (
    <Posts messedge={p.messedge} likepost={p.likepost} addPost={p.addPost}/>
  ));

  let newPostElement = React.createRef();//кнопка для показывания
  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text);
  };
  return (
    <div className="file">
      {/* <img src="https://w-dog.ru/wallpapers/9/11/432054144807159/zakat-vecher-more-nebo-gorizont-solnce-voda-oblaka.jpg"></img> */}
      <div className={f.allposts}>
        {/* <div>
          <input type="text" />
        </div> */}
        <div>
        <textarea ref={newPostElement}></textarea>
        </div>
        <div className={f.button}>
          <button onClick={addPost}>отправить пост</button>
        </div>
        <div className={f.posts}></div>
      </div>
      {messedgeElement}
      {/* <Posts messedger={messedgedata[0].messedger} likepost = {messedgedata[0].likepost} />
      <Posts messedger={messedgedata[1].messedger} likepost = {messedgedata[1].likepost}/>
   */}
    </div>
  );
};
export default Home;
