import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
const Product = (props) => {
  const {addToCart, role } =
  useContext(AuthContext);
  return (
    <>
      <div className="product">
      <img src={props.image} />
        <h4>{props.name}</h4>
        <h3>Price:{props.price}</h3>

      </div>
    </>
  );
};

export default Product;
