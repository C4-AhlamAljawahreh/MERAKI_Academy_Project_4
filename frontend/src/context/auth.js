import React, { useState,createContext ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();



const LoginProvider = (props) => {
  const goTo = useNavigate();

  const [isLogIn, setIsLogIn] = useState(false);
  const [token, setToken] = useState("");


//to save user process .
useEffect(()=>{
    saveToken(localStorage.getItem('token'))
},[]) 


//this function to save the token 
  const saveToken = (token) => {
    setToken(token);
    setIsLogIn(true);
    localStorage.setItem("token", token);
  };



  const logout = () => {
    setIsLogIn(false);
    localStorage.clear();
    goTo("/login");
  };



  const state = {
    token,
    isLogIn,
    logout,
    saveToken,
    setIsLogIn,
  };


  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default LoginProvider;