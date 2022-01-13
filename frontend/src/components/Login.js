import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  return (
    <>
      <div className="Login">
        <input
          placeholder="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            axios
              .post("http://localhost:5000/login", { email, password })
              .then((result) => {
                console.log(result.data);
                props.setToken(result.data.token);
                props.setIsLogin(true);
              })
              .catch((err) => {
                console.log("error");
              });
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};
export default Login;
