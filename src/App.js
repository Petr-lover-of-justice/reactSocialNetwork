import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./componets/header/header";
import Navbar from "./componets/navbar/navbar";
import Profile from "./componets/filecontent/profile";
import Dialog from "./componets/dialog/dialog";
import { BrowserRouter, Route } from "react-router-dom";
import New from "./componets/new/new"
// import Home from './componets/filecontent/home/home';
import { addPost } from './componets/reduxa/state';

const App = (props) => {
  // let messedgedata = [
  //   { id: 1, messedge: "my ferst post", likepost: "  лайк 3" },
  //   { id: 2, messedge: "завали хлебальник", likepost: "  лайк 1160" },
  // ];
 
  return (
    <BrowserRouter>
      <div>
        <div className="main">
          <Header />
          <div className="center">
          <Navbar />
            {/* <Route path="/dialog" component={Dialog} />
            <Route path="/profile" component={Profile} />
            <Route path="/new" component={New} /> */}
            
            <Route path="/dialog" render={()=><Dialog DialogData={props.state.DialogData} messedgeData={props.state.messedgeData} />}   />
            <Route path="/profile" render={()=><Profile messedgedata={props.state.messedgedata} addPost={props.state.messedgedata.messedgedata}/>} />
            <Route path="/new" render={()=><New />} />
          </div>
        </div>
      </div>
      </ BrowserRouter>
  )
}

export default App;
