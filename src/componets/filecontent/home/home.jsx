import React  from 'react';
import f from "./home.module.css"
import Posts from './../post/posts';
const Home=()=>{
  let messedgedata =[
    {id:1, messedge:"my ferst post",likepost:"  лайк 3" },
    {id:2, messedge:"завали хлебальник", likepost:"  лайк 1160"}

  ]
  let messedgeelement = messedgedata
  .map (p=><Posts messedge={p.messedge} likepost={p.likepost}/>)

  return(
    <div className="file">
      <img src="https://w-dog.ru/wallpapers/9/11/432054144807159/zakat-vecher-more-nebo-gorizont-solnce-voda-oblaka.jpg"></img>
      {messedgeelement}
      
      {/* <Posts messedger={messedgedata[0].messedger} likepost = {messedgedata[0].likepost} />
      <Posts messedger={messedgedata[1].messedger} likepost = {messedgedata[1].likepost}/>
   */}
    </div>
  );
}
export default Home;