import "./App.css";
import Login from "./components/Login";
import { Routes, Route, Link, Router } from "react-router-dom";
import Register from './components/Rigester'
import { useState } from "react";

function App() {
  const [token,setToken]=useState('')
  const [isLogin,setIsLogin]=useState(false)


  return (
    <div className="App">
      <h1>Welcome To App</h1>
      <Navigation isLogin={isLogin}/>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} setIsLogin={setIsLogin} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Login/> */}
    </div>
  );
}

const Navigation = (props) => {
  return (
    <>
      <div className="Navigation" style={{ display: "flex", gap: "20px" }}>
      {!props.isLogin?<><Link to="/login">login </Link>
        <Link to="/register">register</Link></>:<></>}

      </div>
    </>
  );
};

export default App;
