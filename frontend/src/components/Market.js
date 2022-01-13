import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Product from "./Product";

import { AuthContext } from "../context/auth";
const Market = () => {
    const {token}= useContext(AuthContext)

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
      });
  }, []);
  return (
    <>
      <div>
        <h1>Market</h1>
        <div className="products">
          {products.map((element, index) => {
            return (
              <Product
                name={element.name}
                price={element.price}
                image={element.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Market;
