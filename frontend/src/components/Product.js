import React from "react";

const Product =(props)=>{
    return (
        <>
          <div className="product">
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>
            <img src={props.image} />
          </div>
        </>
      );
}

export default Product