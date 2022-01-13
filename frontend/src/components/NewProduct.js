import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth";
const NewProduct = () => {
  const token = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  return (
    <>
      <div className="NewProduct" style={{ display: "grid", gap: "20px" }}>
        New product
        <input
          placeholder="product name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="product price"
          type="text"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          placeholder="image url "
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        <button
          onClick={() => {
            axios
              .post(
                "http://localhost:5000/product",
                { name, price, image },
                {
                  headers: {
                    authorization: "Bearer " + token,
                  },
                }
              )
              .then((response) => {
                console.log(response.data);
              });
          }}
        >
          add product to market
        </button>
      </div>
    </>
  );
};
export default NewProduct;
