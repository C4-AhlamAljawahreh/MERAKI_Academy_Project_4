import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    token,
    userId,
    setCart,
    setProductsId,
    totalPrice,
    productsId,
  } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const goTo = useNavigate();

  return (
    <>
      <div className="Cart">
        {cart.map((element, index) => {
          return (
            <div key={index} className="myCart">
              <Product
                id={element._id}
                name={element.name}
                price={element.price}
                image={element.image}
              />
              <button
                onClick={() => {
                  cart.splice(index, 1);
                  goTo("/cart");
                }}
              >
                delete
              </button>
            </div>
          );
        })}
        <button
          className="checkOut"
          onClick={() => {
            axios
              .post(
                "http://localhost:5000/order",
                { products: productsId, totalPrice, userId },
                {
                  headers: {
                    authorization: "Bearer " + token,
                  },
                }
              )
              .then((response) => {
                setMessage(response.data.message);
                setCart([]);
                setProductsId([]);
              })
              .catch((err) => {
                setMessage(err.response.data.message);
              });
          }}
        >
          check Out
        </button>
        {message ? (
          <>
            <div className="message">{message}</div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Cart;
