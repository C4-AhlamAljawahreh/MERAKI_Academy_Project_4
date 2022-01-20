import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Product from "./Product";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";


const Search=()=>{
    const goTo = useNavigate
    const {
        token,
        setProducts,
      } = useContext(AuthContext);
    
      const [title, setTitle] = useState("");
      const [message, setMessage] = useState("");
      const [categoryId, setCategoryId] = useState("");
    return (
        <div className="search">
        <input
          placeholder="product title.."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        
        <button
          onClick={() => {
             { title!=='all'?            axios
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
             }): <></> }

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
          <option value='all'>all</option>
          <option value="61dda49d9224336c2c106606">Snacks and Candy</option>
          <option value="61e7d5335c4c85bd883d3abe"> Beverages</option>
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
        </div>
    )
}
export default Search


       