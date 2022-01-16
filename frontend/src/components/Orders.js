import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { useNavigate, useParams } from "react-router-dom";

const Orders = () => {
  const { token, username,role ,userId} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  // const [filtered, setFiltered] = useState([]);

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
// setFiltered(orders.filter((ele,i)=>{
//   return ele.userId == userId
// }))
// console.log(filtered);
  return (
    <>
      <div>
        <h1>Orders</h1>
        <h3>welcome {username}</h3>
        <div className="Orders">
{role == 'admin'?<>
{orders.map((element, index) => {
  return (
    <div className="order" key={index}>
      <p>userId: {element.userId}</p>
      <p>items: {element.products.length}</p>
      <button
        onClick={() => {
          goTo(`/order/${element._id}`);
        }}
      >
        Detailes
      </button>
    </div>
  );
})}
</>:<></>}
{/* {role == 'user'? <>
{ filtered.map((element,index)=>{
  return (    <div className="order" key={index}>
  <p>userId: {element.userId}</p>
  <p>items: {element.products.length}</p>
  <button
    onClick={() => {
      goTo(`/order/${element._id}`);
    }}
  >
    Detailes
  </button>
</div>)
})}
</>:<></>} */}
        </div>
      </div>
    </>
  );
};
export default Orders;


