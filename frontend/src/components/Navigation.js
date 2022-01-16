import React,{useContext} from "react";
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";


const Navigation = () => {
    const {isLogIn,logout,role,username} = useContext(AuthContext)
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
                {role!=='admin'?<>  
                <Link to="/market">Market</Link>             
                <Link to="/cart">Mycart</Link>
                {/* <Link to="/order">MyOrders</Link> */}
                </>:<>
                </>}
                {role=='admin'?<>  
                <Link to="/market">Market</Link>             
                <Link to="/newProduct">NewProduct</Link>
                <Link to="/order">Orders</Link>
                </>:<>

                </>}
              
                <button onClick={logout}>Logout</button>
                <p className="username">{username}</p>
              </>
            )}
          </div>
        </>
      );
    };

    export default Navigation;