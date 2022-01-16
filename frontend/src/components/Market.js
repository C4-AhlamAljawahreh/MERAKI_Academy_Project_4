import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import Product from "./Product";

import { AuthContext } from "../context/auth";
const Market = () => {
  const { token, setUsername, username, setRole, addToCart, setUserId, role } =
    useContext(AuthContext);
    

  const [products, setProducts] = useState([]);
  const [title,setTitle]= useState('')
  const [message,setMessage]= useState('')
  // const[skip,setSkip]=useState(0)
  const[limit,setLimit]=useState(4)
  const[page,setPage]=useState(1)
  const[categoryId,setCategoryId]=useState('')

  

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product?page=${page}&limit=${limit}&skip=${(page-1)*limit}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
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
        <h1>Market</h1>
        <h3>welcome {username}</h3>
        <input placeholder="product title.." onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button onClick={()=>{
          axios.get(`http://localhost:5000/product/search_2?name=${title}`, {
            headers: {
              authorization: "Bearer " + token,
            },
          }).then((response)=>{
            setProducts(response.data.result)
          }).catch((err)=>{
            setMessage(err.response.data.message)
          })
        }}>search</button>

<select name="category"  onChange={(e)=>{
setCategoryId(e.target.value)
}}>
<option >all</option>
  <option value='61dda49d9224336c2c106606'>clothes</option>
</select>
<button onClick={()=>{
axios.get(`http://localhost:5000/product/search_3?category=${categoryId}`, {
  headers: {
    authorization: "Bearer " + token,
  },
}).then((response)=>{
  setProducts(response.data.result)
}).catch((err)=>{
  setMessage(err.response.data.result)
})
}}>submit</button>
       
        {message?<>{message}</>:<></>}
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
                    <button
                      onClick={() => {
                        addToCart(element);
                      }}
                    >
                      add to cart
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
       {page == 1? <></>:<button onClick={()=>{
          setPage(page-1)
        }}>previos</button> }
        <button onClick={()=>{
          setPage(page+1)
        }}>next</button>
      </div>
    </>
  );
};

export default Market;
