import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { TokenContext } from "../App";
import Product from "./Product";
const Market = () => {
  const token = useContext(TokenContext);
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
        console.log(response.data.result);
      });
  }, []);
  return (
    <>
      <div>
        <h1>Market</h1>
        <div className="products">
          {products.map((element, index) => {
            return (
              <>
                <div>
                    <Product name={element.name} price={element.price} image={element.image}/>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Market;
