import React
// , { useState } 
from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Questions from "./components/Questions";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Logout from './components/Logout';
import "./App.css";

function App() {

  return (
    <div className="App">
      <h1 style={{color:"white",textShadow:"-2px -1px 4px gray"}}>devQuest</h1>
      {/* <Navbar /> */}
      {/* <Profile /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/questions" component={Questions} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
