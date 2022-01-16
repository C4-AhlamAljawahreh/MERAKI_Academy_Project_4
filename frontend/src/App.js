import "./App.css";
import { Routes, Route,useParams} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/auth";


import Navigation from "./components/Navigation";
import Login from "./components/Login"
import Register from "./components/Rigester";
import Market from "./components/Market";
import NewProduct from "./components/NewProduct";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import Order from "./components/Order";

function App() {
  const {isLogIn ,role} = useContext(AuthContext);

  return (
    <div className="App">
      <h1>D<snap className="snap">OO</snap>kanti</h1>
      <Navigation />

      <Routes>
      {/* <Route path="/" element={ <Home /> } /> */}
        <Route path="/login" element={!isLogIn ? <Login /> : <></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/market" element={isLogIn ? <Market /> : <></>} />
        <Route path="/newProduct" element={isLogIn ? <NewProduct /> : <></>} />
        <Route path="/cart" element={isLogIn && role =="user"? <Cart /> : <></>} />
        <Route path="/order" element={isLogIn && role=='admin' ? <Orders /> : <></>} />
        <Route path="/order/:id" element={isLogIn && role=='admin' ? <Order /> : <></>} />
      </Routes>
    </div>
  );
}



export default App;
