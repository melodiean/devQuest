import { React, useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Login(
  // { setToken }
  ) {
  const userInfo = {
    email: "",
    password: "",
  };

  const [info, setInfo] = useState(userInfo);
 

  const handleChange = (el) => {
    const { name, value } = el.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (elm) => {
    const url = "https://devquestapi.herokuapp.com/api/v1/auth/login";

    const Qdata = {
      email: info.email,
      password: info.password,
    };

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Qdata),
    };

    fetch(url, reqOptions)
      .then((res) => res.json())
      .then((data) => {
        // setToken(data.token)
          console.log(data);
      })
      .catch((er) => console.log({ Error: er.message }));

    elm.preventDefault();
  };

  // Login.propTypes = {
  //   setToken: PropTypes.func.isRequired,
  // };

  return (
    <div className="log">
      <h5>Please Login</h5>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="email"
            name="email"
            value={info.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={info.password}
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="btn-small waves-effect waves-light teal"
        >
          SUBMIT
        </button>
        <div>
          <p>Not a member?</p>
          <Link to="/register">REGISTER</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
