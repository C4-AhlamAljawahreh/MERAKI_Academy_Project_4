import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Product from "./Product";

import { AuthContext } from "../context/auth";
const Market = () => {
    const {token,setUsername,username,setRole,cart,setCart}= useContext(AuthContext)

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setProducts(response.data.result);
        setUsername(response.data.username);
        setRole(response.data.role.role);
      });
  }, []);
  return (
    <>
      <div>
        <h1>Market</h1>
        <h3>welcome {username}</h3>
        <div className="products">
         
          {products.map((element, index) => {
            return (<div  key={index}>
              <Product
                name={element.name}
                price={element.price}
                image={element.image}
              />
              <button onClick={()=>{
                setCart([...cart,element])
              }}>add to cart</button></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Market;
