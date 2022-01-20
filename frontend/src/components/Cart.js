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
                description={element.description}
                price={element.price}
                image={element.image}
              />
              <svg
                              onClick={() => {
                                cart.splice(index, 1);
                                goTo("/cart");
                              }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-cart-dash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" />
              </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            class="svgCheckOut"
            viewBox="0 0 16 16"
          >
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
          </svg>
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
