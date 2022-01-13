import React, { useContext,useEffect } from "react";
import { AuthContext } from "../context/auth";
import Product from "./Product";
import { useNavigate } from "react-router-dom";


const Order = () => {
  const { cart, setCart } = useContext(AuthContext);
  const goTo=useNavigate()


  return (
    <>
      <div className="Order">
        {cart.map((element, index) => {
          return (
            <div className="myOrder">
              <Product
                name={element.name}
                price={element.price}
                image={element.image}
              />
              <button onClick={()=>{
                  cart.splice(index,1)
                  goTo('/order')
              }}>delete</button>
            </div>
    
          );
        })}
        <button className="checkOut">check Out</button>
      </div>
    </>
  );
};
export default Order;
