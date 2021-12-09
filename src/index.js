import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';

import Header from "../src/components/Header/Header"
import SideHeader from "../src/components/SideHeader/index"
import New from "./containers/New/New.js"
import Home from "./containers/Home/Home.js"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
  <Header/>
  <SideHeader/>

    <Routes>
      {/* <Route path="/About" element={<About/>} /> */}
      <Route path="/new" element={<New/>} />
      <Route path="/" element={<Home/>} />
      </Routes>

  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
