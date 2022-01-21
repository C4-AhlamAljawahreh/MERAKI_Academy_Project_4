import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Product from "./Product";



import { AuthContext } from "../context/auth";
const Market = () => {
  const getAllProducts = () => {
    axios
    .get(
      `http://localhost:5000/product?page=${page}&limit=${limit}&skip=${
        (page - 1) * limit
      }`,
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    )
    .then((response) => {
      setProducts(response.data.result);
      setUsername(response.data.username);
      setRole(response.data.role.role);
      setUserId(response.data.userId);
    });
  
  };
  const {
    token,
    setUsername,
    setRole,
    addToCart,
    setUserId,
    role,
    products,
    setProducts,
  } = useContext(AuthContext);

  const [message, setMessage] = useState("");
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
   getAllProducts();
  }, [page]);
  return (
    <>
      <div className="Market">
        <div className="previos">
          {page == 1 ? (
            <></>
          ) : (
            <svg
              onClick={() => {
                setPage(page - 1);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="svg"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          )}
        </div>
        {message ? <div className="message">{message}</div> : <></>}
        <div className="products">
          {products.map((element, index) => {
            return (
              <div key={index}>
                <Product
                  name={element.name}
                  price={element.price}
                  image={element.image}
                  description={element.description}
                />
                {role !== "admin" ? (
                  <>
                    {/* <div className="quantity">
                      <button
                        onClick={() => {
                          if (quantity != 1) {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <input placeholder="1" value={quantity} onChange={(e)=>{
                        setQuantity(e.target.value)
                        // e.target.value=quantity
                      }} />
                      <button
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div> */}
                    <svg
                      onClick={() => {
                        addToCart(element);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
                    </svg>
                  </>
                ) : (
                  <></>
                )}
                {role == "admin" ? (
                  <>
                    <svg
                      onClick={() => {
                        axios
                          .delete(
                            `http://localhost:5000/product/${element._id}`,
                            {
                              headers: {
                                authorization: "Bearer " + token,
                              },
                            }
                          )
                          .then((response) => {
                            setMessage(response.data.message);
                            setPage(page);
                          })
                          .catch((err) => {
                            console.log("error");
                          });
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
        <div className="pagination">
          <svg
            onClick={() => {
              setPage(page + 1);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="svg"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Market;
