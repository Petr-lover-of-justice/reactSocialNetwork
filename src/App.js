import logo from "./logo.svg";
// import "./App.css";
import "./App.css";
import React from "react";
import Header from "./componets/header/header";
import Navbar from "./componets/navbar/navbar";
import Profile from "./componets/filecontent/profile";
import Dialog from "./componets/dialog/dialog";
import { BrowserRouter, Route } from "react-router-dom";
import New from "./componets/new/new"
import Home from './componets/filecontent/home/home';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="main">
          <Header />
          <div className="center">
          <Navbar />
            <Route path="/dialog" component={Dialog} />
            <Route path="/profile" component={Profile} />
            <Route path="/new" component={New} />
            

            {/* <Profile /> */}
            {/* <Dialog /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
