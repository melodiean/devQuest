import {
  useState,
  // useEffect
} from "react";

import React from "react";
import { Link } from "react-router-dom";


function Register() {
  const userInfo = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  };

  const [info, setInfo] = useState(userInfo);


  const handleChange = (el) => {
    const { name, value } = el.target;
    setInfo({...info,[name]:value,})
  };

  const handleSubmit = (elm) => {
    const url = "https://devquestapi.herokuapp.com/api/v1/auth/register";

    const Qdata = {
      firstname: info.firstname,
      lastname: info.lastname,
      email: info.email,
      password: info.password,
      password2: info.password2,
    };

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Qdata),
    };

    fetch(url, reqOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((er) => console.log({ Error: er.message }));

    elm.preventDefault();
  };

  return (
    <div className="log">
      <h5>Please Register</h5>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="FirstName"
          value={info.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="LastName"
          value={info.lastname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={info.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={info.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Enter Password Again"
          value={info.password2}
          onChange={handleChange}
        />
        <button className="btn-small waves-effect waves-light teal">
          SUBMIT
        </button>
      </form>
      <div>
           <p>Already a member?</p>
           <Link to="/login">LOGIN</Link>
        </div>
    </div>
  );
}

export default Register;
