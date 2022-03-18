import React from "react";
import { BrowserRouter} from "react-router-dom";
import {  Routes, Route} from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
// import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
   <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
