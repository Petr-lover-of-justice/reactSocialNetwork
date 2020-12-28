import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './componets/reduxa/state';

// let messedgedata = [
//   { id: 1, messedge: "my ferst post", likepost: "  лайк 3" },
//   { id: 2, messedge: "завали хлебальник", likepost: "  лайк 1160" },
// ];
// let DialogData = [
//   {id: "1", name: "Екатерина"},
//   {id: "2", name: "Игорь"},
//   {id: "3", name: "Анна"},
//   {id: "4", name: "Егор"},
// ]
//   let messedgeData =[
//     {id: "1", messedge: "Привет"},
//     {id: "2", messedge: "Привет"},
//     {id: "3", messedge: "Пошел в попу"},
//     {id: "4", messedge: "Ты же первая написала."},
    
//   ]

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();