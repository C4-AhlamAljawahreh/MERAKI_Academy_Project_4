import "./App.css";
import { Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/auth";


import Navigation from "./components/Navigation";
import Login from "./components/Login"
import Register from "./components/Rigester";
import Market from "./components/Market";
import NewProduct from "./components/NewProduct";

function App() {
  const {isLogIn } = useContext(AuthContext);

  return (
    <div className="App">
      <h1>Welcome To App</h1>
      <Navigation />

      <Routes>
        <Route path="/login" element={!isLogIn ? <Login /> : <></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/market" element={isLogIn ? <Market /> : <></>} />
        <Route path="/newProduct" element={isLogIn ? <NewProduct /> : <></>} />
      </Routes>
    </div>
  );
}



export default App;
