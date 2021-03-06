import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth";
import Product from "./Product";

const Order = () => {
  const goTo= useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const { token } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/order/${id}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setProducts(response.data.order.products);
        console.log(products)
      })
      .catch((err) => {
        setProducts([]);
      });
  }, []);

  return (
    <>
      <div className="Order">
        {products.map((ele, index) => {
          return (
            <>
              <Product
                key={index}
                name={ele.name}
                price={ele.price}
                image={ele.image}
                description={ele.description}
              />
            </>
          );
        })}
      </div>
      <button
        onClick={() => {
          axios
            .delete(`http://localhost:5000/order/${id}`, {
              headers: {
                authorization: "Bearer " + token,
              },
            })
            .then((response) => {
              setMessage(response.data.message);
              setProducts([]);
              // goTo("/order")
            })
            .catch((err) => {
              setMessage(err.response.data.message);
            });
        }}
      >
        delete Order
      </button>
      {message ? (
        <>
          <div>{message}</div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Order;
