import logo from "./logo.svg";
// import "./App.css";
import "./App.css"
import React from "react";
import Header from "./componets/header";
import Navbar from './componets/navbar';
import Profile from "./componets/profile";
// import Header from './componets/header';

const App = () => {
  return (
    <div className="main">
    <Header />
      <div className="center">
         <Navbar />
         <Profile />
      </div>
    </div>
  );
};

export default App;
