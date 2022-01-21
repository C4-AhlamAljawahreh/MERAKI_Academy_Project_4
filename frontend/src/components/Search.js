import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Product from "./Product";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const goTo = useNavigate;
  const { token, setProducts } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  return (
    <div className="search">
      <div className="searchByTitle">
      <input
        placeholder="product title.."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div className="svgSearch">
      <button className="svgButton"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="svgSvg"
          viewBox="0 0 16 16"
          // onClick={() => {
          //   axios
          //     .get(`http://localhost:5000/product/search_2?name=${title}`, {
          //       headers: {
          //         authorization: "Bearer " + token,
          //       },
          //     })
          //     .then((response) => {
          //       setProducts(response.data.result);
          //     })
          //     .catch((err) => {
          //       setMessage(err.response.data.message);
          //     });
          // }}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
      </div>
      </div>
      <div className="searchByCategory">
      <select
        placeholder="category"
        name="category"
        onChange={(e) => {
          setCategoryId(e.target.value);
        }}
      >
        <option value="61dda49d9224336c2c106606">Snacks and Candy</option>
        <option value="61e7d5335c4c85bd883d3abe"> Beverages</option>
      </select>
      <button className="submit"
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
      </div>
      {message ? <>{message}</> : <></>}
    </div>
  );
};
export default Search;
