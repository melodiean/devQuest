import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return <div>
      {/* <Link to="/">HOME</Link> */}
      {/* <Link to="/profile">PROFILE</Link> */}
      <Link to="/questions">QUESTIONS</Link>
      <Link to="/logout">LOGOUT</Link>
      {/* <Link to="/register">REGISTER</Link> */}
  </div>
  
}

export default Navbar;
