import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { saveToken } = useContext(AuthContext);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [message, setMessage] = useState("");
  const goTo = useNavigate();
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
              .then((response) => {
                if (response.data.success) {
                  saveToken(response.data.token);
                  goTo("/market");
                } else {
                  setMessage(response.data.message);
                }
              })
              .catch((err) => {
                setMessage(err.response.data);
              });
          }}
        >
          Login
        </button>

        {message ? <div className="message">{message}</div> : <></>}
      </div>
    </>
  );
};
export default Login;
