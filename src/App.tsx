import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/Navbar/Navbar";
import Route from "./Route/MyRoute";
import MyRoute from "./Route/MyRoute";
import FindUser from "./Page/findUser";

function App() {
  return (
    <div>
      <Navbar/>
      <MyRoute/>

        <FindUser/>
    </div>
  );
}

export default App;
