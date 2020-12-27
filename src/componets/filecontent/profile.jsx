import React from "react";
import f from "./profile.module.css";
import Home from "./home/home";
// import Posts from "./posts/posts";
import Titlepost from './headerpost.jsx/titlepost';
const Profile = () => {
  // let messedgedata = [
  //   { id: 1, messedge: "my ferst post", likepost: "  лайк 3" },
  //   { id: 2, messedge: "завали хлебальник", likepost: "  лайк 1160" },
  // ];

  // let messedgeelement = messedgedata.map((p) => (
  //   <Posts messedge={p.messedge} likepost={p.likepost} />
  // ));

  return (
    <div>
    <Titlepost />
      <Home />
      {/* <Posts messedgedata={messedgedata}/> */}
       {/* <Posts Posts={messedgedata} />
      <Posts messedge={p.messedge} likepost={p.likepost} />  */}
    </div>
  );
};
export default Profile;
