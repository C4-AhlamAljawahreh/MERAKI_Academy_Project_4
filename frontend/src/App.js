import "./App.css";
import Login from "./components/Login";
import { Routes, Route, Link} from "react-router-dom";
import Register from "./components/Rigester";
import Market from "./components/Market";
import NewProduct from "./components/NewProduct";
import { useState , createContext } from "react";


export const TokenContext = createContext();
function App() {
  const [token, setToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
   

  return (
    <div className="App">
      <h1>Welcome To App</h1>
      <Navigation isLogin={isLogin} />
      {/* <TokenContext.Provider value={token}>
        {isLogin?<Market/>:<></>}
          </TokenContext.Provider> */}
      <Routes>
        <Route
          path="/login"
          element={!isLogin? <Login setToken={setToken} setIsLogin={setIsLogin} />:<></>}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/market" element={isLogin?<TokenContext.Provider value={token}><Market/></TokenContext.Provider>:<></>} />
        <Route path="/newProduct" element={isLogin?<TokenContext.Provider value={token}><NewProduct/></TokenContext.Provider>:<></>} />

      </Routes>
      {/* <Login/> */}
    </div>
  );
}

const Navigation = (props) => {
  return (
    <>
      <div className="Navigation" style={{ display: "flex", gap: "20px" }}>
        {!props.isLogin ? (
          <>
            <Link to="/login">login </Link>
            <Link to="/register">register</Link>
          </>
        ) : (
          <><Link to="/market">Market</Link>
          <Link to="/newProduct">NewProduct</Link></>
        )}
      </div>
    </>
  );
};

export default App;
