import React from "react";

const Product = (props) => {
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
