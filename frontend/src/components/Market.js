import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Product from "./Product";

import { AuthContext } from "../context/auth";
const Market = () => {
  const { token, setUsername, setRole, addToCart, setUserId, role ,cart} =
    useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  // const[skip,setSkip]=useState(0)
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
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
  }, [page]);
  return (
    <>
      <div>
        {/* search  */}
        <input
          placeholder="product title.."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          onClick={() => {
            axios
              .get(`http://localhost:5000/product/search_2?name=${title}`, {
                headers: {
                  authorization: "Bearer " + token,
                },
              })
              .then((response) => {
                setProducts(response.data.result);
              })
              .catch((err) => {
                setMessage(err.response.data.message);
              });
          }}
        >
          search
        </button>

        <select
          name="category"
          onChange={(e) => {
            setCategoryId(e.target.value);
          }}
        >
          <option>...</option>
          <option value="61dda49d9224336c2c106606">food</option>
        </select>
        <button
          onClick={() => {
            axios
              .get(
                `http://localhost:5000/product/search_3?category=${categoryId}`,
                {
                  headers: {
                    authorization: "Bearer " + token,
                  },
                }
              )
              .then((response) => {
                setProducts(response.data.result);
              })
              .catch((err) => {
                setMessage(err.response.data.result);
              });
          }}
        >
          submit
        </button>

        {message ? <>{message}</> : <></>}
        <div className="products">
          {products.map((element, index) => {
            return (
              <div key={index}>
                <Product
                  name={element.name}
                  price={element.price}
                  image={element.image}
                />
                {role !== "admin" ? (
                  <>

                    <svg
                      onClick={() => {
                        addToCart(element);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      class="svg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
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
          {page == 1 ? (
            <></>
          ) : (
            <button
              onClick={() => {
                setPage(page - 1);
              }}
            >
              previos
            </button>
          )}
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Market;
