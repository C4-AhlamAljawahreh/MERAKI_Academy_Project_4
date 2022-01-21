import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { useNavigate, useParams } from "react-router-dom";

const Orders = () => {
  const { token} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const goTo = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/order", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setOrders(response.data.orders);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Orders</h1>
        <div className="Orders">
          {orders.map((element, index) => {
            return (<div className="order" key ={index} >
            <p>totalPrice: {element.totalPrice}</p>
            <p>items: {element.products.length}</p>
            <button onClick={()=>{
              goTo(`/order/${element._id}`)
            }}>Detailes</button>
            </div>

            );
          })}
        </div>
      </div>
    </>
  );
};
export default Orders;


