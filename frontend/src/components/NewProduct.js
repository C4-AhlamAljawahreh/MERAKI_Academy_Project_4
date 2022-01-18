import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import storage from "./firebase";
import { AuthContext } from "../context/auth";

const NewProduct = () => {
  const { token } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const [url, setUrl] = useState("");

  return (
    <>
      <div className="NewProduct" style={{ display: "grid", gap: "20px" }}>
        New product
        <input
          placeholder="product name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="product price"
          type="text"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        {/* <input
          placeholder="image url "
          type="text"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        /> */}
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <button
          onClick={() => {
            if (image == null) {
              return;
            }
            storage
              .ref(`/images/${image.name}`)
              .put(image)
              .on("state_changed", alert("success"), alert);

            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((response) => {
                setUrl(response);
              });
         
          }}
        >
          Submit
        </button>
        <select
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option>all</option>
          <option value="61dda49d9224336c2c106606">food</option>
        </select>
        <button
          onClick={() => {
            axios
              .post(
                "http://localhost:5000/product",
                { name, price, image: url, category },
                {
                  headers: {
                    authorization: "Bearer " + token,
                  },
                }
              )
              .then((response) => {
                setMessage(response.data.message);
              })
              .catch((err) => {
                setMessage(err.response.data.message);
              });
          }}
        >
          add product to market
        </button>
        {message ? <div className="message">{message}</div> : <></>}
      </div>
    </>
  );
};
export default NewProduct;
