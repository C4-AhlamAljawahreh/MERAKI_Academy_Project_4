import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const LoginProvider = (props) => {
  const goTo = useNavigate();

  const [isLogIn, setIsLogIn] = useState(false);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");
  const [totalPrice,setTotalPrice]=useState(0)
  const [productsId,setProductsId]=useState([])
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState( []);
  // const [cart, setCart] = useState(
  //   localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  // );

  useEffect(() => {
    setToken(localStorage.getItem("Token"));
    if (token) {
      saveToken(token);
    }
    if (isLogIn) {
      goTo("/");}
  }, [token]);

  //this function to save the token
  const saveToken = (token) => {
    setToken(token);
    setIsLogIn(true);
  };
  const addToCart =(object)=>{
    setCart([...cart,object])
    setProductsId([...productsId,object._id])
    setTotalPrice(totalPrice + object.price)
    localStorage.setItem("cart", cart);
  }

  const logout = () => {
    setIsLogIn(false);
    localStorage.clear();
    goTo("/");
  };

  const state = {
    token,
    isLogIn,
    username,
    role,
    logout,
    saveToken,
    setIsLogIn,
    setUsername,
    setRole,
    cart,
    setCart,
    addToCart,
    totalPrice,
    setProductsId,
    productsId,
    setUserId,
    userId,
    products,
    setProducts
   
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default LoginProvider;
