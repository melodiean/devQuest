import React from "react";
// import wall from "../wall.jpg";
import Navbar from "./Navbar";
import Login from './Login';
import Pages from './Pages'
function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Pages />
    <Login />
        {/* <img src={wall} alt="Img" /> */}
      </div>
    </div>
  );
}

export default Home;
