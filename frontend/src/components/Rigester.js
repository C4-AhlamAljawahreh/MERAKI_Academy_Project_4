import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <div className="Register" style={{ display: "grid", gap: "20px" }}>
        <input
          placeholder="firstName"
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          placeholder="lastName"
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          placeholder="age"
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
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
              .post("http://localhost:5000/users", {
                firstName,
                lastName,
                age,
                email,
                password,
              })
              .then((response) => {
                setIsRegistered(true);
                setMessage(response.data.message);
              })
              .catch((err) => {
                setMessage(err.response.data.message);
              });
          }}
        >
          Register
        </button>
        {isRegistered ? (
          <>
            {" "}
            <div className="Message">
              <p>{message}</p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Register;
