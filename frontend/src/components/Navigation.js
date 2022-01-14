import React,{useContext} from "react";
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";


const Navigation = () => {
    const {isLogIn,logout,role} = useContext(AuthContext)
      return (
        <>
          <div className="Navigation" style={{ display: "flex", gap: "20px" }}>
            {!isLogIn ? (
              <>
                <Link to="/login">login </Link>
                <Link to="/register">register</Link>
              </>
            ) : (
              <>
                <Link to="/market">Market</Link>
                
                {role=='user'?<>               
                <Link to="/cart">Mycart</Link>
                
                </>:<>
                <Link to="/newProduct">NewProduct</Link>
                <Link to="/order">Orders</Link>
                </>}
              
                <button onClick={logout}>Logout</button>
              </>
            )}
          </div>
        </>
      );
    };

    export default Navigation;